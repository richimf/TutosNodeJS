
var http = require("http");
    fs = require("fs");

http.createServer(function(req,res){
  fs.readFile("./index.html", function(err, html){

      var html_string = html.toString();
      //expresion regular
      //identificamos patrones en la cadena, buscar expresiones regulares para "tarjeta de credito", "correo", etc...
      var variables = html_string.match(/[^\{\}]+(?=\})/g﻿); // retorna un array de ["nombre","valor"]
      var nombre = "pikachu";
      //variables ['nombre']
      for(var i = variables.length - 1; i >= 0; i--){
          // Lo ejecutamos como código de javaScript, para obtener el valor de dicha variable
          var value = eval(variables[i]); //eval evalua el tipo de parametro, si ingresamos "1+1", daria dos.
          console.log('variables %d = %s',i,variables[i]);
          console.log('value = %s \n',value);

          //reemplazar el contenido con llaves {x} por su valor correspondiente
          html_string = html_string.replace("{"+variables[i]+"}",value);
      };

      //Mandamos el contenido
      res.writeHead(200,{"Content-Type":"text/html"})
      res.write(html_string); //como html_string, ya que es el que procesamos
      res.end();
  });
}).listen(8080);
