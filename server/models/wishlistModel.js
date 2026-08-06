const db = require("../config/db");


const addWishlist = (userId, productId, callback) => {

    db.query(

        `
        INSERT IGNORE INTO wishlist
        (
            user_id,
            product_id
        )
        VALUES (?,?)
        `,

        [
            userId,
            productId
        ],

        callback

    );

};



const getWishlist = (userId, callback) => {

    db.query(

        `
        SELECT

        wishlist.id AS wishlist_id,

        products.id AS product_id,

        products.name,

        products.price,

        products.description,

        products.image,

        products.category,

        products.stock


        FROM wishlist


        JOIN products


        ON wishlist.product_id = products.id


        WHERE wishlist.user_id=?


        ORDER BY wishlist.id DESC

        `,

        [
            userId
        ],

        callback

    );

};




const removeWishlist = (wishlistId, callback) => {


    db.query(

        `
        DELETE FROM wishlist

        WHERE id=?

        `,

        [
            wishlistId
        ],

        callback

    );

};




const checkWishlist = (userId, productId, callback) => {


    db.query(

        `
        SELECT id

        FROM wishlist

        WHERE user_id=?

        AND product_id=?

        `,

        [
            userId,
            productId
        ],

        callback

    );

};




const wishlistCount = (userId, callback) => {


    db.query(

        `
        SELECT COUNT(*) AS total

        FROM wishlist

        WHERE user_id=?

        `,

        [
            userId
        ],

        callback

    );

};



module.exports = {

    addWishlist,

    getWishlist,

    removeWishlist,

    checkWishlist,

    wishlistCount

};