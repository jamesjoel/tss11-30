const express = require("express");
const app = express();
const cors = require("cors");
const upload = require("express-fileupload");

app.use(cors());
app.use(upload());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(require("./allRoutes/AllRoutes"));
app.use(express.static(__dirname + "/assets"));

const port = process.env.PORT ||  3000  ;
app.listen(port, () => {
    console.log("Server Running With Port",port);
})