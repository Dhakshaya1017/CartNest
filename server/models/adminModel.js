const db = require("../config/db");

const findAdminByEmail = (email, callback) => {
    const sql = "SELECT * FROM admins WHERE email = ?";

    db.query(sql, [email], (err, result) => {
        if (err) {
            return callback(err, null);
        }

        callback(null, result);
    });
};

module.exports = {
    findAdminByEmail
};