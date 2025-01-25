const routes = require("express").Router();

routes.use("/api/v1/city",require("../controllers/CityController"));

module.exports = routes;