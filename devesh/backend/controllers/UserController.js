const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");
const IsUserLoggedIn = require("../utill/IsUserLoggedIn")

routes.get("/",  async(req,res)=>{
    let result = await User.find()
    res.send(result);
})

routes.get("/profile", IsUserLoggedIn, async(req,res)=>{
            let id = req.obj.id;
            let result = await User.find({_id : id});
            res.send({success : true, user : result[0] });
      })


routes.post("/", async(req, res)=>{
    // console.log(req.body) ;
    delete req.body.repassword ;
    // convert password into encrypted format
    req.body.password = sha1(req.body.password)
    await User.create(req.body) ;
    res.send({success:true});
})

routes.put("/profile", IsUserLoggedIn, async(req,res)=>{
            let id = req.obj.id;
            delete req.body.email;
            await User.updateMany({_id : id}, req.body );
            res.send({success : true});
    })

routes.post("/updatepassword", IsUserLoggedIn, async(req,res)=>{
            let id = req.obj.id;
            let result = await User.find({_id : id});
            if(result[0].password == sha1(req.body.pass)){
                await User.updateMany({_id:id}, {password : sha1(req.body.newpass)});
                res.send({success : true});
            }else{
                res.send({ success : false, errType : 1});
            }
    })



module.exports = routes;