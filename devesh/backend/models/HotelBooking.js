require("../config/Conn");

let mongoose = require("mongoose");

let HotelBookingSchema = mongoose.Schema({
    date : String,
    time : String,
    tables : String,
    hotelId : { type:mongoose.Schema.Types.ObjectId, ref: "Hotel"},
    userId : { type:mongoose.Schema.Types.ObjectId, ref: "User"},
    businessId : { type:mongoose.Schema.Types.ObjectId, ref: "Business"},
    status : { type : Number, default : 1},   // 1 denoted for booking
    createdAt : { type:Date, default: new Date()}
})

const HotelBooking = mongoose.model("Hotelbooking", HotelBookingSchema);

module.exports = HotelBooking;