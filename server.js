const express = require("express");
const app = express();

const port = 3000;

app.get("/greeting", (req,res)=>{
    res.send("Hello, Stranger")
})

app.get("/greeting/:name", (req,res)=> {
    res.send("whats up" + " " + (req.params.name))
})







app.listen(port, () => {
    console.log("Express is listening on port: ", port);
  });