var express = require("express");
var app = express();
var path = require("path");
const blogService = require('./blog-service');

var HTTP_PORT = process.env.PORT || 8080;

// call this function after the http server starts listening for requests
function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
}

app.use(express.static("public"));
// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function (req, res) {
  res.redirect("/about");
});

app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/views/about.html");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);