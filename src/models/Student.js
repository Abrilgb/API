import { model,Schema } from "mongoose";
const studentSchema = new Schema({
    student_is:{
        unique:true,
        require:true,
        type:Number
    },
    name:String,
    lastname:String,
    grade:Number,
    group:String,
    average:Number
},
{
    versionKey:false,
    timestamps:true
});
export default model('student',studentSchema);
