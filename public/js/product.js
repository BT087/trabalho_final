const productList = document.getElementById("product-list");
const productSelect = document.getElementById("product-select");

document.addEventListener("DOMContentLoaded", async () => {
    const res = await fetch("/product");

    if(!res.ok) return console.error(await res.json());

    const products = await res.json();

    products.forEach(product => productSelect.innerHTML += `<option value="${product.id}">${product.name}</option>`);
    return;
});

document.addEventListener("DOMContentLoaded", async () => {
    const res = await fetch("/product");

    if(!res.ok) return console.error(await res.json());

    const products = await res.json();

    products.forEach(product => productList.innerHTML += `
        <div class="card">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <span>R$${product.price}</span>
        </div>`
    );
});