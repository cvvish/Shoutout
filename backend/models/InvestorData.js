var mongoose = require('mongoose');

var Schema=mongoose.Schema;

var investerDataSchema= new Schema(
{
   firstName : {type: String,required: true, min: 3,max: 100},
   lastName : {type: String,required: true, min: 3,max: 100},
   workEmail : {type: String, required:true},
   linkedInProfile : {type: String,required: true,match: /^www/},
   domainInterested : {type:String,required: true,enum:['Games','Fintech','E-Commerce']},
}
   );

const investorData = module.exports = mongoose.model('investerData',investerDataSchema);
