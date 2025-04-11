import express from 'express'
import cors from 'cors'
import allRoutes from './routes/allRoutes.js'
import upload from 'express-fileupload'
import Path from 'path'
let app = express();

app.use(express.static(Path.resolve()+"/assets"));

app.use(express.json())
app.use(express.urlencoded({extended : true}));
app.use(cors())
app.use(upload())

app.use(allRoutes)


app.listen(3000, ()=>{
    console.log("server running");
})