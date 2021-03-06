var fs = require('fs');
var url = require('url');
var handle = require('../lib/handle');

exports.getConfig = function() {
  return fs.readFileSync('./config.json', 'utf-8', function(err, contents) {
    if (err) {
      return -1;
    }
    return contents;
  })
};

exports.parseConfig = function(obj) {
  var i = 0
  var url = [];
  var func = [];
  var method = [];
  var json = JSON.parse(obj);
  for (var keys in json) {
    for (var key in json[keys]) {
      if ( i === 0) {
        url.push(json[keys][key]);
        i = i + 1;
      } else if (i === 1) {
        func.push(json[keys][key]);
        i = i + 1;
      } else if (i === 2) {
        method.push(json[keys][key]);
        i = i + 1;
      } else {
        i = 0;
      }
    }
  }
  return {"url" : url, "func" : func, "method" : method};
};

exports.router = function(req, res, map) {
  for (var i in map.url) {
    if (url.parse(req.url, true).pathname === map.url[i]) {
      eval("handle." + map.func[i] + "(req, res)");
    }
  }
}
