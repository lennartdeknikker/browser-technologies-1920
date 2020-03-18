var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  const statement = req.body.statement
  const code = 315;
  const pollUrl = `${process.env.BASE_URL}/poll?code=${code}`
  res.render('created', { title: 'Poll created', code: code, statement: statement, pollUrl: pollUrl});
});

module.exports = router;
