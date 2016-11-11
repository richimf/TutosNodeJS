//Class: http.ServerResponse
// Checar  en nodejs.org, docs
//write, envia partes de un body
//chunk puede ser un string o buffer
//si es string, especificar el encoding,
//con write mandamos pedazos de la respuesta
//write head, manda status de lo que paso en el ServerResponse
//300 se movio a otro lugar
//500 error
//404 no se econtro
//200 todo chido
var http = require("http"),
    fs = require("fs");

//Como mandar pedazos de datos
/*
http.createServer(function(req,res){
  fs.readFile("./index.html", function(err,html){
    var i = 0;
    while(true){
        i++;
        res.write(i+"");
    };
    res.end();
  });
}).listen(8080);
*/
//Escribir los encabezados de la respuesta del ServerResponse
http.createServer(function(req,res){
  fs.readFile("./index.html", function(err,html){
    res.writeHead(200,{"Content-Type":"application/json"});
  //  res.write(html);
  res.write(JSON.stringify({nombre:"Richie", username:"elichi"}));
  res.end();
  });
}).listen(8080);

//Mandar JSON
