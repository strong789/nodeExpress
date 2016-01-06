var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/users', function(req, res, next) {
	console.log("dasdas");
  res.render('users', { title: '用户页' });
});
module.exports = router;
