let routes = require("express").Router();
let Student = require("../Models/Student");

routes.get("/", async(req, res)=>{
    let data = await Student.find();
    res.send(data);
})
// API->  http://localhost:3000/api/v1/student
// Method -> post

routes.post("/", async(req, res)=>{
    await Student.create(req.body);    
    res.send({ success : true });
})

module.exports = routes;