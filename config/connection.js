// Set up MySQL connection.
var mysql = require("mysql");

var connection;
// If the server contains the JAWSDB_URLenvironmental variable, it connects to the JawsDB database.
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  // If the server lacks the variable, it falls back on an explicitly defined local database.
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "pho12345",
    database: "burger_db",
  });
}

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
