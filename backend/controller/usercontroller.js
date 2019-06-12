const userModel = require('../models/UserData');
const bcrypt = require('bcrypt'); 
var conf = require('../config.js');
const jwt = require('jsonwebtoken');
const Secret_Key=conf.get('secretKey');

module.exports = {
 create: function(req, res, next) {
  
  userModel.create({ name: req.body.name, emailId: req.body.emailId, password: req.body.password, userType: req.body.userType }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "User added successfully!!!", data: null});
      
    });
 },
 
authenticate: function(req, res, next) {
  userModel.findOne({emailId:req.body.emailId}, function(err, userInfo){
     if (err) {
      next(err);
     } else {
if(bcrypt.compareSync(req.body.password, userInfo.password)) {
const token = jwt.sign({id: userInfo._id}, Secret_Key, { expiresIn: '1h' });
res.json({status:"success", message: "user found!!!", data:{user: userInfo, token:token}});
}else{
res.json({status:"error", message: "Invalid email/password!!!", data:null});
}
     }
    });
 },
}