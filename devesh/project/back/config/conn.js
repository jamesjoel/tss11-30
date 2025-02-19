require("mongoose")
  .connect("mongodb+srv://deveshtss11-30:devesh123@cluster0.xgpqp.mongodb.net/")
  .then(() => {
      console.log("CONNECTED");
  })
  .catch((err) => {
    console.log(" -------- NOT CONNECTED", err);
  });

// deveshtss11-30   (user name)
//    devesh123        (password)

// mongodb+srv://deveshtss11-30:<db_password>@cluster0.xgpqp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
