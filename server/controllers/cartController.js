const {
    addToCart,
    getCart,
    updateCart,
    removeCartItem
} = require("../models/cartModel");

const db = require("../config/db");


// Add to Cart

const addItemToCart = (req, res) => {

    const { user_id, product_id, quantity } = req.body;


    if (!user_id || !product_id) {

        return res.status(400).json({

            success:false,

            message:"User ID and Product ID are required"

        });

    }



    const cart = {

        user_id,

        product_id,

        quantity: quantity || 1

    };



    addToCart(cart, (err, result) => {


        if(err){

            console.log(err);


            return res.status(500).json({

                success:false,

                message:"Failed to add item to cart"

            });

        }



        res.status(201).json({

            success:true,

            message:"Item added to cart successfully"

        });



    });



};






// View Cart


const viewCart = (req,res)=>{


    const userId = req.params.userId;



    getCart(userId,(err,result)=>{


        if(err){

            return res.status(500).json({

                success:false,

                message:"Failed to fetch cart"

            });

        }



        res.status(200).json({

            success:true,

            totalItems:result.length,

            cart:result

        });



    });



};






// Cart Count


const cartCount = (req,res)=>{


    const userId = req.params.userId;



    const query = `

    SELECT COUNT(*) AS count

    FROM cart

    WHERE user_id = ?

    `;



    db.query(query,[userId],(err,result)=>{


        if(err){


            console.log(err);


            return res.status(500).json({

                success:false,

                message:"Failed to get cart count"

            });


        }



        res.status(200).json({

            success:true,

            count: result[0].count || 0

        });



    });



};







// Update Quantity


const updateQuantity = (req,res)=>{


    const id = req.params.id;

    const {quantity}=req.body;



    updateCart(id,quantity,(err)=>{


        if(err){

            return res.status(500).json({

                success:false,

                message:"Failed to update quantity"

            });

        }



        res.status(200).json({

            success:true,

            message:"Quantity updated successfully"

        });



    });



};







// Remove Item


const deleteCartItem = (req,res)=>{


    const id = req.params.id;



    removeCartItem(id,(err)=>{


        if(err){

            return res.status(500).json({

                success:false,

                message:"Failed to remove item"

            });

        }



        res.status(200).json({

            success:true,

            message:"Item removed from cart"

        });



    });



};







module.exports = {

    addItemToCart,

    viewCart,

    updateQuantity,

    deleteCartItem,

    cartCount

};