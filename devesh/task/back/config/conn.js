require("mongoose")
.connect("mongodb+srv://jamessteppingstone:james123@cluster0.4g1gh.mongodb.net/")
.then(()=>{
    console.log("CONNECTED")
})
.catch((err)=>{
    console.log(" -------- NOT CONNECTED", err)

})