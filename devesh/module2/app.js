let express = require("express");

let app = express();

app.get("/about", (req, resp) => {
  console.log("######");

  resp.send("welcome");
});


  app.get("/contact", (req , resp) => {

    resp.send("")

  })

app.listen(1403);
