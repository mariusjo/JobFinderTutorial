(function (jobController) {
    var JobModel = require('../models/job').Job;

    jobController.seedJobs = function (next) {
        JobModel.find({}).exec(function (err, collection) {
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