const routes = require("express").Router();
const path = require('path');

routes.post('/', async(req, res)=>{
    // console.log('-------Body',req.body);
    // console.log('-------Params',req.params);
    // console.log('-------Headers',req.headers);
    // console.log('-------Files',req.files);

    let file = req.files.myfile ;
    file.mv(path.resolve() + "/assets/demo/" + file.name ,(err)=>{
        if(err)console.log(err);
        console.log('file uploaded')
    }
)
})

module.exports = routes;