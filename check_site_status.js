function checkServerStatus() {
    const options = {
        hostname: 'localhost',
        port: 54112,
        path: '/',
        method: 'GET'
    };

    const req = http.request(options, (res) => {
        if (res.statusCode === 200) {
            console.log('Сервер работает!');
        } else {
            console.log('Ошибка: сервер не отвечает должным образом');
        }
    });

    req.on('error', (e) => {
        console.log(`Ошибка при подключении: ${e.message}`);
    });

    req.end();
}
module.exports = {
    check: checkServerStatus,
}
