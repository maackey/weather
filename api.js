var express = require("express");

var api = express.Router();

var token = "secret";

api.get("/test", function(req, res) {
	var response = "test";
	res.json(response);
});

// allow this file to be requireable
module.exports = api;