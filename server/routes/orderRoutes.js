const express = require("express");

const router = express.Router();

const orderController = require("../controllers/orderController");

router.post("/place", orderController.placeOrder);

router.get("/:userId", orderController.getUserOrders);

router.get("/", orderController.getAllOrders);

router.put("/update/:id", orderController.updateStatus);

router.put("/cancel/:id", orderController.cancelOrder);

module.exports = router;