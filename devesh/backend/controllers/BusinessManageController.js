const routes = require("express").Router();
const jwt = require("jsonwebtoken");
const uid = require("unique-string-generator");
const path = require("path");
const Hotel = require("../models/Hotels");
const Booking = require("../models/HotelBooking");
const IsBusinessLoggedIn = require("../utill/IsBusinessLoggedIn")

routes.post("/hotels", async(req, res)=>{
    //console.log(req.headers)
    // console.log(req.body);
    // console.log(req.files);
    
    let hotelimage = req.files.hotelimage;
    let menuimage = req.files.menuimage;
    let a = uid.UniqueString();
    let b = uid.UniqueString();
    let hnamearr = hotelimage.name.split(".");
    let mnamearr = menuimage.name.split(".");
    let newhotelimagename = a+"."+hnamearr[hnamearr.length-1];
    let newmenuimagename = b+"."+mnamearr[mnamearr.length-1];
    // console.log(newhotelimagename);
    // console.log(newmenuimagename);
    req.body.hotelimage = newhotelimagename ;
    req.body.menuimage = newmenuimagename ;

    if(req.headers.authorization){
        let token = req.headers.authorization ;
        let obj = jwt.decode(token,"hello");
        if(obj){
            req.body.businessId = obj.id ;
            await hotelimage.mv(path.resolve()+"/assets/hotels/"+newhotelimagename);
            await menuimage.mv(path.resolve()+"/assets/menu/"+newmenuimagename);
            await Hotel.create(req.body);
            res.send({success : true});
        }else{
            res.send({success : false});
        }
    }else{
        res.send({success : false});
    }
})

routes.get("/hotels", IsBusinessLoggedIn, async(req, res)=>{
            let result = await Hotel.find({businessId : req.obj.id});
            res.send(result);
    })

routes.get("/hotels/:id", IsBusinessLoggedIn, async(req, res)=>{
            let id = req.params.id ;
            let result = await Hotel.find({ _id : id });
            res.send(result);
        })

routes.put("/hotels/:id", IsBusinessLoggedIn, async(req, res)=>{
            let id = req.params.id ;
            let result = await Hotel.updateMany({ _id : id }, req.body );
            res.send(result);
    })

routes.delete("/hotels/:id", IsBusinessLoggedIn, async(req, res)=>{
            let id = req.params.id ;
            let result = await Hotel.deleteMany({ _id : id });
            res.send(result);
    })

routes.get("/booking", IsBusinessLoggedIn, async(req, res)=>{
            let id = req.obj.id;
            let result = await Booking.find({ businessId : id }).populate("userId").populate("hotelId");
            res.send(result);
        })



module.exports = routes ;