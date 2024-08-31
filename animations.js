document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        product.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = product.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;

            product.style.transform = `
                perspective(1000px)
                rotateY(${x * 20 - 10}deg)
                rotateX(${y * -20 + 10}deg)
                scale3d(1.05, 1.05, 1.05)
            `;
        });

        product.addEventListener('mouseleave', () => {
            product.style.transform = 'none';
        });
    });

    // Add more intense animations and effects
});