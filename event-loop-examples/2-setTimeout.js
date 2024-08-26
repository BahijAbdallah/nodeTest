console.log('first');
setTimeout(() => {
    console.log('second');
}, 0);
console.log('third');

// setTimeout is asynchronous, it gets offloaded, 