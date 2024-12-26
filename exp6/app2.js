let express = require("express");
let app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.get("/about", (req, res)=>{
    console.log(req.query);
})
app.post("/about", (req, res)=>{
    console.log(req.body);
})


let port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running with port ", port);
})