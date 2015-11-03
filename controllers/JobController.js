(function (jobController) {
    var jobModel = require('../models/job').Job;
    
    jobController.init = function (app) {
        
        jobController.seedJobs(function (err) {
        if (err) {
            //TODO
            console.log("Seeding the db failed");
        }
        
    });
        
        
        
        app.get("/api/jobs", function (req, res) {
            jobModel.find({}).lean().exec(function (err, jobs) {
                if (err) {
                    res.status(500).send("Server encountered an error");
                } else {
                    console.log(jobs);
                    res.json(jobs);
                }
               
            });    
        });
        
        
            
    };
    
    
    jobController.seedJobs = function (next) {
        jobModel.find({}).exec(function (err, collection) {
            if (err) {
                next(err);
            } if (collection.length === 0) {
                JobModel.create({
                    title: "Programmer",
                    description: "You will drink buckets of coffee"
                },
            {
                    title: "Pilot",
                    description: "You will be flying a plane"
                },
            {
                    title: "Car Mechanic",
                    description: "You will get greasy"
                },
            {
                    title: "Roadie",
                    description: "You will turn all the buttons to 11"
                },
            {
                    title: "Architect",
                    description: "Your name is Art Vandeley"
                },
            {
                    title: "Teacher",
                    description: "You must unlearn everything you know about technologi"
                });
            }
            
            
        });
    };

})(module.exports);