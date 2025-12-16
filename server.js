import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(process.cwd(), "public")));

app.get("/", (req, res) => {
    return res.sendFile(path.join(process.cwd(), "public/html/index.html"));
});

app.get("/product", (req, res) => {
    return;
});

app.get("/order", (req, res) => {
    return;
});

app.post("/product", (req, res) => {
    return;
});

export default app;