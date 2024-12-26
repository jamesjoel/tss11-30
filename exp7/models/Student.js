const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/tss11_30");

const StudentSchema = mongoose.Schema({
    name : String,
    age : Number,
    teacherId : { type : mongoose.Schema.Types.ObjectId, ref : "teacher" }
})


module.exports = mongoose.model("student", StudentSchema);
//676121505a0b1a0ffc6f113b