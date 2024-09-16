var http = require('http');
var url = require('url');
var fs = require('fs');
const { join } = require('path');

function readFile(response, file, contentType) {
    fs.readFile(file, function(err, data) {
        if (err) {
            response.writeHead(404, { "Content-type": "text/html; charset=utf-8" });
            response.end("<h1>Página não encontrada</h1>");
        } else {
            response.writeHead(200, { "Content-type": contentType });
            response.end(data);
        }
    });
}

var callback = function(request, response) {
    var parts = url.parse(request.url);
    var path = parts.path;

    if (path == "/") {
        readFile(response, "templates/index.html", "text/html; charset=utf-8");
    } else if (path == "/cardapio") {
        readFile(response, "templates/menu.html", "text/html; charset=utf-8");
    } else if (path == "/pedido") {
        readFile(response, "templates/order.html", "text/html; charset=utf-8");
    } else if (path == "/local") {
        readFile(response, "templates/location.html", "text/html; charset=utf-8");
    } else if (path == "/cadastro") {
        readFile(response, "templates/signup.html", "text/html; charset=utf-8");
    } else if (path.endsWith(".css")) {
        // Servir arquivos CSS
        readFile(response, join(__dirname, path), "text/css");
    } else if (path.endsWith(".jpg") || path.endsWith(".jpeg")) {
        // Servir imagens JPEG
        readFile(response, join(__dirname, path), "image/jpeg");
    } else if (path.endsWith(".png")) {
        // Servir imagens PNG
        readFile(response, join(__dirname, path), "image/png");
    } else {
        readFile(response, "templates/404.html", "text/html; charset=utf-8");
    }
};

var server = http.createServer(callback);
server.listen(4500);
console.log("Servidor iniciado - http://localhost:4500");

