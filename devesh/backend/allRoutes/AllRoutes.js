const routes = require("express").Router();

routes.use("/api/v1/user",require("../controllers/UserController"));
routes.use("/api/v1/city",require("../controllers/CityController"));
routes.use("/api/v1/business",require("../controllers/BusinessController"));
routes.use("/api/v1/userauth",require("../controllers/UserAuthController"));
routes.use("/api/v1/businessauth",require("../controllers/BusinessAuthController"));
routes.use("/api/v1/adminauth",require("../controllers/AdminAuthController"));
routes.use("/api/v1/businessmanage",require("../controllers/BusinessManageController"));
routes.use("/api/v1/demo",require("../controllers/DemoController"));
routes.use("/api/v1/hotels",require("../controllers/HotelsController"));
routes.use("/api/v1/hotelbooking",require("../controllers/HotelBookingController"));
routes.use("/api/v1/forgotpass",require("../controllers/ForgotPassController"));

module.exports = routes;