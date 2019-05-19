var express = require('express');
var router = express.Router();
const RateLimit = require('express-rate-limit');
const mongoose = require('mongoose');

const userData = require('../models/UserData');

const minutes = 5;
const postLimiter = new RateLimit({
  windowMs: minutes * 60 * 1000,
  max: 100,
  delayMs: 0, 
  handler: (req, res) => {
    res.status(429).json({ success: false, msg: `You made too many requests. Please try again after ${minutes} minutes.` });
  }
});
//Controller to insert data into the database
//INSERT into
router.post('/', function(req, res, next) {
  let newUser = new userData({
     name: req.body.name,
     emailId: req.body.emailId,
     password: req.body.password
   });
   newUser.save()
     .then((result) => {
       res.json({
         success: true,
         msg: `Successfully added!`,
         result: {
           _id: result._id,
           name: result.name,
           emailId: result.emailId,
           password: result.password
         }
       });
     })
     .catch((err) => {
       if (err.errors) {
         if (err.errors.name) {
           res.status(400).json({ success: false, msg: err.errors.name.message });
           return;
         }
         if (err.errors.email) {
           res.status(400).json({ success: false, msg: err.errors.emailId.message });
           return;
         }
         if (err.errors.age) {
           res.status(400).json({ success: false, msg: err.errors.password.message });
           return;
         }
         res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
       }
     });
console.log(result);
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
