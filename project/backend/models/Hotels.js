require("../config/conn");
const mongoose = require("mongoose");

const HotelSchema = mongoose.Schema({
    hotelname : String,
    hotelimage : String,
    menuimage : String,
    address : String,
    tables : Number,
    price : Number,
    businessid : { type : mongoose.Schema.Types.ObjectId, ref : "Business" }
})

const Hotel = mongoose.model("hotel", HotelSchema);

module.exports = Hotel;