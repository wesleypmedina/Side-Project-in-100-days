var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
// A constante __dirname retorna o diretório raiz da aplicação.
fs.readFile('index.html', function(err, html){

if(request.url == "/"){
response.write(html);
}else if(request.url == "/bemvindo"){
	response.write("<h1>BemVindo!!</h1>");
}else{response.write("<h1>Pagina nao encontrada</h1>");}
response.end();
});
});
server.listen(3000, function(){
console.log('Executando Site Pessoal');
});