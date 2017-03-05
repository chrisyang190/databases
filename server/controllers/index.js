var models = require('../models');
var mysql = require('mysql');

var remember = { results: [] };

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
  // 'Content-Type': 'application/json'
  // },
  messages: {
    get: function (req, res) {
      // if (req.method === 'GET') {
      console.log(req.url);
      // remember = remember || { results: [] };
        // res.writeHead(27000, this.headers);
      models.messages.get(function(row) {
        console.log(row);
        // remember.results.push(row[0]);
        remember.results = row;
        res.writeHead(200, headers);
        res.end(JSON.stringify(remember));
      });

      //WHY IS CONTENTTYPE TEXT/HTML AND NOT APPLICATION/JSON

      /*res.writeHead(200, headers);
      res.end(JSON.stringify(remember));*/
      // }
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // if (req.method === 'POST') {
        // res.writeHead(201, this.headers);
      console.log('posted 1');
      
      // remember = remember || { results: [] };
      // req.on('data', function(data) {
      //   console.log('data', data);
      //   remember.results.push(JSON.parse(data));
      // });
      // var parsed = JSON.parse(req.body);
      // models.messages.post(parsed);
      console.log('request body', req.body);

      models.users.post(req.body, function(err, data) {
        if (err) {}
        models.messages.post(req.body, function(data) {
          console.log('posted');
          res.writeHead(201, headers);
        // res.end(JSON.stringify(remember));
        });
      });

      // var parsed = JSON.parse(req.body);
      // models.users.post(parsed);

      // res.writeHead(201, headers);
      //   res.end(JSON.stringify(remember));
      // }
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('Wut?');
      // if (req.method === 'GET') {
      // remember = remember || { results: [] };
      console.log(req.url);
        // res.writeHead(2770, this.headers);

      models.users.get(function(row) {
        console.log(row);
        res.writeHead(200, headers);
        res.end(JSON.stringify(remember));
      });

      // var bleh = models.users.get();
      // res.end(JSON.stringify(bleh));
      // }
    },
    post: function (req, res) {
      // if (req.method === 'POST') {
        // res.writeHead(201, this.headers);
      // res.writeHead(201, headers);
      // console.log('posted');
      // remember = remember || { results: [] };
      // req.on('data', function(data) {
      //   console.log('data', data);
      //   remember.results.push(JSON.parse(data));
      // });
      models.users.post(req.body, function(data) {
        console.log('posted');
        res.writeHead(201, headers);
        // res.end(JSON.stringify(remember));
      });
      // var parsed = JSON.parse(req.body);
      // models.users.post(parsed);

      // models.users.post(req.body);

      // remember.results.push(req.body);
      // res.end(JSON.stringify(remember));
    }
    // }
  }
};

//models.<messages /or users>.<get /or post>

