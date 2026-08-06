const db = require("../config/db");

const placeOrder = (orderData, callback) => {

    const sql = `
    INSERT INTO orders
    (
        user_id,
        total_amount,
        payment_method,
        payment_status,
        status
    )
    VALUES(?,?,?,?,?)
    `;

    db.query(

        sql,

        [

            orderData.user_id,
            orderData.total_amount,
            orderData.payment_method,
            orderData.payment_status,
            "Pending"

        ],

        callback

    );

};

const getOrdersByUser = (userId, callback) => {

    db.query(

        `
        SELECT *
        FROM orders
        WHERE user_id=?
        ORDER BY id DESC
        `,

        [userId],

        callback

    );

};

const getAllOrders = (callback) => {

    db.query(

        `
        SELECT
        orders.*,
        users.name
        FROM orders
        JOIN users
        ON users.id=orders.user_id
        ORDER BY orders.id DESC
        `,

        callback

    );

};

const updateOrderStatus = (id,status,callback)=>{

    db.query(

        `
        UPDATE orders
        SET status=?
        WHERE id=?
        `,

        [status,id],

        callback

    );

};

const cancelOrder = (id,callback)=>{

    db.query(

        `
        UPDATE orders
        SET status='Cancelled'
        WHERE id=?
        `,

        [id],

        callback

    );

};

module.exports={

    placeOrder,
    getOrdersByUser,
    getAllOrders,
    updateOrderStatus,
    cancelOrder

};