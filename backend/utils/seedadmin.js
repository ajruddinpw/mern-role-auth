// Run: node utils/seedadmin.js
require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const seed = async () => {
  await connectDB(process.env.MONGO_URI);
  const existing = await User.findOne({ email: 'admin@example.com' });
  if (existing) {
    console.log('Admin already exists');
    process.exit(0);
  }
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash('Admin@123', salt);
  const admin = new User({
    name: 'Admin',
    email: 'admin@example.com',
    password: hashed,
    role: 'admin'
  });
  await admin.save();
  console.log('Admin seeded: admin@example.com / Admin@123');
  process.exit(0);
};

seed().catch(console.error);
