//takes from the fs module
const { createReadStream } = require('fs');

// default size of the buffer 64kb
// last buffer - remainder
// highWaterMark --> control size of buffer
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

//invocs createReadStraeam
const stream = createReadStream('./content/big.txt');

//events is in this package
//listens for data, console logs results in callback function
stream.on('data', (result) => {
	//what do do with the data
	console.log(result);
});
//error handling
stream.on('error', (err) => console.log(err));
