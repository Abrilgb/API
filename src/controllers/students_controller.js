const studentsController={};
import studentDAO from "../dao/students_dao.js";
import Student from "../models/Student.js";
studentsController.getAll=(req,res)=>{
    //Aqui le voy a pedir al DAO los datos de los estudiantes
    studentDAO.getAll()
    .then((students)=>{
        console.log(students);
        /*res.json({
        //data:students
        // });*/
        res.render('../src/views/index.ejs', {students});
    })
    .catch((error)=>{
        res.json({
            data:{
                message:error
            }
        })
    })
    
};

//Esta funcion se encarga de obtener un solo registro de la entidad de estudiantes
studentsController.getOne=(req, res)=>{
    studentDAO.getOne(req.params.student_is)
    .then((student)=>{

        // if(student!=null){
        //     res.json({data:student});
        // }else{
        //     res.json({data:{message:"Student not found"}});
        // }
        res.render('../src/views/edit.ejs', {student});//renderiza la vista edit.ejs y le pasa el objeto student
    });
};

studentsController.insert=(req,res)=>{
    studentDAO.insert(req.body)
    .then((response)=>{
        // res.json({
        //     data:{
        //         message:"Student saved",
        //         student:response


        //     }
        // })
        //redireccionar hacia otro enpoint

        res.redirect('/api/students/getAll');
    })
    .catch((error)=>{
        res.json({data:{
            message:error
        }
          
        })
    })
}

//Esta funcion se encarga de actualizar un registro de la entidad de estudiantes
studentsController.updateOne=(req,res)=>{
    studentDAO.updateOne(req.params.student_is,req.body)
    .then((result)=>{
        // res.json({
        //     data:{
        //         message:"Student updated successfully",
        //         result:result
        // }});
        res.redirect('/api/students/getAll');
    })
    .catch((error)=>{
        res.json({
            data:{
                message:error
        }});
    });
}

studentsController.deleteOne=(req,res)=>{
    studentDAO.deleteOne(req.params.student_is)
    .then((studentDeleted)=>{
        /*res.json({
            data:{
                message:"Student deleted successfully",
                student_delete:studentDeleted
        }});*/
        res.redirect('/api/students/getAll');
    })
    .catch((error)=>{
        res.json({
            data:{
                message:error
        }});
    });
}
export default studentsController;