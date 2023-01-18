// get the JSON data from http://localhost:5500/products.json
const response = await fetch("/products.json");
// parse out the json into a variable - "watches"
const products = await response.json();

const grid = document.querySelector('.grid')
// print to console
//console.log(grid);

for (let product of products) {
    grid.innerHTML += `
        <div class="product-card">
            <img
            src="${product.image}"
            alt="A ${product.brand} ${product.model}"
            />
            <div class="product-info">
            <div>
                <h2>${product.brand}</h2>
                <p>${product.model}</p>
            </div>
            <div>
                <a href="/product.html" class="bold">View</a>
                <i class="fa-solid fa-angle-right"></i>
            </div>
            </div>
        </div>
    `
}