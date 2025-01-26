let express = require("express");
let app = express();




 app.get ("/", (req , resp) => {

     let hello = [
       { name : "ankur",
            age : "25" 

        },

        { name : "rohit",
            age : "22"

        },

        { name : "amit",
            age : "26"

        }
     ]

    resp.send(hello)
 })


const port = process.env.PORT || 3000;

app.listen (3000,()=> {
     console.log("server running");
})