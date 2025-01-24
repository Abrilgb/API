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
export default teachersController;