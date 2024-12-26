require("../config/Conn");

const mongoose = require("mongoose");
const EmployeeSchema = mongoose.Schema({
    name : String,
    salary : Number,
    department : String,
    post : String,
    contact : Number,
    createAt : { type : Date, default : new Date() }
})

const Emp = mongoose.model("employee", EmployeeSchema);

module.exports = Emp;
