const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: "./server/.env" });

require("./config/db");


// Routes

const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");



const app = express();



// Middleware

app.use(cors());

app.use(express.json());




// API Routes

app.use("/api/admin", adminRoutes);

app.use("/api/users", userRoutes);

app.use("/api/products", productRoutes);

app.use("/api/cart", cartRoutes);

app.use("/api/orders", orderRoutes);

app.use("/api/categories", categoryRoutes);

app.use("/api/wishlist", wishlistRoutes);




// Serve Frontend

app.use(express.static(path.join(__dirname, "..")));




// Default Route

app.get("/", (req, res) => {

    res.sendFile(
        path.join(__dirname, "..", "index.html")
    );

});




// Server

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {

    console.log(`✅ Server running on http://localhost:${PORT}`);

});