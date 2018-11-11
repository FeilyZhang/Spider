var url = require('url');
var http = require('http');
var https = require('https');

exports.gets = function(req, res) {
  var datas = '';
  var urlData = url.parse(req.url, true).query;
  var details = {host : urlData.host, path : urlData.path};console.log(details);
  if (urlData.protocol === 'https') {
    https.get(details, function(ress) {
      ress.setEncoding(urlData.charset);
      ress.on('data', function(data) {console.log(111 + '\n' + data);
        datas += data;
      });
      ress.on('end', function() {
        res.writeHead(200, {
          'Content-Type': 'application/json;charset=' + urlData.charset,
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Origin': '*'
        });
        res.end(datas);
      });
      ress.on('error', function() {
        res.writeHead(200, {
          'Content-Type': 'application/json;charset=' + urlData.charset,
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Origin': '*'
        });
        res.end('发生位置错误，请更换url或重试');
      });
    });
  } else if (urlData.protocol === 'http') {
    http.get(details, function(ress) {
      ress.setEncoding(urlData.charset);
      ress.on('data', function(data) {console.log(111 + '\n' + data);
        datas += data;
      });
      ress.on('end', function() {
        res.writeHead(200, {
          'Content-Type': 'application/json;charset=' + urlData.charset,
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Origin': '*'
        });
        res.end(datas);
      });
      ress.on('error', function() {
        res.writeHead(200, {
          'Content-Type': 'application/json;charset=' + urlData.charset,
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Origin': '*'
        });
        res.end('发生位置错误，请更换url或重试');
      });
    });
  }
}
