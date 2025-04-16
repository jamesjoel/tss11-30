const routes = require("express").Router();
const Business = require("../models/Business");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");
const IsAdminLoggedIn = require("../utill/IsAdminLoggedIn");

routes.post("/", async(req, res)=>{
    //  console.log(req.body);
    let { username , password } = req.body ;
    let result = await Business.find({email:username}) ;
    // console.log(result);

    if(result.length > 0 ){ // username/email is correct

        if(result[0].password == sha1(password)){
            //password is correct
            if(result[0].activeStatus == 1){
            let busobj = { id : result[0]._id , name : result[0].business_name } ; // login authentication
            let token = jwt.sign(busobj , "hello");
            res.send({success:true , token, business:result[0].business_name });
            }else{
               res.send({success : false , errType : 3}); // for deactive business
             }
        }else{ // password is incorrect
            res.send({success : false , errType : 2});
        }

    }else{// that means username/email is wrong
        res.send({success : false , errType : 1 }) ;

    }

})

routes.get("/changestatus/:id/:status", IsAdminLoggedIn, async(req, res)=>{
//  console.log(req.params.status);
 
    let bid = req.params.id;

    let cstatus = req.params.status;
    let status = cstatus == 1 ? 0 : 1 ;
    await Business.updateMany({_id : bid}, {activeStatus : status});
    res.send({success : true});
})

module.exports = routes ;



