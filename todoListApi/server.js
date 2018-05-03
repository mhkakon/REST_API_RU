var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.port || 3000;
var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/todoDB");
var Task = require("./api/models/todoListModel.js");
var routes = require("./api/routes/todoListRoutes.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));

routes(app);

app.listen(port);

console.log("todo list REST API started on port : " + port);