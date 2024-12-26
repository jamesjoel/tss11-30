let express = require("express");
let app = express();

app.use("/api/v1", require("./AllAPIs"));

const port = process.env.PORT || 3000; 
app.listen(port, ()=>{
    console.log("server running with port ", port);
})