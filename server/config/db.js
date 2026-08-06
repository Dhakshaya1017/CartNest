const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cartnest_db"
});

connection.connect((err) => {
    if (err) {
        console.log("❌ Database Connection Failed:", err.message);
        return;
    }
    console.log("✅ Connected to MySQL Database");
});

module.exports = connection;