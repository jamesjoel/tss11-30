const DBNAME = "tss11_30";
const CONNECTION_URL = `mongodb://0.0.0.0:27017/${DBNAME}`;
require("mongoose")
.connect(CONNECTION_URL)
.then(()=>{
    console.log("CONNECTED")
})
.catch((err)=>{
    console.log("*********** NOT CONNECTED", err)
})




