const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
        return;
    }

    if (req.url === '/about') {
        res.end('Welcome to our about page')
        return;
    }
    res.end(`
    <h1>Oops!</h1>
    <p>Page doesn't exist!</p>
    <a href="/">Back home</a>
    `)

})


server.listen(5000)