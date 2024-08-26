const { readFile } = require('fs');

console.log('started a first task');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log("completed first task");
})

console.log('starting next task');

// readFile is asynchronous, so it gets offloaded, during execution only when everything else is computed
// and the result of readFile is ready it is executed