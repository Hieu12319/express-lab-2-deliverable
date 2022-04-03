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

const mag = [
    "It is certain", 
    "It is decidedly so",
     "Without a doubt", 
     "Yes definitely",
     "You may rely on it", 
     "As I see it yes", 
     "Most likely",
      "Outlook good",
      "Yes", 
      "Signs point to yes",
       "Reply hazy try again",
        "Ask again later",
        "Better not tell you now",
         "Cannot predict now", 
         "Concentrate and ask again",
         "Don't count on it", 
         "My reply is no", 
         "My sources say no",
         "Outlook not so good",
         "Very doubtful"];

app.get("/magic/:question", (req,res)=> {
    for (i = 0; i, mag.length; i++) {
    res.send(`<h1>${req.params.question}</h1> </br> <h1>${mag[i]}</h1>`)
}});


app.listen(port, () => {
    console.log("Express is listening on port: ", port);
  });