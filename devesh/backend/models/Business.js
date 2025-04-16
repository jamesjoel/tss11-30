require("../config/Conn");

let mongoose = require("mongoose");

let BusinessSchema = mongoose.Schema({
    name:String,
    business_name:String,
    email:String,
    password:String,
    contact:String,
    address:String,
    activeStatus:{ type : Number, default : 0 }
})

let Bus = mongoose.model("Business", BusinessSchema);
module.exports = Bus;