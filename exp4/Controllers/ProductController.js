const express = require("express");
const routes = express.Router();

routes.get("/", (req, res)=>{
    res.send("product");
});
routes.get("/all", (req, res)=>{
    res.send("all product");
});
routes.get("/electronic", (req, res)=>{
    res.send("electronic product");
});
routes.get("/2024", (req, res)=>{
    res.send("product in 2024");
});

module.exports = routes;