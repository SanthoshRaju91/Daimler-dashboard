var xlsxj = require("xlsx-to-json");
var mongoose = require('mongoose');
var dbPopulator = require('mongo-db-populator');
var logger = require('./utils/loggerUtil.js').logger;
var config = require('./config.js').config;
//connecting to mongodb
mongoose.connect(config.mongoURL, function(err){
    if(err) logger.error("Error in connecting to mongo DB"); 
    else logger.info("Connected to MongoDB");
}); 

var Schema = mongoose.Schema;
var supportSchema = new Schema({
    month: {
        type: String,
        required: true
    },
    opened: {
        type: Number,
        required: true
    },
    resolved: {
        type: Number,
        required: true
    },
    pending: {
        type: Number,
        required: true
    }
});

var Support = mongoose.model("Support", supportSchema);


//Parsing the given excel file
xlsxj({
    input: "ticket_Status.xlsx", 
    output: "output.json"
  }, function(err, result) {
    if(err) {
      console.error(err);
    }else {
        logger.info("Date parsed " + JSON.stringify(result));
        loadDataToMongo(result);
    }
  });

//loading json to mongodb
function loadDataToMongo(jsonArray) {
    for(var i=0; i< jsonArray.length; i++) {        
        var support = new Support({month: jsonArray[i].Month, opened: jsonArray[i].Opened, resolved: jsonArray[i].Resolved, pending: jsonArray[i].Pending });    
        support.save(function(err) {
            if(err) {
                logger.error("Error in inserting " + err);
            }
            else {                
                logger.info("Inserted successfully");
            }
        });   
    }    
}