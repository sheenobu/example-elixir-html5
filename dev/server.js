var http = require('http'),
    httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});

proxy.on('error', function (err,req,res) {
  res.writeHead(500, { 'Content-Type': 'text/plain' });
  if (req.method !== 'HEAD') {
      res.write('An error has occurred: ' + JSON.stringify(err));
  }
  res.end();
});

var server = http.createServer(function(req, res) {
  if(req.url.match("^/api")) {
    proxy.web(req, res, { target: 'http://127.0.0.1:4000' });
  }else{
    proxy.web(req, res, { target: 'http://127.0.0.1:3002' });
  }
});

console.log("listening on port 5050")
server.listen(5050);
