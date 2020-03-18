var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const code = req.query.code
  console.log('closed poll ' + code);
  res.render('closed', { title: 'new Poll', code: code});
});

module.exports = router;
