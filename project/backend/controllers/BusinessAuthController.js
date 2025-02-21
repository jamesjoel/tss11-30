const routes = require("express").Router();
const sha1 = require("sha1");
const Business = require("../models/Business");
const jwt  = require("jsonwebtoken")

routes.post("/", async(req, res)=>{
    let {username, password} = req.body;
    let result = await Business.find({email:username});
    if(result.length > 0)
    {
        if(result[0].password == sha1(password))
        {
            let busObj = {id : result[0]._id, name : result[0].business_name};
            let token = jwt.sign(busObj, "hello");
            res.send({success:true, token, business:result[0].business_name});
        }
        else{

            res.send({success:false, errType : 2})
        }
    }
    else{
        res.send({success:false, errType : 1})
    }
})

module.exports = routes;