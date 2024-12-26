const express = require("express");
const app = express();


app.use("/api/v1", require("./AllRoutes/AllRoutes"));


app.get("*", (req, res)=>{
    res.send({ message : "This Route Not Found"});
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Server Running With Port ", port);
})