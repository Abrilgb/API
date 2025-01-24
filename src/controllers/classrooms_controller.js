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
export default classroomsController; 
