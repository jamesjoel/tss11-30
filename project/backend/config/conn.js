require("mongoose")
.connect("mongodb+srv://jamessteppingstone:james123@cluster0.4g1gh.mongodb.net/")
.then(()=>{
    console.log("CONNECTED")
})
.catch((err)=>{
    console.log(" -------- NOT CONNECTED", err)

})


/*
    username : jamessteppingstone
    pass : james123


    mongodb+srv://jamessteppingstone:<db_password>@cluster0.4g1gh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

*/