import City from '../models/City.js'
let allCity = async(req, res)=>{
    // console.log(req.params.recperpage);
    let skip = req.params.skip;
    let recperpage = req.params.recperpage;
    let result = await City.find().skip(skip).limit(recperpage);
    res.send(result)
}

let totalCity = async(req, res)=>{
    let result = await City.countDocuments();
    res.send({total:result});
}

export {allCity, totalCity}

/*
    let result = await User.find();  /// all data
    let result = await User.find({city : "indore"});  /// where city = "indore" all data
    let result = await User.find().limit(10);  /// first 10 data
    let result = await User.find().skip(10);  /// skip first 10 data
    
    let result = await User.find().skip(10).limit(10);  /// skip first 10 data


*/