const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(require("./allRouter/AllRoutes"));

const port = process.env.PORT || 3000;


let start = async()=>{
    await app.listen(port);
    console.log("server running with port ", port);
}

start();