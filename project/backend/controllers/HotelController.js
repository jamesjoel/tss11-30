let routes = require("express").Router();
let Hotel = require("../models/Hotels");

routes.get("/", async(req, res)=>{
    let result = await Hotel.find();
    res.send(result);
})
routes.get("/:id", async(req, res)=>{
    let id = req.params.id;
    let result = await Hotel.find({_id : id});
    res.send(result[0]);
})

module.exports = routes;