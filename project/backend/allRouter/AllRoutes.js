const routes = require("express").Router();


routes.use("/api/v1/user", require("../controllers/UserController"));
routes.use("/api/v1/city", require("../controllers/CityController"));
routes.use("/api/v1/business", require("../controllers/BusinessController"));


module.exports = routes;