//pequeño JSON de prueba
var http = require("http"),
    fs = require("fs");

//Mandar JSON
http.createServer(function(req,res){
  fs.readFile("./index.html", function(err,html){
    res.writeHead(200,{"Content-Type":"application/json"}); //para ver en chrome como texto plano usar text/html
  res.write(JSON.stringify({nombre:"Richie", username:"elichi"}));
  res.end();
  });
}).listen(8080);

