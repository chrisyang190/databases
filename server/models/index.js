var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      db.connect();
      db.query('SELECT * FROM messages', function(err, rows) {
        if (err) {
          throw err;
        } else {
          console.log('FUCK YEAH');
          console.log(rows);
          return rows;
        }
      });

      db.end();
    }, // a function which produces all the messages
    post: function (data) {
      // var parsed = JSON.parse(jsonObj);
      // {text: ... , username, roomname}
      // console.log(parsed);
      db.connect();
      // db.query('INSERT INTO message SET ?', obj, function(err, res) {
      db.query('INSERT INTO messages (text) VALUES (' + data.message + ')', function(err, res) {
        if (err) {
          throw err;
        }
        console.log('FUCK YEAH');
        // done();
        console.log('Last insert ID:', res.insertId);
        return res;
      });
      db.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      console.log('test');
      db.query('SELECT * FROM users', function(err, rows) {
        if (err) {
          throw err;
        } else {
          console.log('WUT?');
          return rows;
        }
      });
    },
    post: function (data, callback) {
      // var parsed = JSON.parse(jsonObj);
      // {text: ... , username, roomname}
      // console.log(parsed);
      db.connect();
      // db.query('INSERT INTO users SET ?', obj, function(err, res) {
      db.query('INSERT INTO users (name) VALUES(' + data.username + ')', function(err, res) {
        if (err) {
          throw err;
        }
        console.log('FUCK YEAH');
        console.log('Last insert ID:', res.insertId);
        return res;
        // done();
      });
      db.end();
    }
  }
};

