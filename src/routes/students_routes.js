import { Router } from "express";
import studentsController from "../controllers/students_controller.js";
const studentRouter=Router();
studentRouter.get('/getAll',studentsController.getAll);
studentRouter.get('/getOne/:student_id', studentsController.getOne);
studentRouter.post('/insert', studentsController.insert)

export default studentRouter;
