const routes = require("express").Router();
const Bus = require("../models/Business");
const sha1 = require("sha1");

routes.get("/", async(req, res)=>{
    let result = await Bus.find() ;
    res.send(result) ;
})

routes.post("/", async(req,res)=>{
    delete req.body.repassword ;
    req.body.password = sha1(req.body.password) ;
    await Bus.create(req.body);
    res.send({success:true});
})

module.exports = routes ;