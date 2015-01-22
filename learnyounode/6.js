var filterFile = require('./6-filter-file');

var dir = process.argv[2];
var ext = process.argv[3];
filterFile(dir, ext, function(err, list) {
  if (err) {
    return console.error('There was an error:', err);
  }
  list.forEach(function(file) {
    console.log(file);
  });
});