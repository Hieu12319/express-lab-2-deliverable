const express = require('express');
const app = express();
const PORT = 3000


app.get("/",(req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1>
        <a href="/98">Take one down and Pass it Around!<a>`
    )


});

  app.get("/:bottles",(req, res) =>{
 
     if (req.params.bottles == 0) {
        res.send(`<h2>0 bottles of beer on the wall</h2>
        <a href="/">Start over!<a>`)
  } else {

    res.send(`
        <h2>${req.params.bottles} bottles of beer</h2>

        <a href="/${req.params.bottles-1}">Take one down and Pass it Around!<a>

  `)
  }})


app.listen(PORT, () => {
    console.log(`we are listening on port ${PORT}`)
})