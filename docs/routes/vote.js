var express = require('express');
var router = express.Router();

const mongo = require('../mongo');
const Poll = require('../pollmodel')

/* GET home page. */
router.get('/', function(req, res, next) {
  const vote = req.query.answer;
  const code = req.query.code;
  console.log(code);
  
  const onConnect = function() {
    console.log('connected')
    const query = { code: code };
    Poll.findOneAndUpdate(query, { 
        $inc: {
          [`answer${vote}.votes`]: 1
        }
      }, {new:true}, function(err) {
        if (err) return console.error(err); else {
          console.log(`updated`)
        }
      }
    )

  }

  mongo(onConnect)
  res.redirect(`/results?code=${code}&voted=${vote}`)

});

module.exports = router;
