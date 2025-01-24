const teacherDAO = {};
import Teacher from '../models/Teacher.js';
teacherDAO.getAll = async () => {
  return await Teacher.find();
};
//Esta funcion se encarga de obtener un solo registro de la entidad de Teacher
teacherDAO.getOne = async (teacher_number) => {
  return await Teacher.findOne({teacher_number:teacher_number});
};
export default teacherDAO;