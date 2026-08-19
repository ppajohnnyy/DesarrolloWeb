function showScreen(screenId) {
    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const selectedScreen = document.getElementById(screenId);

    if (selectedScreen) {
        selectedScreen.classList.add("active");
    }
}

// Función para guardar en el carrito
function addToCart(nombre, precio) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ nombre, precio });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(nombre + " agregado al carrito");
}

// Función para cargar los productos en cart.html
function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsContainer = document.getElementById('cart-items');
    let total = 0;

    cartItemsContainer.innerHTML = ''; // Limpiar lista

    cart.forEach(item => {
        let div = document.createElement('div');
        div.innerHTML = `<p>${item.nombre} - $${item.precio.toLocaleString()}</p>`;
        cartItemsContainer.appendChild(div);
        total += item.precio;
    });

    // Actualizar total
    document.querySelector('.cart-total strong').innerText = '$' + total.toLocaleString();
}

// Si estamos en la página del carrito, cargar productos automáticamente
if (window.location.pathname.includes('cart.html')) {
    window.onload = loadCart;
}