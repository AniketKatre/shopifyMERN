// default common js  type : below method commly sed in js
// const express = require('express')
// type= module ES6 and used also in overall project
import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';

connectDB(); // Connect to MongoDB

const port = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) =>{
    res.send("App is running.....")
});

app.get('/api/products', (req, res) =>{
    res.json(products)
});

app.get('/api/products/:id', (req, res) =>{
    const product = products.find((p) => p._id===req.params.id);
    res.json(product)
});


app.listen(port, ()=>{
    console.log(`Server running on port:${port}`)
})