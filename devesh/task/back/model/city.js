require("../config/conn")

let mongoose = require("mongoose");

let citySchema = mongoose.Schema({
    id : String,
    state : String,
    name : String
} , {collection : "city"})


let city = mongoose.model("city" , citySchema);

module.exports = city;