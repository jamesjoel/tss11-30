 let routes = require("express").Router();
 let city = require("../model/city");
 
//  routes.get("/" , async(req , res)=>{
//     let result = await city.find();
//     res.send(result);
//  })


 routes.get("/state" , async (req , res)=>{
    let result = await city.distinct("state");
    res.send(result);
 })

 routes.get("/getcity/:x" , async (req , res)=>{
    let a = req.params.x
    let result = await city.find({state : a});
    res.send(result);
//    console.log(req.params);
 })

 module.exports = routes;