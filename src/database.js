//Aqui va la conexión a la base de datos utilizando mongoose
import mongoose from "mongoose";
mongoose.connect('mongodb+srv://aguzm347:yinyer0223Y@yinyer-02.ohjot.mongodb.net/school_control_db?retryWrites=true&w=majority&appName=yinyer-02')
//promesas en cadena para saber si la conexión fue exitosa o no
.then((db)=> console.log('Mongodb Atlas is connected'))
.catch((error)=>console.error(error));
export default mongoose;
