const routes = require("express").Router();
const User = require("../models/User");


routes.get("/", async(req, res)=>{
    let result = await User.find();
    res.send(result);
})

module.exports = routes;
