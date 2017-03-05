var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // db.connect();
      var queryStr = 'SELECT messages.text, users.username, messages.roomname from messages LEFT OUTER JOIN users ON users.id = messages.user_id;';
      db.query(queryStr, function(err, rows) {
        if (err) {
          // dont do anything
        } else {
          
          console.log(rows);
          return callback(rows);
          //will have access to rows once done querying; if callback is not called, will just query and will have no idea what to do with the data
        }
      });

      // db.end();
    }, // a function which produces all the messages
    post: function (data, callback) {
      // var parsed = JSON.parse(jsonObj);
      // {text: ... , username, roomname}
      // console.log(parsed);
      // db.connect();
      // db.query('INSERT INTO message SET ?', obj, function(err, res) {
      console.log('data', data);
      var queryStr = 'INSERT INTO messages (text, user_id, roomname) VALUES ("' + data.text + '", (SELECT id FROM users WHERE username = "' + data.username + '" limit 1), "' + data.roomname + '");';
      db.query(queryStr, function(err, res) {
        if (err) {
          throw err;
        }
       
        // done();
        console.log('Last insert ID:', res.insertId);
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
        if (err) {
          throw err;
        } else {
          console.log('WUT?');
          return callback(rows);
        }
      });
      // db.end();
    },
    post: function (data, callback) {
      // var parsed = JSON.parse(jsonObj);
      // {text: ... , username, roomname}
      // console.log(parsed);
      // db.connect();
      // db.query('INSERT INTO users SET ?', obj, function(err, res) {
      db.query('INSERT INTO users (username) VALUES("' + data.username + '")', function(err, rows) {
        if (err) {
          throw err;
        }
     
       
        return callback(rows);
        // done();
      });
      // db.end();
    }
  }
};

