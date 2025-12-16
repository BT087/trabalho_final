const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ quiet: true, path: ".env.local" });

const app = require("./server.js");

app.listen(8080, "localhost");