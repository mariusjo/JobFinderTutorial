var express = require('express');
var mongoose = require('mongoose');
var jobController = require('./controllers/JobController.js')
var app = express();

app.set("view engine", "jade");

var staticdir = __dirname + "/public"

app.use(express.static(staticdir));

var port = process.env.port || 1337;

app.get("/api/jobs", function (req, res) {   
    res.send("testingtesting");
});

app.get("*", function (req, res) {   
    res.render("index");
});

mongoose.connect('mongodb://localhost/jobfindertutorial');

var con = mongoose.connection;

con.once('open', function () {
    console.log("Successfully connnected to mongodb!");
    jobController.seedJobs(function (err) {
        if (err) {
            //TODO
            console.log("Seeding the db failed");
        }
        
    });
});




app.listen(port);