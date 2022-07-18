var http = require('http');


http.createServer(function (req, res){
  res.write("Botunuz Güvenli Bir şekilde 7/24 olmuştur");
  res.end();
}).listen(8080)