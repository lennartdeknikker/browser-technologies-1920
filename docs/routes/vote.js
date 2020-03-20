var express = require('express');
var router = express.Router();

const mongo = require('../mongo');
const Poll = require('../pollmodel')

/* GET home page. */
router.get('/', function(req, res, next) {
  const vote = req.query.answer;
  const code = req.query.code;
  
  const onConnect = async function() {
    const query = { code: code, open: true };
    const poll = await Poll.findOneAndUpdate(query, { 
        $inc: {
          [`answer${vote}.votes`]: 1
        }
      }, {new:true}, function(err) {
        if (err) return console.error(err); else {
        }
      }
    )
    
    if (poll) {
      res.redirect(`/results?code=${code}&voted=${vote}`)
    } else {
      res.render('error', {message: 'this poll is closed'})
    }
  }

  mongo(onConnect)
  

});

module.exports = router;
