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

classroomDAO.insert = async (classroom) => {
  return await Classroom.create(classroom);
};

//Esta funcion se encarga de insertar un registro de la entidad de Classroom
classroomDAO.updateOne = async (classroom_id, classroom) => {
  //findOneAndUpdate recibe 3 parametros: el primero es el filtro, el segundo es el objeto con los datos a actualizar y el tercero es un objeto con opciones
  return await Classroom.findOneAndUpdate({classroom_id:classroom_id}, classroom);
}

classroomDAO.deleteOne = async (classroom_id) => {
  return await Classroom.findByIdAndDelete({classroom_id:classroom_id});
};
export default classroomDAO;