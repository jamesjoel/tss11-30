import mongoose from '../config/conn.js'

let CitySchema = mongoose.Schema({
    id : String,
    city : String,
    state : String
}, {collection:"city"});


let City = mongoose.model("city", CitySchema)

export default City;

