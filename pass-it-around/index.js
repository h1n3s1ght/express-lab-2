// Set the variables of express and app
const express = require('express');
const app = express();
let bottles = 100;
let PORT = 3002;

//set up active link
app.listen(PORT);

// //Set up homepage
// app.get("/", (req,res) => {
//   bottles-1;
//     res.send(`<h1>` + bottles + ` Bottles of beer on the wall</h1> <br> <br> <a href='localhost:3000/`+ (bottles-1) +`' style="text-decoration: none">Take one down, pass it around!</a>` )
// })

app.get("/:number_of_bottles", (req, res) => {
    if (req.params.number_of_bottles > 0){
    console.log(req.params.number_of_bottles);
    res.send(`<html>
    <head>
    <style>
    a {
        color: black;
        font-size: 1.5em;
    }

    a:hover {
        color: white;
        background-color: black;
    }
    </style>
    </head>

    <body>
    <h1><strong>` + req.params.number_of_bottles + `</strong> Bottles of beers in the <strong>FRIDGE</strong> ...because why would they be on the wall?  Do you like warm beer?</h1> <br> <br> <a class="justWork" href='http://localhost:3000/`+ (req.params.number_of_bottles - 1 ) +`' style="text-decoration: none">Take one out, pass it around!</a> 
    </body>
    </html>`);
}
else {
    res.send(`<html>
    <head>
    <style>
    a {
        color: black;
        font-size: 1.5em;
    }

    a:hover {
        color: white;
        background-color: black;
    }
    </style>
    </head>
    <body>
    <h1><strong>` + req.params.number_of_bottles + `</strong> Bottles of beers in the <strong>FRIDGE</strong> ...because you drank them all!</h1> <br> <br> <a class="justWork" href='http://localhost:3000/`+ 100 +`' style="text-decoration: none">Refill the beer here.</a> 
    </body>
    </html>`);
}
})