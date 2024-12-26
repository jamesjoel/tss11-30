const routes = require("express").Router();
const Employee = require("../models/Employee");
const WhereObj = require("../helpers/WhereObj")

// :3000/api/v1/employee  ----- get ----- all data will retured
routes.get("/", async(req, res)=>{
    if(Object.keys(req.query).length == 0){
        let result = await Employee.find();
        res.send(result);

    }else{

        let obj = WhereObj(req.query);
        let result = await Employee.find(obj);
        res.send(result);

    }
})


routes.delete("/", async(req, res)=>{
    let obj = WhereObj(req.query);
    let result = await Employee.deleteMany(obj);
    res.send(result);
})

// rohit   -- Rohit
// Rohit   -- Rohit
// ROHIT   -- Rohit



// :3000/api/v1/employee/1245  ----- get ----- only one data will retured
routes.get("/:id", async(req, res)=>{
    let id = req.params.id;
    let result = await Employee.find({_id : id});
    res.send(result[0]);
})
// :3000/api/v1/employee  ----- post ----- data will received --- go to save
routes.post("/", async(req, res)=>{
    let result = await Employee.create(req.body);
    res.send({ success : true });
})
/*
    if method id delete and :3000/api/v1/employee/1245787

    if method id delete and :3000/api/v1/employee?gender=male
    if method id delete and :3000/api/v1/employee?age=25
    if method id delete and :3000/api/v1/employee?salary=2500
    if method id delete and :3000/api/v1/employee?salary=2500&age=20

*/

// :3000/api/v1/employee/1478  ----- delete ----- one data will delete --- go to save
routes.delete("/:a", async(req, res)=>{
    let id = req.params.a;
    let result = await Employee.deleteMany({_id :id});
    res.send(result);

})

// :3000/api/v1/employee/1478  ----- put ----- one data will update --- go to save
routes.put("/:a", async(req, res)=>{
    let id = req.params.a;
    let result = await Employee.updateMany({_id : id}, req.body);
    res.send(result)
})


module.exports = routes;