const express = require("express");
const router = express.Router();

const {
    createCategory,
    fetchCategories
} = require("../controllers/categoryController");

router.post("/add", createCategory);
router.get("/", fetchCategories);

module.exports = router;