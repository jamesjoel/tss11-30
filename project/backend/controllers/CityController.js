const routes = require("express").Router();
const City = require("../models/City");

// localhost:3000/api/v1/city/getcity/Aurna
routes.get("/getcity/:x", async(req, res)=>{
    let a = req.params.x;
    let result = await City.find({state:a});
    res.send(result);
})
// localhost:3000/api/v1/city/state
routes.get("/state", async(req, res)=>{
    let result = await City.distinct("state");
    res.send(result);
})

module.exports = routes;
/*
    await City.find()
    await City.find({state : "MP"})
    await City.distinct("state")


    Parametrized URL


*/