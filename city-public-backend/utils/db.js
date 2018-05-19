var mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "modelProvider",
  password: "qwerty",
  database: "Cherkasy"
});
connection.connect();
module.exports = connection;
//
// connection.connect((err) => {
//   if (err) throw err;
//   console.log("Connected!");
//   connection.query("SELECT * FROM posts;", function (err, result) {
//     if (err) throw err;
//     console.log('db test ',result);
//   });
// });
