require("../config/Conn");

let mongoose = require("mongoose");

let CitySchema = mongoose.Schema({
    id : String,
    name : String,
    state : String
},{collection:"city"});

let City = mongoose.model("city", CitySchema);

module.exports = City;