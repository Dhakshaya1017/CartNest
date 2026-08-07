const user = JSON.parse(localStorage.getItem("user"));


async function addToWishlist(productId){

    if(!user){

        window.location.href="login.html";
        return;

    }


    const check = await fetch(
    `https://cartnest-production.up.railway.app/api/wishlist/check/${user.id}/${productId}`
);


    const checkData = await check.json();



    if(checkData.exists){

        showToast("Already in Wishlist ❤️");

        return;

    }



   const response = await fetch(
    "https://cartnest-production.up.railway.app/api/wishlist/add",
    {

            method:"POST",

            headers:{

                "Content-Type":"application/json"

            },

            body:JSON.stringify({

                user_id:user.id,

                product_id:productId

            })

        }

    );


    const data = await response.json();


    showToast(data.message);


    updateWishlistCount();


}




async function removeWishlist(id){


    const response = await fetch(
    `https://cartnest-production.up.railway.app/api/wishlist/delete/${id}`,
    {

            method:"DELETE"

        }

    );


    const data = await response.json();


    showToast(data.message);



    if(typeof loadWishlist==="function"){

        loadWishlist();

    }


    updateWishlistCount();


}




async function checkWishlist(productId){


    if(!user){

        return false;

    }


    const response = await fetch(
    `https://cartnest-production.up.railway.app/api/wishlist/check/${user.id}/${productId}`
);


    const data = await response.json();


    return data.exists;


}




async function updateWishlistCount(){


    if(!user) return;



    const response = await fetch(
    `https://cartnest-production.up.railway.app/api/wishlist/count/${user.id}`
);


    const data = await response.json();



    const badge=document.getElementById("wishlistCount");



    if(badge){

        badge.innerText=data.count;

    }


}




function showToast(message){


    let toast=document.getElementById("toast");



    if(!toast){


        toast=document.createElement("div");


        toast.id="toast";


        toast.style.position="fixed";

        toast.style.bottom="25px";

        toast.style.right="25px";

        toast.style.background="#111";

        toast.style.color="#fff";

        toast.style.padding="14px 22px";

        toast.style.borderRadius="8px";

        toast.style.zIndex="9999";

        toast.style.fontSize="15px";

        toast.style.boxShadow="0 8px 25px rgba(0,0,0,.2)";



        document.body.appendChild(toast);


    }



    toast.innerText=message;


    toast.style.display="block";



    setTimeout(()=>{


        toast.style.display="none";


    },2500);



}



updateWishlistCount();