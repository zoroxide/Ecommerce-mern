require('dotenv').config(); // Import dotenv to load .env file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/Product'); // Import the Product model

// Initialize app
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB using the URI from .env
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Failed to connect to MongoDB', err);
});

// Routes

// GET /products - Get all products
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /products - Add a new product
app.post('/products', async (req, res) => {
    try {
        const newProduct = new Product({
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock,
            description: req.body.description,
            imageURL: req.body.imageURL
        });
        await newProduct.save();
        res.status(201).json({ message: 'Product added successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /products/:id - Get a product by ID
app.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT /products/:id - Update a product by ID
app.put('/products/:id', async (req, res) => {
    try {
        const updatedProduct = {
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock,
            description: req.body.description,
            imageURL: req.body.imageURL
        };
        await Product.findByIdAndUpdate(req.params.id, updatedProduct, { new: true });
        res.json({ message: 'Product updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE /products/:id - Delete a product by ID
app.delete('/products/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
