require("../config/conn");

let mongoose = require("mongoose");

let AdminSchema = mongoose.Schema({
    name : String,
    username : String,
    password : String,
    
})

let Admin = mongoose.model("admin", AdminSchema);

module.exports = Admin;