const routes = require("express").Router();


routes.use("/api/v1/user", require("../controllers/UserController"));


module.exports = routes;