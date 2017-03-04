var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      db.query('SELECT * FROM messages', function(err, rows) {
        if (err) {
          throw err;
        } else {
          console.log('FUCK YEAH');
          return rows;
        }
      });
    }, // a function which produces all the messages
    post: function (jsonObj) {
      // var parsed = JSON.parse(jsonObj);
      // {text: ... , username, roomname}
      // console.log(parsed);
      db.query('INSERT INTO message SET ?', jsonObj, function(err, res) {
        if (err) {
          throw err;
        }
        console.log('FUCK YEAH');
        // done();
      });

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
    post: function (jsonObj) {
      // var parsed = JSON.parse(jsonObj);
      // {text: ... , username, roomname}
      // console.log(parsed);
      db.query('INSERT INTO users SET ?', jsonObj, function(err, res) {
        if (err) {
          throw err;
        }
        console.log('FUCK YEAH');
        // done();
      });
    }
  }
};

