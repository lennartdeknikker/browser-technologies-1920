var express = require('express');
var router = express.Router();

const mongo = require('../mongo');
const Poll = require('../pollmodel')

router.get('/', function(req, res, next) {
  const code = req.query.code
  const voted = req.query.voted
  const onConnect = function() {
    console.log(code)
    console.log(code)
    console.log(code)
    Poll.findOne({ code: code }, function (err, poll) {
      console.log(poll)
      res.render('results', {
        voted: voted,
        title: `Results for poll ${code}`,
        code: poll.code,
        statement: poll.statement,
        answer1: poll.answer1.value,
        votes1: poll.answer1.votes,
        answer2: poll.answer2.value,
        votes2: poll.answer2.votes,
        answer3: poll.answer3.value,
        votes3: poll.answer3.votes,
        refreshUrl: `${process.env.BASE_URL}/results?code=${code}&voted=${voted}`
      });
    });
  }
  mongo(onConnect)

});

module.exports = router;
