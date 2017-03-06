var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // db.connect();
      var queryStr = 'SELECT messages.text, users.username, messages.roomname \
       from messages LEFT OUTER JOIN users ON (users.id = messages.user_id);';
      db.query(queryStr, function(err, rows) {
        console.log(rows);
//will have access to rows once done querying; if callback is not called, will just query and will have no idea what to do with the data
        callback(rows);
      });

      // db.end();
    }, // a function which produces all the messages
    post: function (data, callback) {
      console.log('data', data);
      var queryStr = 'INSERT INTO messages (text, user_id, roomname) VALUES ("' + data.text + '", (SELECT id FROM users WHERE username = "' + data.username + '" limit 1), "' + data.roomname + '");';
      // var queryStr = 'INSERT INTO messages (text, user_id, roomname) VALUES (?, (select id from users where username = ? limit 1) , ?)';
      db.query(queryStr, data, function(err, res) {
        // console.log('Last insert ID:', res.insertId);
        callback(res);
      });
      // db.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      console.log('test');
      // db.connect();
      db.query('SELECT * FROM users', function(err, rows) {
        callback(rows);
      });
      // db.end();
    },
    post: function (data, callback) {
      // var parsed = JSON.parse(jsonObj);
      // {text: ... , username, roomname}
      // console.log(parsed);
      // db.connect();
      // db.query('INSERT INTO users SET ?', obj, function(err, res) {
      // var queryStr = 'INSERT INTO users (username) VALUES("' + data.username + '");';
      var queryStr = "insert into users (username) values(?);";
      db.query(queryStr, data, function(err, rows) {
        callback(rows);
        // done();
      });
      // db.end();
    }
  }
};

