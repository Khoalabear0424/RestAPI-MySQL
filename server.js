var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

var path = require('path');
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "tvshows_db"
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// con.connect(function (err, result) {
// 	if (err) throw err;
// 	console.log("Connected!");
// });


//you won't see this because it'll serve index.html because of app.use(express.static("public"));
app.get('/', function (req, res) {
	res.send('blue sky');
});

app.get('/tvshows', function (req, res) {
	con.query('SELECT * FROM tvshows', function (error, results, fields) {
		if (error) res.send(error)
		else res.json(results);
	});
});

//THIS IS WHERE I NEED HELP!!
app.post('/', function (req, res) {
	con.query(`INSERT INTO tvshows (tvshow_name) VALUES ("${req.body.firstname}")`, function (error, results, fields) {
		if (error) res.send(error)
		else res.json(results);
	});
});

app.post('/endpoint', function (req, res) {
	console.log(req.body)
	var sqlstatement = con.query('INSERT INTO tvshows (tvshow_name) VALUES (?)', req.body.firstname, function (err, result) {
		/*
			You can also use this style
			var sqlstatement = con.query('INSERT INTO tvshows SET ?', { tvshow_name: req.body.firstname}, function(err,result){
			if you sync your input field names to your table column names you can even make it like
			 ... con.query('INSERT INTO tvshows SET ?', req.body, functio...
	
		*/
		if (err) return console.log(err)
		console.log(sqlstatement.sql)
		res.send("got it")
	})
});

app.listen(3001, function () {
	console.log('listening on 3001');
});












