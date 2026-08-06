const express = require("express");

const router = express.Router();

const wishlistController = require("../controllers/wishlistController");

router.post("/add", wishlistController.addWishlist);

router.get("/:userId", wishlistController.getWishlist);

router.delete("/delete/:id", wishlistController.removeWishlist);

router.get("/check/:userId/:productId", wishlistController.checkWishlist);

router.get("/count/:userId", wishlistController.wishlistCount);

module.exports = router;