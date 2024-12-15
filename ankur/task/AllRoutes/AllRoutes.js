const routes = require("express").Router();
routes.use("/product", require("../controllers/Product.Controller"));
module.exports = routes;