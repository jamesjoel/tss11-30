 require("../config/conn");
 
 let mongoose = require("mongoose");
 
 let citySchema = mongoose.Schema({
     id : String,
     name : String,
     state : String

} , {collection : "city"})
 
 let city = mongoose.model("city", citySchema);
 
 module.exports =  city;