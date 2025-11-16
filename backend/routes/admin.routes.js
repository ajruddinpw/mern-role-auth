const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const requireRole = require('../middleware/role');
const adminControllers = require('../controllers/admin.controller');

// GET user list - Admin only
router.get('/users', verifyToken, requireRole(['admin']),adminControllers.getAllUsers);

module.exports = router;
