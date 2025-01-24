//esta clase se encarga de manejar las rutas de la entidad de Classroom
import { Router } from 'express';
import classroomsController from '../controllers/classrooms_controller.js';
const classroomRouter = Router();//se crea un objeto de tipo Router para manejar las rutas de la entidad de Classroom
classroomRouter.get('/getAll', classroomsController.getAll);
classroomRouter.get('/getOne/:classroom_number', classroomsController.getAll);//se cambio el nombre de la ruta
classroomRouter.post('/insert', classroomsController.insert);
classroomRouter.put('/updateOne/:classroom_number', classroomsController.updateOne);
classroomRouter.delete('/deleteOne/:classroom_number', classroomsController.deleteOne);
export default classroomRouter;
