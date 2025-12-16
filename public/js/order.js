const postOrder = document.getElementById("post-order");
const orderList = document.getElementById("order-list");

let nextId = 1;

document.addEventListener("DOMContentLoaded", async () => {
    const res = await fetch("/order");

    if(!res.ok) return console.error(await res.json());

    const orders = await res.json();

    orders.forEach(order => {
        nextId += 1;

        orderList.innerHTML += `<tr>
            <td>${order.receiver}</td>
            <td>${order.email}</td>
            <td>${order.product}</td>
            <td>${order.quantity}</td>
            <td>${order.status}</td>
        </tr>`
    });

    return;
});

postOrder.addEventListener("submit", async (ev) => {
    ev.preventDefault();

    const formData = new FormData(postOrder);
    const json = {};

    formData.forEach((value, key) => {
        if(key === "quantity" || key === "product") value = Number.parseInt(value);

        json[key] = value;
    });
    
    const res = await fetch("/order", { method: "POST", body: JSON.stringify(json), headers: { "Content-Type": "application/json" } });

    if(!res.ok) return console.error(await res.json());

    orderList.innerHTML += `<tr>
        <td>${json.receiver}</td>
        <td>${json.email}</td>
        <td>${json.product}</td>
        <td>${json.quantity}</td>
        <td>Em andamento</td>
    </tr>`

    return;
});