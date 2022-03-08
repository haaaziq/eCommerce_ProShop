import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const router = express.Router();

// @desc        Fetch All products
// @route       GET /api/products
// @access      Public
router.get("/", asyncHandler(async(req, res) => {
// while dealing with promises, instead of try-catch block
// we can use express-async-handler to handle exceptions
    const products = await Product.find({});
    res.json(products);
}));

// @desc        Fetch Single product
// @route       GET /api/products/:id
// @access      Public
router.get("/:id", asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id);
    if(product){
        res.json(product);
    } else{
        res.status(404).json({message: "Product Not Found!!"});
    }
}));

export default router;