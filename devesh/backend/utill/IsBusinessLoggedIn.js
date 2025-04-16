let jwt = require("jsonwebtoken");

let IsBusinessLoggedIn = (req, res, next)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let obj = jwt.decode(token, "hello");
        if(obj){
            req.obj = obj;
            next();
        }else{
            res.send({success : false});
            return;
        }
    }else{
        res.send({success : false});
        return;
    }
}

module.exports = IsBusinessLoggedIn;