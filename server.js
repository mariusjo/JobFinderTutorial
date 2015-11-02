var express = require('express');
var app = express();

app.set("view engine", "jade");

var staticdir = __dirname + "\\public"

console.log("using " + staticdir);

app.use(express.static(staticdir));



var port = process.env.port || 1337;

app.get("/", function (req, res) {   
    res.render("index");
});

app.listen(port)

//var http = require('http');
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);