let express = require("express");
let app = express();
let cors = require("cors");
let City = require("./cityModel");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/getcity/:s", async (req, res) => {
  let state = req.params.s;
  let result = await City.find({state:state});
  res.send(result)
  // res.send(result);
  
});

app.get("/getstate", async (req,res)=>{
  let result = await City.distinct("state")
  res.send(result)
})

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server running at port", port);
});
