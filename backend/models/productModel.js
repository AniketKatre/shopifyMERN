import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,            // _id object  id of each user weather admin/user
        required: true,
        ref: "User",                        // user collections refrence comes: collections came from
    },
    name:{
        type: String,
        required: true,
    },
    rating:{
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const productSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,            // _id object  id of each user weather admin/user
        required: true,
        ref: "User",                        // user collections refrence comes: collections came from
    },
    name: {
        type:String,
        required: true
    },
    image:{
        type: String,
        required: true,
    },
    brand:{
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews:{
        type: Number,
        required: true,
        default:0,
    },
    price: {
        type: Number,
        required: true,
        default:0,
    },
    countInStock: {
        type: Number,
        required: true,
        default:0,
    },


}, { timestamps: true });                     // defalt timestamp add for each schema data created at field

const Product = mongoose.model("Product", productSchema)

export default Product;