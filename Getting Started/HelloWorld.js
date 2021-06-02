const http = require('http');

// Server definition
const server = http.createServer((req, res) => {
    res.end('Hello world'); //.end = When the server connection ends, do the following.
})

// Server creation
server.listen(4242, () => {
    console.log('Server is running...');
});