var models = require('../models');
var mysql = require('mysql');


var headers = { 'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'contentType': 'text/html'
};

var createResponse = function(statusCode, headers) {

};
module.exports = {

  // headers: { 'access-control-allow-origin': '*',
  // 'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  // 'access-control-allow-headers': 'content-type, accept',
  // 'access-control-max-age': 10, // Seconds.
  // 'Content-Type': 'application/json' // lookback to see why this is text/html instead of applciation/JSON
  // },
  messages: {

    get: function (req, res) {
      // if (req.method === 'GET') {
      console.log(req.url);
      models.messages.get(function(row) {
        console.log(row);
        res.json(JSON.stringify(row));
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('request body', req.body);
      models.users.post(req.body, function(err, data) {
        if (err) {}
        models.messages.post(req.body, function(data) {
          console.log('posted');
          res.writeHead(201, headers);
        });
      });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log(req.url);
      models.users.get(function(row) {
        console.log(row);
        // res.writeHead(200, headers);
        res.json(JSON.stringify(row));
      });
    },
    post: function (req, res) {
      models.users.post(req.body, function(data) {
        console.log('posted');
        res.writeHead(201, headers);
      });
   
    }
  }
};


