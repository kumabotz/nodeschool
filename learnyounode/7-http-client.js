var http = require('http');

var url = process.argv[2] || 'http://nodeschool.io/';
console.log(url);
http.get(url, function(res) {
  console.log(res);
});