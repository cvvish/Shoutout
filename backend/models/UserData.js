var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds=10;

var Schema=mongoose.Schema;

var userdataSchema= new Schema(
{
   name : {type: String,required: true, min: 3,max: 100},
   emailId : {type: String,required: true, min: 3,max: 100},
   password : {type: String,required: true, min: 3,max: 100},
   userType : {type: String,required: true,enum :['Investor','Investment_Seeker']}
}
);

userdataSchema.pre('save',function(next){

   this.password=bcrypt.hashSync(this.password,saltRounds);
   next();
});

userdataSchema.post('save', async function postSave(doc) { 
   console.log(`New user created: ${doc.name}`) 
})
const userData = module.exports = mongoose.model('userData',userdataSchema);
