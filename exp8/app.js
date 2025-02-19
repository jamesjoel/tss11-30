const express = require("express");
const app = express();
const mongoose = require("mongoose");
const reversePopulate = require('mongoose-reverse-populate-v2');

mongoose.connect("mongodb://0.0.0.0:27017/tss11_30");

const StuSchema = mongoose.Schema({
    name : String,
    fee : Number,
    teacherId : { type : mongoose.Schema.Types.ObjectId, ref : "Teacher" }
})
const Stu = mongoose.model("Student", StuSchema)

const TeacherSchema = mongoose.Schema({
    name : String,
    salary : Number
})
const Teacher = mongoose.model("Teacher", TeacherSchema);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post("/teacher", async(req, res)=>{
    await Teacher.create(req.body);
    res.send({success:true})
})
app.post("/student", async(req, res)=>{
    await Stu.create(req.body);
    res.send({success:true})
})
app.get("/student", async(req, res)=>{
    let result =await Stu.find();
    res.send(result)
})
app.get("/teacher", async(req, res)=>{
    let result =await Teacher.find();
    res.send(result)
})



app.get("/student/:id", async(req, res)=>{
    let id = req.params.id;
    let result = await Stu.find({_id : id}).populate("teacherId").exec();
    res.send(result);
})

app.get("/teacher/:id", async(req, res)=>{
    let id = req.params.id;
    let result = await Stu.find({teacherId : id});
    let onlyTeacher = await Teacher.findOne({_id : id });
    console.log(onlyTeacher)
    console.log({...onlyTeacher})
    
    
})



app.listen(3000, ()=>{
    console.log("server start")
});