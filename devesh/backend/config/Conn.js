require ("mongoose")
.connect("mongodb+srv://ankurjoshi:1991ankur@cluster0.cf4ov.mongodb.net/")
.then(()=>{
    console.log("CONNECTED");
})
.catch((err)=>{
    console.log("********NOTCONNECTED",err);
})









/*
user name :  ankurjoshi
password  :  1991ankur
// mongodb+srv://ankurjoshi:<db_password>@cluster0.cf4ov.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


*/