const db = require("../config/db");

// Add to Cart
const addToCart = (cart, callback) => {
    const sql = `
        INSERT INTO cart (user_id, product_id, quantity)
        VALUES (?, ?, ?)
    `;

    db.query(sql, [
        cart.user_id,
        cart.product_id,
        cart.quantity
    ], callback);
};

// View Cart
const getCart = (userId, callback) => {
    const sql = `
        SELECT
            cart.id,
            cart.quantity,
            products.id AS product_id,
            products.name,
            products.price,
            products.image
        FROM cart
        JOIN products
        ON cart.product_id = products.id
        WHERE cart.user_id = ?
    `;

    db.query(sql, [userId], callback);
};

// Update Quantity
const updateCart = (id, quantity, callback) => {
    db.query(
        "UPDATE cart SET quantity=? WHERE id=?",
        [quantity, id],
        callback
    );
};

// Remove Item
const removeCartItem = (id, callback) => {
    db.query(
        "DELETE FROM cart WHERE id=?",
        [id],
        callback
    );
};

module.exports = {
    addToCart,
    getCart,
    updateCart,
    removeCartItem
};