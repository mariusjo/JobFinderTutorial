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

var dbConnectionString = 'testingtesting:testingtesting@ds043971.mongolab.com:43971/jobfinder';
//var dbConnectionString = 'mongodb://localhost/jobfindertutorial';

mongoose.connect(dbConnectionString);

var con = mongoose.connection;

con.once('open', function () {
    console.log("Successfully connnected to mongodb!");
});




app.listen(port);