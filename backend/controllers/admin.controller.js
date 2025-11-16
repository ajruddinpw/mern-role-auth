const User = require('../models/User');

const adminControllers = {};

adminControllers.getAllUsers = async (req, res) => {
    try {
        const { role } = req.query;
        const filter = {};

        if(role){
            filter.role = role;
        }

        const users = await User.find(filter).select('-password');
        res.status(200).json(users);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
module.exports = adminControllers;
