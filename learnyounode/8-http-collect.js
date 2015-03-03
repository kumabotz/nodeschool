var http = require('http');
var bl = require('bl');

var url = process.argv[2] || 'http://nodeschool.io/';

http.get(url, function(response) {
  response.pipe(bl(function(err, data) {
    if (err) {
      return console.error(err);
    }
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});