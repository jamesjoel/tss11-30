let mongoose = require("mongoose");
mongoose
.connect("mongodb://0.0.0.0:27017/tss11_30")
.then(()=>{
    console.log("CONNECTED")
})
.catch(()=>{
    console.log(" ************ NOT CONNECTED")
})


