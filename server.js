
// dependencies
var express = require("express"); // api routing, server responses
var parser = require("body-parser"); // parse data from requests

// initialize app
var app, server, port = 8080;
app = express();
app.use(express.static('./')); // handles serving static files TODO: move to public directory
app.use(parser.json()); // handles parsing of the request body

// routing

// --pages
app.get("/", function(req, res) {
	res.sendFile(__dirname + "index.html");
});

// --api
app.use("/api/", require("./api.js"));

// start server
server = app.listen(port, function() {
	console.log("server is listening at http://%s:%s", "localhost", port)
});
