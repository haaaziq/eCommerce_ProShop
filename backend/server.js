// this is CommonJs... CommonJS => require, ES Modules => import
import express from 'express';
import dotenv from 'dotenv';

// while importing file we have to include .js (modules are imported w/o .js)
import connectDB from './config/db.js';
import products from './data/products.js';

dotenv.config();
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send(`API is running at port ${PORT}...`);
});

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.listen(
    PORT, 
    console.log(`Server started in ${process.env.NODE_ENV} mode on port ${PORT}`)
);