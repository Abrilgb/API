const teachersController = {};
import teacherDAO from '../dao/teachers_dao.js';
import Teacher from '../models/Teacher.js';
teachersController.getAll = (req, res) => {
  teacherDAO.getAll()
    .then((teachers) => {
      res.json({
        data: teachers,
      });
    })
    .catch((error) => {
      res.json({
        data: {
          message: error,
        },
      });
    });
};
//Esta funcion se encarga de obtener un solo registro de la entidad de Teacher
teachersController.getOne=(req, res)=>{
    teacherDAO.getOne(req.params.teacher_number)
    .then((teacher)=>{
        
        if(teacher!=null){
            res.json({data:teacher});
        }else{
            res.json({data:{message:"Teacher not found"}});
        }
    });
}

teachersController.insert=(req,res)=>{
    teacherDAO.insert(req.body)
    .then((response)=>{
        res.json({
            data:{
                message:"Teacher saved",
                response:response
            }
        })
    })
    .catch((error)=>{
        res.json({data:{
            message:error
        }
          
        })
    })
}

//Esta funcion se encarga de actualizar un registro de la entidad de Teacher
teachersController.updateOne=(req,res)=>{
    teacherDAO.updateOne(req.params.teacher_number,req.body)
    .then((result)=>{
        res.json({
            data:{
                message:"Teacher updated successfully",
                result:result
        }});
    })
    .catch((error)=>{
        res.json({
            data:{
                message:error
            }
        })
    })
};

teachersController.deleteOne=(req,res)=>{
  teacherDAO.deleteOne(req.params.teacher_number)
  .then((teacherDelete)=>{
      res.json({
          data:{
              message:"Teacher deleted successfully",
              teacher_delete:teacherDelete
      }});
  })
  .catch((error)=>{
      res.json({
          data:{
              message:error
      }});
  });

};
export default teachersController;