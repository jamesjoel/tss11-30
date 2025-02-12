require("../config/conn");
  
  let mongoose = require("mongoose");
  
  let businessSchema = mongoose.Schema({
      name : String,
      business_name : String,
      email : String ,
      password : String ,
      contact : String ,
      image : String ,
      rating : String ,
      address : String
 
 } , {collection : "business"})
  
  let business = mongoose.model("business", businessSchema);
  
  module.exports =  business;