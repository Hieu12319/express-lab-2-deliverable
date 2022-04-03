const express = require("express");
const app = express();

const port = 3000;

app.get("/greeting", (req,res)=>{
    res.send("Hello, Stranger")
})

app.get("/greeting/:name", (req,res)=> {
    res.send("whats up" + " " + (req.params.name))
})

app.get("/tip/:total/:tipPercentage",(req,res)=> {
    res.send(`your tip is ${(parseInt(req.params.total) * parseInt(req.params.tipPercentage) /100)}`)
})
    



app.listen(port, () => {
    console.log("Express is listening on port: ", port);
  });