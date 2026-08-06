// ======================================
// CartNest Professional Navbar
// ======================================


const navbar = document.getElementById("navbar");


if (navbar) {


const user = JSON.parse(localStorage.getItem("user"));



navbar.innerHTML = `


<header class="main-header">


<div class="header-container">



<a href="/index.html" class="logo">

<i class="fa-solid fa-bag-shopping"></i>

<span>CartNest</span>

</a>




<nav class="desktop-menu">


<a href="/user/products.html?category=Men">
MEN
</a>


<a href="/user/products.html?category=Women">
WOMEN
</a>


<a href="/user/products.html?category=Kids">
KIDS
</a>


<a href="/user/products.html?category=Home%20%26%20Living">
HOME & LIVING
</a>


<a href="/user/products.html?category=Beauty">
BEAUTY
</a>


<a href="/user/products.html?category=Electronics">
ELECTRONICS
</a>


<a href="/user/products.html?category=Accessories">
ACCESSORIES
</a>


</nav>




<div class="search-container">


<input
type="text"
id="globalSearch"
placeholder="Search for products, brands and more...">


<button id="globalSearchBtn">

<i class="fa-solid fa-magnifying-glass"></i>

</button>


</div>





<div class="header-icons">



<a href="/user/wishlist.html" class="icon-link">

<i class="fa-regular fa-heart"></i>

<span>Wishlist</span>

<small id="wishlistCount">0</small>

</a>




<a href="/user/cart.html" class="icon-link">

<i class="fa-solid fa-cart-shopping"></i>

<span>Cart</span>

<small id="cartCount">0</small>

</a>





<a
href="${user ? "#" : "/user/login.html"}"
class="icon-link"
onclick="${user ? "confirmLogout()" : ""}; return false;">


<i class="fa-regular fa-user"></i>


<span>

${user ? "Logout" : "Login"}

</span>


</a>



</div>





<button
class="mobile-menu-btn"
onclick="openMenu()">

<i class="fa-solid fa-bars"></i>

</button>



</div>


</header>



`;





// SEARCH FUNCTION


const globalSearch = document.getElementById("globalSearch");

const globalSearchBtn = document.getElementById("globalSearchBtn");



function performGlobalSearch(){


if(!globalSearch) return;



const keyword = globalSearch.value.trim();



if(keyword===""){


window.location.href="/user/products.html";


}

else{


window.location.href =
`/user/products.html?search=${encodeURIComponent(keyword)}`;


}


}





if(globalSearchBtn){

globalSearchBtn.addEventListener(
"click",
performGlobalSearch
);

}



if(globalSearch){


globalSearch.addEventListener(
"keydown",
function(e){

if(e.key==="Enter"){

performGlobalSearch();

}

}

);


}




if(typeof updateCartCount==="function"){

updateCartCount();

}



if(typeof updateWishlistCount==="function"){

updateWishlistCount();

}



}





// ======================================
// LOGOUT CONFIRMATION
// ======================================


function confirmLogout(){


const answer = confirm(
"Do you want to logout?"
);



if(answer){


localStorage.removeItem("user");


window.location.href="/user/login.html";


}


}