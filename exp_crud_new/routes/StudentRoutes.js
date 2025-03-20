import express from 'express';
import {getAllStu, getStuById, updateStu, deleteStu, saveStu} from '../controllers/StudentController.js'

let routes = express.Router();

routes.get("/", getAllStu)
routes.get("/:id", getStuById)
routes.post("/", saveStu)
routes.put("/:id", updateStu)
routes.delete("/:id", deleteStu)

export default routes;








