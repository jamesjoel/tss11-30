const routes = require("express").Router();
const City = require("../models/City");

routes.get("/getcity/:x", async(req, res) =>{
    let a = req.params.x ;
    let result = await City.find({state:a})
    res.send(result);
})

routes.get("/state", async(req, res)=>{
    let result = await City.distinct("state");
    res.send(result);
})

module.exports = routes;