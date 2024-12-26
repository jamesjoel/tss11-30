const routes = require("express").Router();
const Product = require("../models/Product");

routes.get("/", async(req, res)=>{
    let findObj = null;

    if(req.query.key && req.query.key==1234){

    


    if(req.query.price && !req.query.category){
        findObj = { price : req.query.price };
    }
    else if(req.query.minprice && !req.query.category){
        findObj = { price : { $lte : req.query.minprice }};
    }
    else if(req.query.maxprice && !req.query.category){
        findObj = { price : { $gte : req.query.maxprice }};
    }
    else if(req.query.price && req.query.category){
        findObj = { $and : [{price:req.query.price}, {category : req.query.category}]};
    }
    else if(req.query.minprice && req.query.category){
        findObj = { $and : [{price:{ $lte : req.query.minprice}}, {category : req.query.category}]};
    }
    else if(req.query.maxprice && req.query.category){
        findObj = { $and : [{price:{ $gte : req.query.maxprice}}, {category : req.query.category}]};
    }
    else if(req.query.category && !req.query.price && !req.query.minprice && !req.query.maxprice){
        findObj = { category : req.query.category };
    }
    else{
        findObj = {}
    }
    

    let result = await Product.find(findObj);
    res.send(result);
    }else{
        res.send({message : "Not Access"})
    }
})





routes.post("/", async(req, res)=>{
    let result = await Product.create(req.body);
    res.send({ success : true });
})


routes.delete("/:a", async(req, res)=>{
    let id = req.params.a;
    let result = await Product.deleteMany({_id :id});
    res.send(result);

})

routes.put("/:a", async(req, res)=>{
    let id = req.params.a;
    let result = await Product.updateMany({_id : id}, req.body);
    res.send(result)
})


module.exports = routes;