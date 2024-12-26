let express = require("express");
let app = express();
// now we have to write "ROUTING Code"
// http://localhost:3000/about
app.get("/about", (req, res)=>{
    res.send("Welcome");
});

app.get("/contact", (req, res)=>{
    res.send("This is Contact Page")
})

app.get("/", (req, res)=>{
    res.send("<h1>This is Home Page</h1>")

})

app.listen(3000, ()=>{
    console.log("Server Running with port 3000");
});
