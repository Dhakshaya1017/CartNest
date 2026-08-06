const db = require("../config/db");

// Add Category
const addCategory = (name, callback) => {
    db.query(
        "INSERT INTO categories (name) VALUES (?)",
        [name],
        callback
    );
};

// Get Categories
const getCategories = (callback) => {
    db.query(
        "SELECT * FROM categories ORDER BY id DESC",
        callback
    );
};

module.exports = {
    addCategory,
    getCategories
};