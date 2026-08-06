const { findAdminByEmail } = require("../models/adminModel");

const adminLogin = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and password are required"
        });
    }

    findAdminByEmail(email, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Database Error"
            });
        }

        if (result.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Admin not found"
            });
        }

        const admin = result[0];

        if (admin.password !== password) {
            return res.status(401).json({
                success: false,
                message: "Invalid Password"
            });
        }

        res.status(200).json({
            success: true,
            message: "Login Successful",
            admin: {
                id: admin.id,
                name: admin.name,
                email: admin.email
            }
        });
    });
};

module.exports = {
    adminLogin
};