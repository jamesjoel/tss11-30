const express = require("express");
const routes = express.Router();

routes.get("/", (req, res)=>{
    res.send("teacher");
});
routes.get("/primary", (req, res)=>{
    res.send("priamry teacher");
});
routes.get("/heigher", (req, res)=>{
    res.send("heigher teacher");
});


module.exports = routes;