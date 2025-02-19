const routes = require("express").Router();
const jwt = require("jsonwebtoken");
const Hotel = require("../models/Hotels");

routes.post("/addhotels", async(req, res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let obj = jwt.decode(token, "hello");
        if(obj){
            
            req.body.businessid = obj.id;
            await Hotel.create(req.body);
            res.send({success:true});

        }else{
            res.send({success:false});
        }
    }else{
        res.send({success:false});
    }
})

routes.get("/fetchhotels", async(req, res)=>{
    if(req.headers.authorization)
        {
            let token = req.headers.authorization;
            let obj = jwt.decode(token, "hello");
            if(obj)
            {
                let result = await Hotel.find({ businessid : obj.id });
                res.send(result);
            }
            else
            {
                res.send({success:false});
            }
        }
    else
    {
        res.send({success:false});
    }

    
})

module.exports = routes;