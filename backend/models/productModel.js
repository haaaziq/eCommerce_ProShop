import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true }
}, {
    timestamps: true,
})

const productSchema = mongoose.Schema({
    // which user(Admin) created the product
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' // above ObjectId refers to User model
    },
    name : {
        type: String,
        required: true
    },
    image : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    brand : {
        type: String,
        required: true
    },
    category : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true,
        default: 0.0
    },
    countInStock : {
        type: Number,
        required: true,
        default: 0
    },
    reviews : [reviewSchema],
    numReviews : {
        type: Number,
        required: true,
        default: 0
    },
    rating : {
        type: Number,
        required: true,
        default: 0
    }
}, {
    // it take care of 'created at', 'modified at' values that will be needed
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

export default Product;