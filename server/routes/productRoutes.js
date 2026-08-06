const express = require("express");
const router = express.Router();

const {
    createProduct,
    fetchProducts,
    fetchProductById,
    editProduct,
    removeProduct
} = require("../controllers/productController");

// Add Product
router.post("/add", createProduct);

// Get All Products
router.get("/", fetchProducts);

// Get Product By ID
router.get("/:id", fetchProductById);

// Update Product
router.put("/update/:id", editProduct);

// Delete Product
router.delete("/delete/:id", removeProduct);

module.exports = router;