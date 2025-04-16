require("../config/Conn");
const mongoose = require("mongoose");

const HotelSchema = mongoose.Schema({
    hotelname: String,
    hotelimage: String,
    menuimage: String,
    address: String,
    tables: Number,
    price: Number,
    rating : { type : Number, default: 0},
    businessId: { type: mongoose.Schema.Types.ObjectId, ref : "Business"}
})

const Hotel = mongoose.model("Hotel",HotelSchema);
module.exports = Hotel;