var express = require('express');
var router = express.Router();
const RateLimit = require('express-rate-limit');
const bcrypt = require('bcrypt');
const userData = require('../models/UserData');
const jwt = require('jsonwebtoken');
const minutes = 5;
const postLimiter = new RateLimit({
  windowMs: minutes * 60 * 1000,
  max: 100,
  delayMs: 0,
  handler: (req, res) => {
    res.status(429).json({ success: false, msg: `You made too many requests. Please try again after ${minutes} minutes.` });
  }
});


router.post('/', function(req, res) {
         const newUser = new userData({
            name:req.body.name,
            emailId: req.body.emailId,
            password: hash
         });
         newUser.save().then(function(result) {
            console.log(result);
            res.status(200).json({
               success: 'New user has been created'
            });   
         }).catch(error => {
            console.log("i am here");
            res.status(500).json({
               error: err
            });
         });
      
   });



router.post('/signin', function(req, res){
   userData.findOne({emailId: req.body.emailId})
   .exec()
   .then(function(newUser) {
      bcrypt.compare(req.body.password, newUser.password, function(err, result){
         if(err) {
            return res.status(401).json({
               failed: 'Unauthorized Access'
            });
         }
         if(result) {
            return res.status(200).json({
               success: 'Welcome to the JWT Auth'
            });
         }
         return res.status(401).json({
            failed: 'Unauthorized Access'
         });
      });
   })
   .catch(error => {
      res.status(500).json({
         error: error
      });
   });;
});
//Controller to get all data from Database
//SELECT all
router.get('/getData', (req, res) => {
  userData.find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
    });
})


module.exports = router;
