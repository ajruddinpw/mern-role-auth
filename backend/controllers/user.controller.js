const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userControllers = {
    register: async (req, res) => {
        try{
            const { name, email, password, role } = req.body;

            const validRoles = ['partner', 'customer'];

            if(!validRoles.includes(role)){
                return res.status(400).json({ message: 'Invalid role specified' });
            }

            // simple server-side password strength check
            if (!password || password.length < 6) {
              return res.status(400).json({ message: 'Password must be at least 6 characters' });
            }

            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }

            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(password, salt);
            const newUser = new User({ name, email, password: hashed, role });
            await newUser.save();
            res.status(201).json({ message: 'User registered successfully' });
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },
    login: async (req, res) => {    
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) return res.status(400).json({ message: 'User does not exist' });
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
            const token = jwt.sign({ id: user._id, role: user.role, name: user.name, email: user.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
            res.status(200).json({
                message: 'Login successful',
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    role: user.role
                }
            });
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
};

module.exports = userControllers;
