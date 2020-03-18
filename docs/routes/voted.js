var express = require('express');
var router = express.Router();

const mongo = require('../mongo');
const Poll = require('../pollmodel')

/* GET home page. */
router.get('/', function(req, res, next) {  
  res.render('voted', {title: 'voted'})

});

module.exports = router;
