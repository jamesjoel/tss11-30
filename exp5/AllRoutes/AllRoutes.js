const routes = require("express").Router();

routes.use("/student", require("../controllers/StudentController"));


module.exports = routes;