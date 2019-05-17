var express = require('express');
var router = express.Router();
const RateLimit = require('express-rate-limit');
const mongoose = require('mongoose');

const userData = require('../models/UserData');

const minutes = 5;
const postLimiter = new RateLimit({
  windowMs: minutes * 60 * 1000, // milliseconds
  max: 100, // Limit each IP to 100 requests per windowMs
  delayMs: 0, // Disable delaying - full speed until the max limit is reached
  handler: (req, res) => {
    res.status(429).json({ success: false, msg: `You made too many requests. Please try again after ${minutes} minutes.` });
  }
});
router.post('/', function(req, res, next) {
  let newUser = new userData({
     name: "vidhya",
     emailId: "vidhya.vijay94@gmail.com",
     password: "password123"
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
         // Show failed if all else fails for some reasons
         res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
       }
     });
console.log(result);
});

module.exports = router;
