const express = require("express");
const app = express();

// middleware for getting data from client
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use("/api/v1", require("./allRoutes/AllRoutes"))







const port  = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Server Running With PORT ", port);
})