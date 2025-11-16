const { Router } = require('express');
const userControllers = require('../controllers/user.controller');


const userRoutes = Router();

userRoutes
    .post('/register', userControllers.register)
    .post('/login', userControllers.login);

module.exports = userRoutes;
