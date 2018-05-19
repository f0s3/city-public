const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mysql = require('mysql');
let app = express();
let port = 8080;

app.use(morgan('combined'));
app.use(cors());


let doSelect = (db) => {

};

app.get('/posts/:id', (req, res) => {
	let connection = mysql.createConnection({
		host: "localhost",
		user: "modelProvider",
		password: "qwerty",
		database: 'Cherkasy'
	});

	connection.connect((err) => {
		if (err) throw err;
		console.log("Connected!");
		connection.query(`SELECT post_id, title, description, url, time FROM posts, media WHERE post_id=${req.params.id};`, function (err, result) {
			if (err) throw err;
			res.json(result);
		});
	});
});

app.get('/posts', (req, res) => {
	let connection = mysql.createConnection({
		host: "localhost",
		user: "modelProvider",
		password: "qwerty",
		database: 'Cherkasy'
	});

	connection.connect((err) => {
		if (err) throw err;
		console.log("Connected!");
		connection.query("SELECT post_id, title, description, url, time, category FROM posts, media;", function (err, result) {
			if (err) throw err;
			res.json(result);
		});
	});
})

app.post('/posts', (req, res) => {
	console.log(req.body);
	let connection = mysql.createConnection({
		host: "localhost",
		user: "modelProvider",
		password: "qwerty",
		database: 'Cherkasy'
	});

	connection.connect((err) => {
		if (err) throw err;
		console.log("Connected!");
		// connection.query(`INSERT INTO posts, media (title, description, url) VALUES ("TITLE2", "long description test2", "https://image.freepik.com/free-photo/hrc-siberian-tiger-2-jpg_21253111.jpg");`, function (err, result) {
		// 	if (err) throw err;
		// 	res.json(result);
		// });
	});
})

app.post('/posts/:id', (req, res) => {

})


app.listen(port, () => console.log('App listening on port '+ port +'!'));
