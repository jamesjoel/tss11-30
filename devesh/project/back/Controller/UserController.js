const routes = require("express").Router();
const User = require("../model/User");


    routes.get("/", async(req, res)=>{
    let result = await User.find();
    // console.log(result)
    res.send(result);

    })


    routes.post("/" , async(req, res)=>{
        //  console.log(req.body)
        res.send({success : true})
        await User.create(req.body);

    }) 
       
    

    

module.exports = routes;
