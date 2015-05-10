var http      = require('http'),
    httpProxy = require('http-proxy');

var port = 3000;

var proxy = httpProxy.createProxyServer();

http.createServer(function(req, res) {
    req.headers.host = 'ryanair-test.herokuapp.com';
    res.setHeader("x-lt-header", "YEAH!");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    proxy.web(req, res, { target: 'http://ryanair-test.herokuapp.com' });
}).listen(port, function() {
    console.log('Server started at', port);
});