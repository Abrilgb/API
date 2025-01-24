const teacherDAO = {};
import Teacher from '../models/Teacher.js';
teacherDAO.getAll = async () => {
  return await Teacher.find();
};
//Esta funcion se encarga de obtener un solo registro de la entidad de Teacher
teacherDAO.getOne = async (teacher_number) => {
  return await Teacher.findOne({teacher_number:teacher_number});
};
teacherDAO.insert = async (teacher) => {
  return await Teacher.create(teacher);
};

teacherDAO.updateOne = async (teacher_number, teacher) => {
  return await Teacher.findOneAndUpdate({teacher_number:teacher_number}, teacher);
};

teacherDAO.deleteOne = async (teacher_number) => {
  return await Teacher.findByIdAndDelete({teacher_number:teacher_number});
};
export default teacherDAO;