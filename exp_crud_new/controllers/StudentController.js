import Stu from "../models/Student.js";

let getAllStu = async(req, res)=>{
    let result = await Stu.find();
    res.send(result);
}

let getStuById = async(req, res)=>{
    let result = await Stu.find({_id : req.params.id });
    res.send(result);
}

let saveStu = async(req, res)=>{
    let result = await Stu.create(req.body)
    res.send({success:true, result:result});
}

let updateStu = async(req, res)=>{
    let result = await Stu.updateMany({_id : req.params.id}, req.body)
    res.send({success:true, result:result});
}

let deleteStu = async(req, res)=>{
    let result = await Stu.deleteMany({_id : req.params.id})
    res.send({success:true, result:result});
}


export {getAllStu, getStuById, updateStu, deleteStu, saveStu}