const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createUser, findUserByEmail } = require("../models/userModel");

// User Registration
const registerUser = (req, res) => {
    const { name, email, phone, password, address } = req.body;

    if (!name || !email || !phone || !password) {
        return res.status(400).json({
            success: false,
            message: "All required fields must be filled."
        });
    }

    findUserByEmail(email, async (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Database Error"
            });
        }

        if (result.length > 0) {
            return res.status(409).json({
                success: false,
                message: "Email already registered"
            });
        }

        try {
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = {
                name,
                email,
                phone,
                password: hashedPassword,
                address
            };

            createUser(user, (err) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: "Registration Failed"
                    });
                }

                res.status(201).json({
                    success: true,
                    message: "User Registered Successfully"
                });
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Server Error"
            });
        }
    });
};

// User Login
const loginUser = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and Password are required"
        });
    }

    findUserByEmail(email, async (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Database Error"
            });
        }

        if (result.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const user = result[0];

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid Password"
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            "cartnest_secret_key",
            {
                expiresIn: "1d"
            }
        );

        res.status(200).json({
            success: true,
            message: "Login Successful",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });
    });
};

module.exports = {
    registerUser,
    loginUser
};