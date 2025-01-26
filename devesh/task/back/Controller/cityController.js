let city = require("../model/city")
let routes = require("express").Router();

routes.get("/" , async(req , res) =>{
   let result = await city.find()
   res.send(result);
})

routes.get("/state" , async (req , res)=>{
    let result = await city.distinct("state");
        res.send(result);
    })

 routes.get("/getcity/:x" , async (req , res)=>{
        let a = req.params.x
        let result = await city.find({state : a});
        res.send(result);
    })
     


module.exports = routes;