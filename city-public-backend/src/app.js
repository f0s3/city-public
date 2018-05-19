const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
let app = express();
let port = 8080;

app.use(morgan('combined'));

app.get('/posts', (req, res) =>
		res.send({
			posts:[
				{
					user: {
						id: 429,
						nickname:"test123nickname",
						photo:"user_photo_url"
					},
					title: "TITLE",
					description: "long text that is our description and this is basic hello world from backend side!",
					media:[{type:"VIDEO", url:"url1"}, {type:"VIDEO", url:"url1"}],
					time: Date.now()
				},
				{
					user: {
						id: 429,
						nickname:"test123nickname",
						photo:"user_photo_url"
					},
					title: "TITLE",
					description: "long text that is our description and this is basic hello world from backend side!",
					media:[{type:"VIDEO", url:"url1"}, {type:"VIDEO", url:"url1"}],
					time: Date.now()
				}
			]
		})
	);
// app.post('/', (req, res) => {
// 	res.send({
// 		body:data
// 	});
// });
app.listen(port, () => console.log('App listening on port '+ port +'!'));
