// Libraries
    const User = require('../models/User');
    const bcrypt = require('bcryptjs');

// Utilities
    const generateToken = require('../../utils/generateToken');
    const responseHandler = require('../../utils/responseHandler');

// Middleware
    const asyncWrapper = require('../middleware/asyncWrapper');

// Register new user
    const registerUser = asyncWrapper (async (req, res) => {
        const {name, email, password} = req.body;
        const userEmail = await User.findOne({email});
        if(userEmail) return res.status(400).json({msg: "user is Exist"});

        const newUser = new User(req.body);

        await newUser.save();

        responseHandler(res, 201, 'Successfully Register', {
            name: newUser.name,
            email: newUser.email
        });
    });

// Login user
    const loginUser = asyncWrapper(async (req, res) => {
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if(!user) return res.status(400).json({msg: "User not found"});

        const isMatch = await user.comparePassword(password);

        if(!isMatch) return res.status(401).json({msg: "Invalid credentials"});

        const token = generateToken(user);

        responseHandler(res, 200, `Welcome ${user.name}`, {
            role: user.role,
            token
        });
    });

// Get All User
    const getAllUser = asyncWrapper(async (req, res, next) => {

        // Pagination
            let limit = parseInt(req.query.limit) || 2;
            let page = parseInt(req.query.page) || 1;
            let skip = (page - 1) * limit;

        // Filtering by spread operator
            const filter = {
                ...(req.query.role && { role: req.query.role }),
                ...(req.query.name && { name: req.query.name })
            };

        // Get All User by Filter & Pagination
            const allUser = await User.find(filter)
                .select('-password')
                .limit(limit)
                .skip(skip);

        // Calculate
            let totalUsers = await User.countDocuments(filter);

        responseHandler(res, 200, `Welcome ${req.user.userName}`, {
            page,
            limit,
            totalUsers,
            totalPages: Math.ceil(totalUsers / limit),
            users : allUser
        });
    });

// Profile User
    const getProfile = asyncWrapper((req, res) => {
        responseHandler(res, 200, `Welcome Profile ${req.user.userName}`, req.user);
    });

// Update by admin or user update itself
    const updateUser = asyncWrapper(async (req, res) => {
        // Make sure the user
            const user = await User.findById(req.params.id);
            if(!user) return res.status(404).json({msg: 'User Not Found'});

        // Preventing the change of the role unless it is admin
            if(req.body.role && req.user.userRole !== 'admin') {delete req.body.role;}

        // Hash to the password, but if it was actually sent
            const updateData = {...req.body};
            if(req.body.password) {
                updateData.password = await bcrypt.hash(req.body.password, 10);
            }

        // Update and Return data without password
            const userUpdate = await User.findByIdAndUpdate(
                req.params.id,
                updateData,
                {new: true, runValidators: true}
            ).select('-password');
        
        responseHandler(res, 201, 'User Is Updated', userUpdate);
    });

// Delete User
    const deleteUser = asyncWrapper(async (req, res) => {
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({msg: "user Not Found"});
        await user.deleteOne();
        const allUser = await User.find({}).select('-password');
        responseHandler(res, 201, 'User Is Deleted', allUser);
    });

module.exports = {
    registerUser,
    loginUser,
    getAllUser,
    getProfile,
    updateUser,
    deleteUser
}