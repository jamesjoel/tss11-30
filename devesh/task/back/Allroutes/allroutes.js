 let routes = require("express").Router();



 routes.use("/city" , require("../Controller/cityController"))


 module.exports = routes;