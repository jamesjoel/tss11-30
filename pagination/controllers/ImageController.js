import Image from "../models/Images.js";
import Path from 'path';
let SaveImage = async(req, res)=>{
    let photo = req.files.photo;
    photo.mv(Path.resolve()+"/assets/images/"+photo.name, async(err)=>{
        let result = await Image.create({name : photo.name});
        res.send(result);
    });
}

let GetImage = async(req, res)=>{
    let result = await Image.find();
    res.send(result);
}

export {SaveImage, GetImage}