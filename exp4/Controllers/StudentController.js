const express = require("express");
const routes = express.Router();

routes.get("/regular", (req, res)=>{
    res.send("regular");
});
routes.get("/private", (req, res)=>{
    res.send("private");
});


module.exports = routes;