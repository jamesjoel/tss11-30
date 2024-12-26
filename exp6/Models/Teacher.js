require("../config/Conn");
let mongoose = require("mongoose");

let TeacherSchema = mongoose.Schema({
    name : String,
    salary : Number,
    class : String,
    gender : String
})

let Teacher = mongoose.model("teacher", TeacherSchema)

module.exports = Teacher;