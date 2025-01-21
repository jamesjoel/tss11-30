require("../config/conn");

let mongoose = require("mongoose");

let BusinessSchema = mongoose.Schema({
    name : String,
    business_name : String,
    email : String,
    password : String,
    contact : String,
    image : String,
    rating : String,
    address : String
}, {collection : "business"});

let Bus = mongoose.model("business", BusinessSchema)
module.exports = Bus;