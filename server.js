const express = require("express");
const path = require("path");

const { ProductDAO } = require("./api/class/product.dao.js");
const { OrderDAO } = require("./api/class/order.dao.js");
const { Order } = require("./api/model/order.js");

const productDao = new ProductDAO(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const orderDao = new OrderDAO(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const app = express();

if(process.env.DEV) app.use(express.json());

app.use(express.static(path.join(process.cwd(), "public")));

app.get("/", (req, res) => {
    return res.sendFile(path.join(process.cwd(), "public/html/index.html"));
});

app.get("/product", async (req, res) => {
    try {
        await productDao.get();
    } catch (err){
        return res.status(500).json({ name: "DaoError", message: "Erro ao buscar os produtos" })
    }

    const products = await productDao.get();

    return res.status(200).json(products);
});

app.get("/order", async (req, res) => {
    try {
        await orderDao.get();
    } catch (err){
        return res.status(500).json({ name: "DaoError", message: "Erro ao buscar os pedidos" });
    }

    const orders = await orderDao.get();

    return res.status(200).json(orders);
});

app.post("/order", async (req, res) => {
    const data = new Order(req.body);

    try {
        await orderDao.post(data);
    } catch (err){
        return res.status(500).json({ name: "DaoError", message: "Erro ao enviar o pedido" });
    }

    return res.status(201).end();
});

module.exports = app;