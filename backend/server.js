//  CommonJS => require, ES Modules => import
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
// while importing file we have to include .js (modules are imported w/o .js)
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send(`API is running at port ${PORT}`);
});

// Product Routes
app.use('/api/products', productRoutes);

app.listen(
    PORT, 
    console.log(`Server started in ${process.env.NODE_ENV} mode on port ${PORT}`.magenta.italic)
);