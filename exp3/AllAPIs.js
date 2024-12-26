let express = require("express");
let routes = express.Router();


routes.get("/product", (req, res)=>{
    res.send("product")
});
routes.get("/user", (req, res)=>{
    res.send("user")
});
routes.get("/city", (req, res)=>{
    res.send("city")
});

module.exports = routes;