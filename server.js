var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

var path = require('path');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "march_madness_db"
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get('/stats.json', function (req, res) {
	con.query('SELECT * FROM mmstats_2017', function (error, results, fields) {
		if (error) res.send(error)
		else res.json(results);
	});
});

app.get('/stats-insert', (req, res) => {
	con.query('INSERT INTO mmstats_2017 (School, W, L) VALUES ((?),(?),(?))', [req.query.teamName, req.query.wins, req.query.losses], (error, results, fields) => {
		if (error) res.send(error)
		else res.redirect('/stats.json')
	})
	console.log(req.query.teamName);
});

// app.get('/stats-mostwins', function (req, res) {
// 	con.query('SELECT School, W, L FROM mmstats_2017 ORDER BY W DESC LIMIT 20;', function (error, results, fields) {
// 		if (error) res.send(error)
// 		else res.json(results);
// 	});
// });

// app.get('/stats-mostlosses', function (req, res) {
// 	con.query('SELECT School, W, L FROM mmstats_2017 ORDER BY L DESC LIMIT 20;', function (error, results, fields) {
// 		if (error) res.send(error)
// 		else res.json(results);
// 	});
// });

//THIS IS WHERE I NEED HELP!!
// app.post('/', function (req, res) {
// 	con.query(`INSERT INTO tvshows (tvshow_name) VALUES ("${req.body.firstname}")`, function (error, results, fields) {
// 		if (error) res.send(error)
// 		else res.json(results);
// 	});
// });

// app.post('/endpoint', function (req, res) {
// 	console.log("req.body" + req.body)
// 	var sqlstatement = con.query('INSERT INTO tvshows (tvshow_name) VALUES (?)', req.body.firstname, function (err, result) {
// 		if (err) return console.log(err)
// 		console.log("sqlstatement" + sqlstatement.sql)
// 		res.send("got it")
// 	})
// });

app.listen(3001, function () {
	console.log('listening on 3001');
});












		/*
			You can also use this style
			var sqlstatement = con.query('INSERT INTO tvshows SET ?', { tvshow_name: req.body.firstname}, function(err,result){
			if you sync your input field names to your table column names you can even make it like
			 ... con.query('INSERT INTO tvshows SET ?', req.body, functio...
	
		*/










