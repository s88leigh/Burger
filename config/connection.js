const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Sophie8899",
  database: "burgers_db",
  port: 3306
});

connection.connect(function(err) {
  if (err) {
    console.log("error");
    return;
  }
});

// Setting up connection.query to use promises instead of callbacks
// This allows us to use the async/await syntax
connection.query = util.promisify(connection.query);

module.exports = connection;
