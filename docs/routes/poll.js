var express = require('express');
var router = express.Router();

const mongo = require('../mongo');
const Poll = require('../pollmodel')

/* GET home page. */
router.get('/', function(req, res, next) {
  const code = req.query.code;
  
  const onConnect = function() {
    Poll.findOne({ code: code }, function (err, poll) {
      res.render('poll', { 
        title: `Poll ${code}`,
        code: poll.code,
        statement: poll.statement,
        answer1: poll.answer1.value,
        answer2: poll.answer2.value,
        answer3: poll.answer3.value
      });
    });
  }

  mongo(onConnect)

});

module.exports = router;
