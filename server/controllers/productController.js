const {
    addProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require("../models/productModel");

// Add Product
const createProduct = (req, res) => {
    const {
        name,
        description,
        price,
        category,
        image,
        stock
    } = req.body;

    if (!name || !price) {
        return res.status(400).json({
            success: false,
            message: "Product name and price are required"
        });
    }

    const product = {
        name,
        description,
        price,
        category,
        image,
        stock
    };

    addProduct(product, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Failed to add product"
            });
        }

        res.status(201).json({
            success: true,
            message: "Product Added Successfully",
            productId: result.insertId
        });
    });
};

// Get All Products
const fetchProducts = (req, res) => {
    getAllProducts((err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Failed to fetch products"
            });
        }

        res.status(200).json({
            success: true,
            products: result
        });
    });
};

// Get Product By ID
const fetchProductById = (req, res) => {
    const id = req.params.id;

    getProductById(id, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Database Error"
            });
        }

        if (result.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            product: result[0]
        });
    });
};

// Update Product
const editProduct = (req, res) => {
    const id = req.params.id;

    updateProduct(id, req.body, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Update Failed"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product Updated Successfully"
        });
    });
};

// Delete Product
const removeProduct = (req, res) => {
    const id = req.params.id;

    deleteProduct(id, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Delete Failed"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product Deleted Successfully"
        });
    });
};

module.exports = {
    createProduct,
    fetchProducts,
    fetchProductById,
    editProduct,
    removeProduct
};