let routes = require("express").Router();
let business = require("../model/business");


routes.get("/", async(req, res)=>{
    let result = await city.find();
    res.send(result);
})


// routes.post("/" , async(req, res)=>{
//     // delete req.body.re-password;
//     await business.create(req.body);
//     //  console.log(req.body)
//     res.send({success : true})
// })


module.exports = routes;