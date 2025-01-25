let express = require("express")
let app = express()
let cors = require("cors");
let City = require("./cityModel");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/getcity", async (req, res) => {
  let result = await City.find();
  res.send(result);
});

// app.get("/", (req,res)=>{
//     res.send("Hello")
// })

app.listen(3000, ()=>{
    console.log("server running at 3000");
    
})