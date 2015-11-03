//controllers/index.js
(function (controllers) {
    var jobController = require('./JobController.js');
    
    controllers.init = function (app) {
        jobController.init(app);
    };
    
})(module.exports);