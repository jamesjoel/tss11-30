let routes = require("express").Router();

let student = [
    {
        id : 1,
        name : "Rohit",
        age : 25,
        city : "indore"
    },
    {
        id : 2,
        name : "Amar",
        age : 21,
        city : "bhopal"
    },
    {
        id : 3,
        name : "Vijay",
        age : 22,
        city : "mumbai"
    },
    {
        id : 4,
        name : "Jaya",
        age : 20,
        city : "indore"
    },
    {
        id : 5,
        name : "Nidhi",
        age : 20,
        city : "mumbai"
    }
]


routes.get("/", (req, res)=>{
    res.send(student);
})

routes.get("/city", (req, res)=>{
    res.send("student city route")
})
// Parametrized Route
routes.get("/city/:a", (req, res)=>{

    let x = req.params.a;

    let arr = [];
    for(let i = 0; i <= 4; i++)
    {
        if(student[i].city==x){
            arr.push(student[i]);
        }
    }

    res.send(arr);
    
})



module.exports = routes;

