import { Router } from "express";
import teachersController from "../controllers/teachers_controller.js";
const teacherRouter=Router();
teacherRouter.get('/getAll',teachersController.getAll);
teacherRouter.get('/getOne/:teacher_number',teachersController.getOne);
teacherRouter.post('/insert',teachersController.insert);
teacherRouter.put('/updateOne/:teacher_number',teachersController.updateOne);  
teacherRouter.delete('/deleteOne/:teacher_number',teachersController.deleteOne); 

export default teacherRouter;