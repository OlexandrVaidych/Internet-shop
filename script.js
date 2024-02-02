document.addEventListener('DOMContentLoaded', function() {
    // Fetch data from the JSON file
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            // Insert products into HTML
            const productList = document.getElementById('products');

            data.products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');

                const productInfo = `
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-item__info">
                        <h3>${product.name}</h3>
                        <p><strong>${product.price.toFixed(2)}</strong> $</p>
                    </div>
                `;

                productDiv.innerHTML = productInfo;
                productList.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
