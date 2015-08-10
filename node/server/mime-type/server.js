var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('<!DOCTYPE html>'+
'<html>'+
'    <head>'+
'        <meta charset="utf-8" />'+
'        <title>Mime type HTML</title>'+
'    </head>'+ 
'    <body>'+
'     	<p>Une page HTML avec node !</p>'+
'    </body>'+
'</html>');
    res.end();
});
server.listen(8080);
