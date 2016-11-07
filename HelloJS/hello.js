

var http = require("http"); // modulo para usar protocolo http

var manejador = function(solicitud, respuesta){
  //console.log("Hola mundo");
  //respuesta.end(); //para que el navegador sepa que ya termino, debemos cerrar la conexion.
  console.log("Recibimos una nueva peticion");
  respuesta.end("Hola mundo");
};

var servidor = http.createServer(manejador);
//para que nuestro servidor funcione, le decimos a que puerto esta escuchando
servidor.listen(8080);

// ejecutamos el comando en la terminal (debemos estar en nuestra carpeta del proyecto)
// node hello.js
// en Chrome, http://localhost:8080/
// y luego vemos en consola: "Hola mundo"
// ojo, Chrome parece que no termina de ejecutar la pagina
// para detener este proceso, en la terminal tecleamos ctrl+C
// y Chrome deja de cargar.
// hay que especificarle a Chrome que se termino la conexion con el servidor,
// para ello usamos .end();
