import express from 'express'
import PagiRoutes from './PagiRoutes.js'
import ImageRoutes from './ImageRoute.js'
let routes = express.Router();

routes.use("/api/v1/pagination", PagiRoutes)
routes.use("/api/v1/upload", ImageRoutes)

export default routes;