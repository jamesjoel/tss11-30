import mongoose from '../config/conn.js'

let ImageSchema = mongoose.Schema({
    
    name : String
});


let Image = mongoose.model("image", ImageSchema)

export default Image;

