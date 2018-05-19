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
		connection.query("SELECT * FROM posts;", function (err, result) {
			if (err) throw err;
			res.json(result);
		});
	});

})

app.listen(port, () => console.log('App listening on port '+ port +'!'));
