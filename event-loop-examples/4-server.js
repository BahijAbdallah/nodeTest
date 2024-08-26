const http = require('http');

const server = http.createServer((req, result) => {
    console.log('request event');
    result.end('hello world');
})

server.listen(5000, () => {
    console.log('server listening on port : 5000...')
})

// listen is asynchronous, when we visit localhost:5000 'request event' gets logged
// so basically with server.listen we are saying hey event loop keep listening for incoming requests,
// when they show up handle them correctly