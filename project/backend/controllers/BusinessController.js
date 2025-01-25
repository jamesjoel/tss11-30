const routes = require("express").Router();
const Bus = require("../models/Business");

routes.get("/", async(req, res)=>{
    let result = await Bus.find();
    res.send(result);
})
routes.post("/", async(req, res)=>{
    delete req.body.repassword;
    await Bus.create(req.body);
    res.send({success:true});
})

module.exports = routes;