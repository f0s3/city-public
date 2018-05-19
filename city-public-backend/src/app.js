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
		connection.query("SELECT posts.id, title, description, url, time, category FROM posts, media;", function (err, result) {
			if (err) throw err;
			//let response = JSON.stringify(result);
			console.log(result[0].url);
			result[0].url = result[0].url.split(',');
			res.json(result);
			console.log(result);
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
		connection.query(`INSERT INTO posts (title, description, category, timestamp) VALUES ("${req.body[0].title}","${req.body[0].description}", "${req.body[0].category}", "${currentTimestamp}");`,
		(err, result) => {
			if (err) throw err;
			connection.query(`SELECT id from posts where timestamp=${currentTimestamp}`, (error, results) => {
					console.log('Cool!', results[0].id);

					connection.query(`INSERT INTO media (post_id, url) VALUES ("${results[0].id}", "${req.body[0].url}");`, (err, result) => {res.end()});
			})
		})
		// new Promise((resolve, reject) => {
		// 	console.log('Indasdaw')
		// 	connection.query(`INSERT INTO posts (title, description, url, time, category, timestamp)
		// 	 VALUES ("${req.body.title}","${req.body.description}","${req.body.url}", "${currentTimestamp}", "${req.body.category}", "${currentTimestamp}");`, (err, res) => {
		// 		resolve();
		// 	})
		// }).then(() => {
		// 	connection.query(`SELECT * FROM posts;`, (err, result) => {
		// 		console.log(result);
		// 		res.end();
		// 	})
		// });
		// connection.query(
		// 	`INSERT INTO posts (title, description, url, time, category, timestamp)
		// 	 VALUES ("${req.body.title}","${req.body.description}","${req.body.url}", "${currentTimestamp}", "${r`INSERT INTO posts (title, description, url, time, category, timestamp)
		// 	 VALUES ("${req.body.title}","${req.body.description}","${req.body.url}", "${currentTimestamp}", "${req.body.category}", "${currentTimestamp}");`eq.body.category}", "${currentTimestamp}");`, (err, result) => {
		// 		 connection.query(`SELECT id FROM posts WHERE timestamp="${currentTimestamp}";`, (err, result) => {
		// 			 console.log(result);
		// 			 connection.query(`INSERT INTO media (post_id) VALUES ("${result.id}");`, function (err, result1) {
		// 			if (err) throw err;
		// 			res.end();
		// 		});
		// 	})
		// });
	});
})


app.listen(port, () => console.log('App listening on port '+ port +'!'));
