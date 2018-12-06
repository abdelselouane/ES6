const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    homeRoute(req, res);
});

function homeRoute(req, res) {
    if(req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Set Home Route\n');
    }
}

function user(req, res){
    let username = req.url.replace("/", "");
    if(username.length > 0) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
    }
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});