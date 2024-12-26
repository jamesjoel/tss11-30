const routes = require("express").Router();
const Student = require("../models/Student");

routes.post("/", async(req, res)=>{
    let result = await Student.create(req.body);
    res.send(result);
})

routes.get("/", async(req, res)=>{
    let result = await Student.find().populate("teacherId").exec();
    res.send(result);
})

module.exports = routes;