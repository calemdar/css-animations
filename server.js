// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

app.use(express.static('public'));


app.get('/', function(request, response) {
    response.sendFile(__dirname + '/public/views/index.html');
});

app.get('/government', function(request, response) {
    response.sendFile(__dirname + '/public/views/gov.html');
});

app.get('/healthcare', function(request, response) {
    response.sendFile(__dirname + '/public/views/healthcare.html');
});

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, function() {
    console.log('Your app is listening on port ' + listener.address().port);
});