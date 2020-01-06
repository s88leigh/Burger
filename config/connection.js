const util = require("util");
const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db",
    port: 3306
  });
}

connection.connect(function (err) {
  if (err) {
    console.log("error");
    return;
  }
});

// Setting up connection.query to use promises instead of callbacks
// This allows us to use the async/await syntax
connection.query = util.promisify(connection.query);

module.exports = connection;
