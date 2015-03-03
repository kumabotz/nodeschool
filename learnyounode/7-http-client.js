var http = require('http');

var url = process.argv[2] || 'http://nodeschool.io/';

http.get(url, function(response) {
  response.setEncoding('utf-8');
  response.on('data', console.log);
  response.on('error', console.error);
});