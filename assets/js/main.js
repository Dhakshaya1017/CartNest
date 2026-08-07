// ===============================
// CartNest Common JavaScript
// ===============================

// ---------- USER ----------

function getUser() {

    const user = localStorage.getItem("user");

    if (user) {
        try {
            return JSON.parse(user);
        } catch (e) {
            return null;
        }
    }

    return null;

}

function isLoggedIn() {

    return getUser() !== null;

}

function getUserName() {

    const user = getUser();

    if (user && user.name) {
        return user.name;
    }

    return "Guest";

}

function logout() {

    localStorage.removeItem("user");

    window.location.href = "../user/login.html";

}

// ---------- TOAST ----------

function showToast(message = "Success") {

    let toast = document.getElementById("cartnest-toast");

    if (!toast) {

        toast = document.createElement("div");

        toast.id = "cartnest-toast";

        toast.style.position = "fixed";
        toast.style.bottom = "25px";
        toast.style.right = "25px";
        toast.style.background = "#111";
        toast.style.color = "#fff";
        toast.style.padding = "12px 20px";
        toast.style.borderRadius = "10px";
        toast.style.fontSize = "14px";
        toast.style.zIndex = "999999";
        toast.style.opacity = "0";
        toast.style.transition = "0.35s";

        document.body.appendChild(toast);

    }

    toast.innerText = message;

    toast.style.opacity = "1";

    setTimeout(() => {

        toast.style.opacity = "0";

    }, 2500);

}

// ---------- NAVBAR ----------

function updateNavbar() {

    const user = getUser();

    const userBox = document.getElementById("userName");
    const logoutBtn = document.getElementById("logoutBtn");
    const loginBtn = document.getElementById("loginBtn");

    if (user) {

        if (userBox) {

            userBox.innerHTML = `
                <i class="fa-solid fa-user"></i>
                ${user.name}
            `;

        }

        if (logoutBtn) {

            logoutBtn.style.display = "inline-flex";

        }

        if (loginBtn) {

            loginBtn.style.display = "none";

        }

    } else {

        if (userBox) {

            userBox.innerHTML = "";

        }

        if (logoutBtn) {

            logoutBtn.style.display = "none";

        }

        if (loginBtn) {

            loginBtn.style.display = "inline-flex";

        }

    }

}

// ---------- CART COUNT ----------

async function updateCartCount() {

    const user = getUser();

    if (!user) return;

    try {

        const response = await fetch(
    `https://cartnest-production.up.railway.app/api/cart/count/${user.id}`
);

        const data = await response.json();

        const badge = document.getElementById("cartCount");

        if (badge) {

            badge.innerText = data.count || 0;

        }

    } catch (error) {

        console.log(error);

    }

}

// ---------- WISHLIST COUNT ----------

async function updateWishlistCount() {

    const user = getUser();

    if (!user) return;

    try {

       const response = await fetch(
    `https://cartnest-production.up.railway.app/api/wishlist/count/${user.id}`
);
        const data = await response.json();

        const badge = document.getElementById("wishlistCount");

        if (badge) {

            badge.innerText = data.count || 0;

        }

    } catch (error) {

        console.log(error);

    }

}

// ---------- CATEGORY REDIRECT ----------

function openCategory(category) {

    window.location.href =
        `user/products.html?category=${encodeURIComponent(category)}`;

}
// ---------- SIDE MENU ----------

function openMenu() {

    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("menuOverlay");

    if (menu && overlay) {

        menu.classList.add("active");
        overlay.classList.add("active");

    }

}

function closeMenu() {

    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("menuOverlay");

    if (menu && overlay) {

        menu.classList.remove("active");
        overlay.classList.remove("active");

    }

}

// ---------- MENU USER ----------

function loadMenuUser() {

    const user = getUser();

    const menuUser = document.getElementById("menuUser");

    if (!menuUser) return;

    if (user) {

        menuUser.innerHTML = `

        <i class="fa-solid fa-circle-user"></i>

        <h3>${user.name}</h3>

        <p>${user.email}</p>

        `;

    } else {

        menuUser.innerHTML = `

        <i class="fa-solid fa-user"></i>

        <h3>Guest User</h3>

        <p>Please Login</p>

        `;

    }

}

// ---------- CLOSE MENU ON OVERLAY ----------

document.addEventListener("click", function (e) {

    const overlay = document.getElementById("menuOverlay");

    if (e.target === overlay) {

        closeMenu();

    }

});

// ---------- ESC KEY SUPPORT ----------

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        closeMenu();

    }

});

// ---------- INITIALIZE ----------

document.addEventListener("DOMContentLoaded", () => {

    updateNavbar();

    loadMenuUser();

    updateCartCount();

    updateWishlistCount();

});