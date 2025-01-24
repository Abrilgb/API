import { Router } from "express";
import teachersController from "../controllers/teachers_controller.js";
const teacherRouter=Router();
teacherRouter.get('/getAll',teachersController.getAll);
teacherRouter.get('/getOne/:teacher_number',teachersController.getOne);

export default teacherRouter;