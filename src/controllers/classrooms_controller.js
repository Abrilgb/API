const classroomsController = {};
import classroomDAO from '../dao/classrooms_dao.js';
import Classroom from '../models/Classroom.js';
classroomsController.getAll = (req, res) => {
  classroomDAO.getAll()
    .then((classrooms) => {
      res.json({
        data: classrooms,
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

//Esta funcion se encarga de obtener un solo registro de la entidad de Classroom
classroomsController.getOne=(req, res)=>{
  classroomDAO.getOne(req.params.clasroom_number)
  .then((classroom)=>{
      
      if(classrooms!=null){
          res.json({data:classroom});
      }else{
          res.json({data:{message:"classrooms not found"}});
      }
  });
}

classroomsController.insert=(req,res)=>{
  classroomDAO.insert(req.body)
  .then((response)=>{
      res.json({
          data:{
              message:"Classroom saved",
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

classroomsController.updateOne=(req, res)=>{
  classroomDAO.updateOne(req.params.classroom_number, req.body)
  .then((result)=>{
      res.json({
          data:{
              message:"Classroom updated successfully",
              result:result
      }});
  })
  .catch((error)=>{
      res.json({
          data:{
              message:error
          }
      });
  });
}

classroomsController.deleteOne=(req, res)=>{
  classroomDAO.deleteOne(req.params.classroom_number)
  .then((classroomDelete)=>{
      res.json({
          data:{
              message:"Classroom deleted successfully",
              classroom_delete:classroomDelete
      }});
  })
  .catch((error)=>{
      res.json({
          data:{
              message:error
          }
      });
  });
}
export default classroomsController; 
