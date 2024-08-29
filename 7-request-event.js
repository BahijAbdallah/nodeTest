const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('Welcome')
// })

// using event emitter api
const server = http.createServer();

// emits request event
// subsrcibe to it / listen to it / respond to it
server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(5000);