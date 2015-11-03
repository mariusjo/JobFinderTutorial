var express = require('express');
var mongoose = require('mongoose');
var controllers = require('./controllers/index.js');
var app = express();

app.set("view engine", "jade");

var staticdir = __dirname + "/public"

app.use(express.static(staticdir));

var port = process.env.port || 1337;



app.get("/", function (req, res) {   
    res.render("index");
});

controllers.init(app);

mongoose.connect('mongodb://localhost/jobfindertutorial');

var con = mongoose.connection;

con.once('open', function () {
    console.log("Successfully connnected to mongodb!");
});




app.listen(port);