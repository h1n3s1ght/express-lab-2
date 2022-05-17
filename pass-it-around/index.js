// Set the variables of express and app
const express = require('express');
const app = express();
let bottles = 100;
let PORT = 3000;

//set up active link
app.listen(PORT);

//Set up homepage
app.get("/", (req,res) => {
  bottles--;
    res.send(`<h1>` + bottles + ` Bottles of beer on the wall</h1> <br> <br> <a href='localhost:3000/`+ (bottles-1) +`' style="text-decoration: none">Take one down, pass it around!</a>` )
})

app.get("/:bottles", (req, res) => {
    req.params.bottles = bottles--;
    res.send(`<h1>` + req.params.bottles + ` Bottles of beer on the wall</h1> <br> <br> <a href='localhost:3000/`+ (bottles-1) +`' style="text-decoration: none">Take one down, pass it around!</a>` );
})