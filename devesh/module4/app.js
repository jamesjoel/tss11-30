

const express = require("express");
const app = express();

app.use("/api/v1", require("./AllRoutes/AllRoutes"));

app.use("*" , (req,res) => {
    res.send({ message : "This Route not found"});
});

const port = process.env.PORT || 3000 ;
app.listen(port , () => {
    console.log("Server Running with Port", port);
});