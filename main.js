document.addEventListener('DOMContentLoaded', () => {
    // Populate featured products on the home page
    const featuredProductsContainer = document.getElementById('featured-products');
    if (featuredProductsContainer) {
        const featuredProducts = products.slice(0, 3); // Display first 3 products
        featuredProducts.forEach(product => {
            const productCard = createProductCard(product);
            featuredProductsContainer.appendChild(productCard);
        });
    }

    // Populate all products on the products page
    const allProductsContainer = document.getElementById('all-products');
    if (allProductsContainer) {
        populateProducts(products, allProductsContainer);

        // Add event listeners for filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                filterProducts(filter);

                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }

    // Handle product details page
    const productDetailsContainer = document.getElementById('product-details-container');
    if (productDetailsContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        
        if (productId) {
            const product = products.find(p => p.id === parseInt(productId));
            if (product) {
                displayProductDetails(product, productDetailsContainer);
            } else {
                productDetailsContainer.innerHTML = '<p>Product not found.</p>';
            }
        } else {
            productDetailsContainer.innerHTML = '<p>No product selected.</p>';
        }
    }
});

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.setAttribute('data-category', product.category); // Add this line
    card.innerHTML = `
        <div class="product-card-content">
            <img src="images/${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <a href="product-details.html?id=${product.id}" class="view-details">View Details</a>
        </div>
    `;
    return card;
}

function populateProducts(productsArray, container) {
    container.innerHTML = '';
    productsArray.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

function filterProducts(category) {
    const allProductsContainer = document.getElementById('all-products');
    const productCards = allProductsContainer.querySelectorAll('.product-card');

    productCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function displayProductDetails(product, container) {
    container.innerHTML = `
        <div class="product-image">
            <img src="images/${product.image}" alt="${product.name}" id="product-image">
        </div>
        <div class="product-info">
            <h2 class="product-title glitch-text" id="product-name">${product.name}</h2>
            <p class="product-description" id="product-description">${product.description}</p>
            <p class="product-price" id="product-price">$${product.price.toFixed(2)}</p>
            <button class="add-to-cart cta-button">Add to Cart</button>
        </div>
    `;

    // Add event listener to the "Add to Cart" button
    const addToCartButton = container.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', () => {
        if (typeof addToCart === 'function') {
            addToCart(product);
        } else {
            console.error('addToCart function is not defined');
        }
    });
}

// ... other existing functions ...