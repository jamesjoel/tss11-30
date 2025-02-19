 let routes = require("express").Router();


 routes.use("/user" , require("../Controller/UserController"))
 routes.use("/city" , require("../Controller/cityController"))
 routes.use("/business" , require("../Controller/businessController"))

 module.exports = routes;