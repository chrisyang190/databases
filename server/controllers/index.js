var models = require('../models');

module.exports = {

  headers: { 'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
  },
  messages: {
    get: function (req, res) {
      console.log('Wut?');
      if (req.method === 'GET') {
        console.log(req.url);
        res.writeHead(27000, this.headers);
        res.end('wut');
      }
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      if (req.method === 'POST') {
        res.writeHead(201, this.headers);
        res.end('wut');
      }
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('Wut?');
      if (req.method === 'GET') {
        console.log(req.url);
        res.writeHead(2770, this.headers);
        res.end('wut');
      }
    },
    post: function (req, res) {
      if (req.method === 'POST') {
        res.writeHead(201, this.headers);
        res.end('wut');
      }
    }
  }
};

//models.<messages /or users>.<get /or post>

