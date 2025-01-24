// El codigo de este archivo se encarga de realizar las operaciones de acceso a la base de datos para la entidad de estudiantes
const studentDAO={};
import Student from "../models/Student.js";
studentDAO.getAll=async()=>{
    return await Student.find();
};
studentDAO.getOne=async(student_is)=>{
    return await Student.findOne({student_is:student_is});
};
studentDAO.insert=async(student)=>{
    return await Student.create(student);
}
export default studentDAO;