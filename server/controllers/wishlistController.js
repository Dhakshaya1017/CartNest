const wishlistModel = require("../models/wishlistModel");

exports.addWishlist = (req, res) => {

    const { user_id, product_id } = req.body;

    wishlistModel.addWishlist(

        user_id,

        product_id,

        (err) => {

            if (err) {

                console.log(err);

                return res.json({

                    success: false,

                    message: "Unable to add wishlist"

                });

            }

            res.json({

                success: true,

                message: "Added to Wishlist"

            });

        }

    );

};

exports.getWishlist = (req, res) => {

    wishlistModel.getWishlist(

        req.params.userId,

        (err, result) => {

            if (err) {

                console.log(err);

                return res.json({

                    success: false

                });

            }

            res.json({

                success: true,

                wishlist: result

            });

        }

    );

};

exports.removeWishlist = (req, res) => {

    wishlistModel.removeWishlist(

        req.params.id,

        (err) => {

            if (err) {

                console.log(err);

                return res.json({

                    success: false,

                    message: "Unable to remove"

                });

            }

            res.json({

                success: true,

                message: "Removed Successfully"

            });

        }

    );

};

exports.checkWishlist = (req, res) => {

    wishlistModel.checkWishlist(

        req.params.userId,

        req.params.productId,

        (err, result) => {

            if (err) {

                console.log(err);

                return res.json({

                    success: false

                });

            }

            res.json({

                success: true,

                exists: result.length > 0

            });

        }

    );

};

exports.wishlistCount = (req, res) => {

    wishlistModel.wishlistCount(

        req.params.userId,

        (err, result) => {

            if (err) {

                console.log(err);

                return res.json({

                    success: false

                });

            }

            res.json({

                success: true,

                count: result[0].total

            });

        }

    );

};