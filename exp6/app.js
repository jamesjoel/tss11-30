let express = require("express");
let app = express();


app.use(express.json());
app.use(express.urlencoded({extended : true}));



app.use("/api/v1", require("./AllRoutes/AllRoutes"))


let port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running with port ", port);
})