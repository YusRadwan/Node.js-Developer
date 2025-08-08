
// Higher-Order Middleware
    const checkRole = (authRole) => {
        return (req, res, next) => {
            if (req.user.userRole !== authRole) return res.status(403).json({msg: "Forbidden Role", user: req.user});
            next();
        }
    }

module.exports = checkRole;