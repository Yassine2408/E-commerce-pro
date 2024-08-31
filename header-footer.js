document.addEventListener('DOMContentLoaded', () => {
    const header = `
        <header class="glitch-header">
            <h1 class="neon-text">Cyber Bazaar</h1>
            <nav>
                <a href="index.html" class="laser-link">Home</a>
                <a href="products.html" class="laser-link">Products</a>
                <a href="about.html" class="laser-link">About</a>
                <a href="contact.html" class="laser-link">Contact</a>
                <a href="cart.html" class="laser-link"><i class="fas fa-shopping-cart"></i></a>
            </nav>
        </header>
    `;

    const footer = `
        <footer class="plasma-footer">
            <div class="footer-content">
                <p>&copy; 2023 Cyber Bazaar. All rights reserved.</p>
                <div class="social-links">
                    <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </footer>
    `;

    const cyberGrid = document.querySelector('.cyber-grid');
    if (cyberGrid) {
        cyberGrid.insertAdjacentHTML('afterbegin', header);
        cyberGrid.insertAdjacentHTML('beforeend', footer);
    } else {
        console.error('Could not find .cyber-grid element');
    }
});