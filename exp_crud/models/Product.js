require("../config/Conn");

const mongoose = require("mongoose");
const ProSchema = mongoose.Schema({
    title : String,
    price : Number,
    category : String,
    subcategory : String,
    rating : Number
})

const Pro = mongoose.model("product", ProSchema);

module.exports = Pro;
