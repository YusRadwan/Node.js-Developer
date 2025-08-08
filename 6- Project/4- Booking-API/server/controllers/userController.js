const User = require('../models/User');
const generateToken = require('../../utils/generateToken');

// Register new user
    let registerUser = async (req, res) => {
        const {name, email, password} = req.body;
        try {
            const userEmail = await User.findOne({email});
            if(userEmail) return res.status(400).json({msg: "user is Exist"});

            const newUser = new User(req.body);

            await newUser.save();

            res.status(201).json({
                name: newUser.name,
                email: newUser.email
            });

        } catch (err) {
            res.status(500).json({msg: "Error When Register"});
            console.log(err.message);
        }
    }

// Login user
    let loginUser = async (req, res) => {
        const {email, password} = req.body;
        try {
            const user = await User.findOne({email});

            if(!user) return res.status(400).json({msg: "User not found"});

            const isMatch = await user.comparePassword(password);

            if(!isMatch) return res.status(401).json({msg: "Invalid credentials"});

            const token = generateToken(user);

            res.status(200).json({ msg: `welcome ${user.role}`, user: user.name, token});
        } catch (err) {
            return res.status(500).json({msg: "Error When Try Login"}, console.log(err.message));
        }
    }


// Get All User
    const getAllUser = async (req, res) => {
        try {
            const allUser = await User.find({}).select('-password');
            res.status(200).json({msg: 'Welcome Admin', users: allUser});
        } catch (err) {
            res.status(500).json({msg: "Error When Get All User"});
            console.log(err.message);
        }
    }

// Profile User
    const getProfile = (req, res) => {
        try {
            res.status(200).json({msg: 'Welcome Profile Page', user: req.user});
        } catch (err) {
            res.status(500).json({msg: "Wrong With Profile Page"});
            console.log(err.message);
        }
    }

// Delete User
    const deleteUser = async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if(!user) return res.status(404).json({msg: "user Not Found"});
            await user.deleteOne();
            const allUser = await User.find({}).select('-password');
            res.status(201).json({msg: "user is Deleted", users: allUser});
        } catch (err) {
            res.status(500).json({msg: "Wrong When Delete User"});
            console.log(err.message);
        }
    }

module.exports = {
    registerUser,
    loginUser,
    getAllUser,
    getProfile,
    deleteUser
}