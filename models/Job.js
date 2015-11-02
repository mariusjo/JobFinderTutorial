(function (Job) {
    var mongoose = require('mongoose');
    
    var JobSchema = new mongoose.Schema({
        title: {
            type: String,
            index: true
        }, description: {
            type: String,
            index: true
        }
    });

    Job.Job = mongoose.model('Job', JobSchema);
    
    
    
     
    

    
    
           
})(module.exports);
