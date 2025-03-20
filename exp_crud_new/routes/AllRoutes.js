import express from 'express';
import StudentRoutes from './StudentRoutes.js'
let routes = express.Router();

routes.use("/api/v1/student", StudentRoutes);

export default routes;