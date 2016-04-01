var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hi everyone. My name is Kenaz and I'm a Product Manager at Puppet Labs.\nYou can contact me at 
kenaz at puppetlabs dot com\n');
}).listen(port);
