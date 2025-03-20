import mongoose from "../config/conn.js";

let StuSchema = mongoose.Schema({
    name : String,
    age : String,
    city : String
}, { timestamps : true })

let Stu = mongoose.model("student", StuSchema);

export default Stu;