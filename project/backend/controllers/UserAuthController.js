const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");

routes.post("/", async(req, res)=>{
    // console.log(req.body)
    let {username, password} = req.body;
    let result = await User.find({email:username});
    if(result.length > 0){ // that means username/email is correct

        if(result[0].password == sha1(password)){ // password is correct
            let userobj = { id : result[0]._id, name : result[0].name, email : result[0].email };
            let token = jwt.sign(userobj, "hello");
            let userinfo = {name : result[0].name, email : result[0].email};
            res.send({success:true, access_token : token, user : userinfo});

        }else{
            res.send({success:false, errType : 2});
        }

    }else{ // that means username/email is wrong
        res.send({success:false, errType : 1});
    }
})

module.exports = routes;