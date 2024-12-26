require("../config/Conn");
let mongoose = require("mongoose");

let StuSchema = mongoose.Schema({
    name : String,
    age : Number
}, { collection : "student" })

let Stu = mongoose.model("student", StuSchema);

module.exports = Stu;