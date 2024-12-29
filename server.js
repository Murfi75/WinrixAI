const express = require('express');
const http = require('http');
const fs = require('fs');
const createServer = () => {
const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8', });
    const stream = fs.createReadStream('./index.html');
	stream.pipe(res)
});
const PORT = 54112;
const HOST = 'localhost';
server.listen(PORT, HOST, (servererror1, serverdata1) => {
	console.log('Сервер запущен по адресу: http://' + HOST + ':' + PORT)

})};

module.exports = {
	create: createServer
}