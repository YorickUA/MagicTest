// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TaskSchema = new Schema({
  text:{
    type:String,
    required:true
  },
  done: {
    type:Boolean,
    required:true
  }
});

mongoose.model('Task', TaskSchema);
