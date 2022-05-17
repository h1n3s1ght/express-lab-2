// Set the variables of express and app
const express = require('express');
const app = express();

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