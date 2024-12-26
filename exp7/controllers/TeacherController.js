const routes = require("express").Router();
const Teacher = require("../models/Teacher");


routes.post("/", async(req, res)=>{
    let result = await Teacher.create(req.body);
    res.send(result);
})
routes.get("/", async(req, res)=>{
    let result = await Teacher.find();
    res.send(result);
})

module.exports = routes;


