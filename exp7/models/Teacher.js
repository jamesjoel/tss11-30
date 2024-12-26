const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/tss11_30");

const TeacherSchema = mongoose.Schema({
    name : String,
    salary : Number
})

module.exports = mongoose.model("teacher", TeacherSchema);
