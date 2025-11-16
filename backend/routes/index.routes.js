const { Router }= require('express');
const adminRoutes = require('./admin.routes');
const userRoutes = require('./user.routes');
 const indexRoutes = Router();
    indexRoutes.use('/admin', adminRoutes);
    indexRoutes.use('/user', userRoutes);

indexRoutes.get('/', (req, res)=>{
    res.send('API is running...');
});

module.exports = indexRoutes;
