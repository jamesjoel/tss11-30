const routes = require("express").Router();


routes.use("/employee", require("../controllers/EmployeeController"));
routes.use("/product", require("../controllers/ProductController"));


module.exports = routes;