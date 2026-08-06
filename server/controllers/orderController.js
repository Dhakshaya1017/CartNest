const orderModel = require("../models/orderModel");

exports.placeOrder = (req, res) => {

    const orderData = {
        user_id: req.body.user_id,
        total_amount: req.body.total_amount,
        payment_method: req.body.payment_method,
        payment_status: req.body.payment_method === "UPI" ? "Paid" : "Pending"
    };

    orderModel.placeOrder(orderData, (err) => {

        if (err) {
            console.log(err);
            return res.json({
                success: false,
                message: "Unable to place order"
            });
        }

        res.json({
            success: true,
            message: "Order Placed Successfully"
        });

    });

};

exports.getUserOrders = (req, res) => {

    orderModel.getOrdersByUser(req.params.userId, (err, result) => {

        if (err) {
            console.log(err);
            return res.json({
                success: false
            });
        }

        res.json({
            success: true,
            orders: result
        });

    });

};

exports.getAllOrders = (req, res) => {

    orderModel.getAllOrders((err, result) => {

        if (err) {
            console.log(err);
            return res.json({
                success: false
            });
        }

        res.json({
            success: true,
            orders: result
        });

    });

};

exports.updateStatus = (req, res) => {

    orderModel.updateOrderStatus(
        req.params.id,
        req.body.status,
        (err) => {

            if (err) {
                console.log(err);
                return res.json({
                    success: false,
                    message: "Unable to update"
                });
            }

            res.json({
                success: true,
                message: "Order Updated"
            });

        }
    );

};

exports.cancelOrder = (req, res) => {

    orderModel.cancelOrder(req.params.id, (err) => {

        if (err) {
            console.log(err);
            return res.json({
                success: false,
                message: "Unable to cancel"
            });
        }

        res.json({
            success: true,
            message: "Order Cancelled"
        });

    });

};