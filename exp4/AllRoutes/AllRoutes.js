const express = require("express");
const routes = express.Router();

routes.use("/teacher", require("../Controllers/TeacherController"));
routes.use("/student", require("../Controllers/StudentController"));
routes.use("/product", require("../Controllers/ProductController"));

module.exports = routes;