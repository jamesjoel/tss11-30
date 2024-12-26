let routes = require("express").Router();
let Teacher = require("../Models/Teacher");

routes.get("/", async(req, res)=>{
    let result = await Teacher.find();
    res.send(result);
})
routes.post("/", async(req, res)=>{
    await Teacher.create(req.body)
    res.send({success:true});
})


module.exports = routes;

/*
    Teacher API Doc
        here is the api for get data from server
            http://localhost:3000/api/v1/teacher
            when you hit this API by "get" method 
            then i will return you a JSON array with Teachers Data

        here is the api for post data to the client
            http://localhost:3000/api/v1/teacher
            when you hit this API by "post" method with
            {
                name : String,
                salary : Number,
                class : String,
                gender : String
            }
            this structure
            then I will return a object
                {
                    success : true
                }
            for you notifiy tha data will saved






*/