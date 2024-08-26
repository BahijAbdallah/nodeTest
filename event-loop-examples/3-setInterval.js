setInterval(() => {
    console.log('hello world');
}, 2000);

console.log(' i will run first');

// setInterval is asynchronous, it gets offloaded, event loop execute its every 2s unless its stopped 
// or there's an unexpected error