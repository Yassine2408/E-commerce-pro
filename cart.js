let cart = JSON.parse(localStorage.getItem('cart')) || [];

window.addToCart = function(product) {
    cart.push(product);
    updateCart();
    alert('Product added to cart!');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (cartItems) {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="images/${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>$${item.price.toFixed(2)}</p>
                </div>
                <button onclick="removeFromCart(${index})" class="remove-btn">Remove</button>
            `;
            cartItems.appendChild(cartItem);
            total += item.price;
        });

        if (cartTotal) {
            cartTotal.textContent = `$${total.toFixed(2)}`;
        }
    }
}

// Initialize cart display
document.addEventListener('DOMContentLoaded', updateCartDisplay);