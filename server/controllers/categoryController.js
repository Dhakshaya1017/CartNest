const {
    addCategory,
    getCategories
} = require("../models/categoryModel");

// Add Category
const createCategory = (req, res) => {
    const { name } = req.body;

    addCategory(name, (err) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Failed to add category"
            });
        }

        res.json({
            success: true,
            message: "Category Added Successfully"
        });
    });
};

// Get Categories
const fetchCategories = (req, res) => {
    getCategories((err, result) => {
        if (err) {
            return res.status(500).json({
                success: false
            });
        }

        res.json({
            success: true,
            categories: result
        });
    });
};

module.exports = {
    createCategory,
    fetchCategories
};