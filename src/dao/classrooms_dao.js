// Esta clase se encarga de realizar las operaciones de acceso a la base de datos para la entidad de Classroom
const classroomDAO = {};
import Classroom from '../models/Classroom.js';
classroomDAO.getAll = async () => {
  return await Classroom.find();
};
//Esta funcion se encarga de obtener un solo registro de la entidad de Classroom
classroomDAO.getOne = async () =>{
  return await Classroom.findOne({classroom_id:classroom_id})
}
export default classroomDAO;