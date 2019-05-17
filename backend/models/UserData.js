var mongoose = require('mongoose');

var Schema=mongoose.Schema;

var userdataSchema= new Schema(
{
   name : {type: String,required: true, min: 3,max: 100},
   emailId : {type: String,required: true, min: 3,max: 100},
   password : {type: String,required: true, min: 3,max: 100}
}
   );


const userData = module.exports = mongoose.model('userData',userdataSchema);
