import mongoose from "mongoose";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import colors from 'colors';
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";

dotenv.config();
connectDB();

// function to import sample data into MongoDB
const importData = async () => {
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        const allUsers = await User.insertMany(users);
        const adminUserID = allUsers[0]._id;

        // inserting user field (admin id) in sample products
        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUserID };
        });

        await Product.insertMany(sampleProducts);
        console.log("Data Imported into MongoDB".green.inverse);

        process.exit(); // just exit
    } catch (error) {
        console.error(`${error.message}`.red.inverse);
        process.exit(1); // exit with failure
    }
};

// function to destroy all data in MongoDB
const destroyData = async () => {
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();
        console.log("All Data Destroyed!".red.inverse);

        process.exit(); // just exit
    } catch (error) {
        console.error(`${error.message}`.red.inverse);
        process.exit(1); // exit with failure
    }
};

// if command => node backend/seeder -d => then call destroyData function
// else command => node backend/seeder => then call importData function
if(process.argv[2]=="-d"){
    destroyData();
} else{
    importData();
}