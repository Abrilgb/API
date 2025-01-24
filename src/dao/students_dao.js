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
};

studentDAO.updateOne=async(student_is,student)=>{
    //findOneAndUpdate recibe 3 parametros: el primero es el filtro, el segundo es el objeto con los datos a actualizar y el tercero es un objeto con opciones
    return await Student.findOneAndUpdate({student_is:student_is},student);
};

studentDAO.deleteOne=async(student_is)=>{
    return await Student.findByIdAndDelete({student_is:student_is});
};

export default studentDAO;