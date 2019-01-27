// Import MySQL connection.
var connection = require("./connection");

// Object for all our SQL statement functions.
var orm = {
  all: function(cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(burger_name, cb) {
    console.log(burger_name);
    var queryString = `INSERT INTO  burgers(burger_name) VALUES('${burger_name}')`;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  update: function(id, cb) {
    var queryString = `UPDATE  burgers SET devoured=1 WHERE id= ${id}`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};

// Export the orm object for the model (cat.js).
module.exports = orm;
