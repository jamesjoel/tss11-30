const routes = require("express").Router();
const jwt = require("jsonwebtoken");
const HotelBooking = require("../models/HotelBooking");
const Hotel = require("../models/Hotels");
const Business = require("../models/Business");
const User = require("../models/User");

routes.post("/", async(req, res)=>{
    //  console.log(req.body);return;
    // console.log(req.headers);
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let userinfo = jwt.decode(token,"hello");
        if(userinfo){
            req.body.userId = userinfo.id;
            await HotelBooking.create(req.body);
            res.send({success:true});
        }else{
            res.send({success:false});
        }
    }else{
        res.send({success:false});
    }
})

routes.get("list/owner",async(req,res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let ownerinfo = jwt.decode(token,"hello");
        if(ownerinfo){
            console.log(ownerinfo);
        }else{
            res.send({success:false});
        }
    }else{
        res.send({success:false});
    }
})

// routes.get("deleteall", async(req, res)=>{
//     await User.collection.drop();
//     await Business.collection.drop();
//     await Hotel.collection.drop();
//     await HotelBooking.collection.drop();
//     res.send({success:true});
// })



module.exports = routes;