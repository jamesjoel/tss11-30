let routes = require("express").Router();
let Hotel = require("../models/Hotels");

routes.get("/", async(req,res)=>{
    let result = await Hotel.find().populate("businessId").exec();
    res.send(result);
})

routes.get("/:id", async(req,res)=>{
    let id = req.params.id ;
    let result = await Hotel.find({ _id : id }).populate("businessId").exec();
    res.send(result[0]);    // result[0]  id ke liye
})


module.exports = routes;