const db = require("../config/db");

// Add Product
const addProduct = (product, callback) => {
    const sql = `
        INSERT INTO products
        (name, description, price, category, image, stock)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [
        product.name,
        product.description,
        product.price,
        product.category,
        product.image,
        product.stock
    ], callback);
};

// Get All Products
const getAllProducts = (callback) => {
    db.query("SELECT * FROM products ORDER BY id DESC", callback);
};

// Get Product By ID
const getProductById = (id, callback) => {
    db.query(
        "SELECT * FROM products WHERE id = ?",
        [id],
        callback
    );
};

// Update Product
const updateProduct = (id, product, callback) => {
    const sql = `
        UPDATE products
        SET
            name=?,
            description=?,
            price=?,
            category=?,
            image=?,
            stock=?
        WHERE id=?
    `;

    db.query(sql, [
        product.name,
        product.description,
        product.price,
        product.category,
        product.image,
        product.stock,
        id
    ], callback);
};

// Delete Product
const deleteProduct = (id, callback) => {
    db.query(
        "DELETE FROM products WHERE id=?",
        [id],
        callback
    );
};

module.exports = {
    addProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};