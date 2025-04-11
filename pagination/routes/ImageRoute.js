import express from 'express'
import {SaveImage, GetImage} from '../controllers/ImageController.js'
let routes = express.Router();

routes.post("/", SaveImage);
routes.get("/", GetImage);

export default routes;