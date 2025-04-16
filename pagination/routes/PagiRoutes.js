import express from 'express'
import { allCity, totalCity } from '../controllers/PagiController.js'
let routes = express.Router();

// localhost:3000/api/v1/pagination/city/20/100

routes.get("/city/:skip/:recperpage", allCity);
routes.get("/total", totalCity);

export default routes;