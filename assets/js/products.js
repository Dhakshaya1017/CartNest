const productGrid = document.getElementById("productGrid");

let allProducts = [];


// Load Products

async function loadProducts(){

try{

const response = await fetch(
"http://localhost:5000/api/products"
);


const data = await response.json();


allProducts = data.products || [];


// URL category check

const params = new URLSearchParams(window.location.search);

const category = params.get("category");


if(category){

const filtered = allProducts.filter(product =>
product.category &&
product.category.toLowerCase() === category.toLowerCase()
);

displayProducts(filtered);

}
else{

displayProducts(allProducts);

}


}

catch(error){

console.log(error);

}

}




// Display Products

function displayProducts(products){


productGrid.innerHTML="";


products.forEach(product=>{


const image = product.image
?
`../assets/images/${product.image}`
:
"https://via.placeholder.com/300";



productGrid.innerHTML += `


<div class="product-card">


<div class="wishlist-btn">

<i class="fa-regular fa-heart"></i>

</div>


<div class="product-image">

<img src="${image}">

</div>


<div class="product-info">


<span class="category">

${product.category || "Fashion"}

</span>



<h3>

${product.name}

</h3>



<p>

${product.description || ""}

</p>



<div class="rating">

⭐ 4.5 (120)

</div>



<div class="price-row">


<span class="price">

₹${Number(product.price).toLocaleString()}

</span>


<span class="discount">

30% OFF

</span>


</div>




<p class="stock">

${
product.stock > 0
?
`In Stock`
:
`Out of Stock`
}

</p>



<button class="btn btn-primary"
onclick="addToCart(${product.id})">

Add To Cart

</button>



</div>


</div>


`;


});


}




// Search

const searchInput = document.querySelector(".search-container input");


if(searchInput){


searchInput.addEventListener("keyup",()=>{


const value = searchInput.value.toLowerCase();



const filtered = allProducts.filter(product=>


product.name.toLowerCase().includes(value)

||

(product.category &&
product.category.toLowerCase().includes(value))


);



displayProducts(filtered);



});


}




loadProducts();