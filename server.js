var serveStatic = require('serve-static'),
    http = require('http'),
    finalHandler = require('finalHandler');

var serve = serveStatic('src', {'index': ['index.html']});

var server = http.createServer((req, res) => {
    serve(req, res, finalHandler(req, res));
});

var port = 3000;
server.listen(port);

console.log("Listening on port " + port + "...");