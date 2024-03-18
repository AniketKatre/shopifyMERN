// default common js  type : below method commly sed in js
// const express = require('express')
// type= module ES6 and used also in overall project
import express from "express";
// import products from './data/products.js';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

connectDB(); // Connect to MongoDB

const port = process.env.PORT || 3080;
const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("App is running.....");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.use(notFound);
app.use(errorHandler);

// app.get('/api/products', (req, res) =>{
//     res.json(products)
// });

// app.get('/api/products/:id', (req, res) =>{
//     const product = products.find((p) => p._id===req.params.id);
//     res.json(product)
// });

app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});
