var express = require('express');
var app = express();

app.set("view engine", "jade");

var staticdir = __dirname + "/public"

app.use(express.static(staticdir));



var port = process.env.port || 1337;

app.get("/", function (req, res) {   
    res.render("index");
});

app.listen(port);