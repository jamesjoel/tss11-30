const express = require("express");
const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use("/api/v1/student", (require("./controllers/StudentController")));
app.use("/api/v1/teacher", (require("./controllers/TeacherController")));

app.listen(3000, ()=>{
    console.log("server")
})