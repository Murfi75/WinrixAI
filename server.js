const fs = require('fs');
const http = require('http');
const createServer = () => {
    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'content-type': 'text/html'});
		if(req.url === '/'){
            fs.createReadStream('./htmls/index.html').pipe(res);
        }
        else if(req.url === '/auth/register'){
			fs.createReadStream('./htmls/auth/register/index.html').pipe(res);
        }
        else if(req.url === '/auth/login'){
            fs.createReadStream('./htmls/auth/login/index.html').pipe(res);
        }
        else {
            
            fs.createReadStream('./htmls/404.html').pipe(res);
        }
    });
    const PORT = 54112;
    const HOST = 'localhost';

    server.listen(PORT, HOST, () => {
		console.log('Сервер запущен на http://' + HOST + ':' + PORT);

    });



};
const exit = () => {
    server.close();
}
module.exports = {
    create: createServer,
    delete: exit

}