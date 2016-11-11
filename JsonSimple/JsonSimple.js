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

//USAR EL COMANDO   curl -I localhost:8080   para verificar que todo este OK
//se recibira una respuesta asi:
/*
	HTTP/1.1 200 OK
	Content-Type: application/json
	Date: Fri, 11 Nov 2016 19:01:22 GMT
	Connection: keep-alive
*/
