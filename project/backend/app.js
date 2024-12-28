const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(require("./allRouter/AllRoutes"));

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running with port ", port);
})