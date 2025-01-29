import express from "express";
import morgan from "morgan";
import ejs from "ejs";
import studentsRoutes from './routes/students_routes.js'
import teachersRoutes from './routes/teachers_routes.js'
import classroomsRoutes from './routes/classrooms_routes.js'

const app=express();
//Settings 
app.set('view engine', ejs);
app.set('port',process.env.PORT ||3000);

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
//Routes
app.use("/api/students",studentsRoutes)
app.use("/api/teachers",teachersRoutes)
app.use("/api/classrooms",classroomsRoutes)

export default app;