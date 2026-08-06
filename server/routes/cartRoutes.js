const express = require("express");
const router = express.Router();

const {
    addItemToCart,
    viewCart,
    updateQuantity,
    deleteCartItem,
    cartCount
} = require("../controllers/cartController");


// Add Item to Cart
router.post("/add", addItemToCart);


// View Cart
router.get("/:userId", viewCart);


// Cart Count
router.get("/count/:userId", cartCount);


// Update Quantity
router.put("/update/:id", updateQuantity);


// Remove Item
router.delete("/delete/:id", deleteCartItem);


module.exports = router;