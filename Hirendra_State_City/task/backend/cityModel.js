require("./conn.js")
let mongoose = require("mongoose")
let citySchema = mongoose.Schema({
id: String,
    name: String,
    state: String
},{collection:"city"});

let City = mongoose.model("city", citySchema);

module.exports = City