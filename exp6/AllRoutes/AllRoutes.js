let routes = require("express").Router();


routes.use("/student", require("../Controllers/StudentController"));
routes.use("/teacher", require("../Controllers/TeacherController"));


module.exports = routes;