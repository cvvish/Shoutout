var mongoose = require('mongoose');

var Schema=mongoose.Schema;

var investerDataSchema= new Schema(
{
   name : {type: String,required: true, min: 3,max: 100},
   emailId : {type: String,required: true, min: 3,max: 100},
   password : {type: String,required: true, min: 3,max: 100}
}
   );


const investorData = module.exports = mongoose.model('investerData',investerDataSchema);
