const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mysql = require('mysql');
let app = express();
let port = 8080;

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

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

		connection.query(`SELECT id, title, description, time, user_id FROM posts WHERE id=${req.params.id};`, function (err, post) {
			if (err) throw err;
			post = post[0]
			connection.query(`SELECT nickname, photo FROM users WHERE id=${post.user_id};`, function (err, user) {
				if (err) throw err;
				connection.query(`SELECT url FROM media WHERE post_id=${post.id};`, function (err, urls) {
					console.log(urls);
					urls.map(u => {
						console.log(u.url.url);
						return u.url;
					}
				)
					res.json({...post, userInfo: user[0], url: urls.map((u) => u.url)});
				});
			});
			//res.json(result);
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
		connection.query(`SELECT posts.id, title, category, url FROM posts left join media on media.post_id = posts.id;`, function (err, result) {
			if (err) throw err;
			res.json(result.map(post => { return {...post, url: [post.url]}}));
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
		const currentTimestamp = Date.now();
		connection.query(`INSERT INTO posts (title, description, category, timestamp, user_id) VALUES ("${req.body.title}","${req.body.description}", "${req.body.category}", "${currentTimestamp}", "${req.body.user_id}");`,
		(err, result) => {
			if (err) throw err;
					let mediaValues = req.body.url.map(u => `(${result.insertId}, "${u}")`);
					mediaValues = mediaValues.join(', ');
					console.log('HELOOOO', mediaValues);
					connection.query(`INSERT INTO media (post_id, url) VALUES ${mediaValues};`, (err, result) => {res.end()});
		});
	});
})


app.listen(port, () => console.log('App listening on port '+ port +'!'));
