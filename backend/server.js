require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const indexRoutes = require('./routes/index.routes');
const connectDB = require('./config/db');

const app = express();

connectDB(process.env.MONGO_URI);

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api', indexRoutes);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
