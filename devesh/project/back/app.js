 let express = require("express");
 let app = express();
 let cors = require("cors")
 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/v1", require("./Allroutes/Allroutes"));


const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log("server running with port ", port);
})
