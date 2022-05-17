// Set the variables of express and app
const express = require('express');
const app = express();
const eightBall = [
    "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

//Tell the server where to listen to the port
app.listen(3000);

//Make route to "/greeting" send message
app.get("/greeting", (req, res) => {
    res.send('Hello, stranger');
})

//Make route with "/greeting/:name" to have user input information
app.get("/greeting/:name", (req, res) => {
    res.send('Well hello, ' + req.params.name + "!" );
})

//Tip Calculator------ Route to "/tip"
app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send("Your total is $" + req.params.total +". You would like to tip " + req.params.tipPercentage + "%.  That means you would owe for tip: $" +  ((req.params.tipPercentage/100) * req.params.total))
})

//Magic 8 Ball
//Create link to "/magic"
app.get("/magic/:question", (req,res) => {
    res.send("You asked: " + req.params.question + `? <br> Your answer is: <h1> ` + eightBall[Math.floor(Math.random() * eightBall.length)] + ".</h1>")
})