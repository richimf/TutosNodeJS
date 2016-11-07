
var http = require("http");
    fs = require("fs");

//la version Asyncrona se llama readFile(), esta es la syncrona
//var html = fs.readFileSync("./index.html") // ./ busca dentro de mi carpeta este html
var html = fs.readFile("./index.html", function(err, html){
    //despues de haber leido el html, llamamos a un callback
    http.createServer(function(req,res){
      res.write(html);
      res.end();
    }).listen(8080);
});

/*
http.createServer(funciton(req,res){
    fs.readFile("./index.html",function(err,html){
      res.write(html);
      res.end();
    });
}).listen(8080);
*/
