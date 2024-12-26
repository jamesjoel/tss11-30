import express from "express";
const app = express()
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Server running at port:",port);
    
})
app.use("/" , (req, res)=>{
    // res.send("welcome")
})