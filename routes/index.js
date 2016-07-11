var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
	knex('team').select().then(function(data) {
		res.render('index', {
			title: 'Q2 Project Team',
			users: data
		});
	});
});

module.exports = router;
