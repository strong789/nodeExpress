var express = require('express');
var router = express.Router();

/* GET home page. */
var routerInit = function(app){
	app.get('/', function(req, res) {
		res.render('index', { title: '首页' });
	});
	app.get('/index', function(req, res) {
	  res.render('index', { title: '首页' });
	});
};
module.exports = routerInit;
