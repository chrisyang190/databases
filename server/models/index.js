var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // db.connect();
      db.query('SELECT * FROM messages', function(err, rows) {
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
      db.query('INSERT INTO messages (id, text, user_id, room_id) VALUES (' + data.message + ')', function(err, res) {
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
      db.query('INSERT INTO users (name) VALUES(' + data.username + ')', function(err, rows) {
        if (err) {
          throw err;
        }
     
        console.log('Last insert ID:', res.insertId);
        return callback(rows);
        // done();
      });
      // db.end();
    }
  }
};

