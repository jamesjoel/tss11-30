require("../config/Conn");
let mongoose = require("mongoose");

let AdminSchema = mongoose.Schema({
    name : String ,
    username : String ,
    password : String 

},{collection : "admin"});

let Admin = mongoose.model("admin",AdminSchema);

module.exports = Admin;