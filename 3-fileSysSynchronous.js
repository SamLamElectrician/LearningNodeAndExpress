//async(non blocking) or synchronously(blocking)

//SYNCHRONOUS APPROACH
const { readFileSync, writeFileSync, write } = require('fs');
//readFileSync needs two params; path to file, encoding to decode the file
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

//writeFileSync needs two params: file name, value you want to  pass
// if file doesnt exist, node will make it
//if exist, node overides
//3rd param, options, refer to docs
// a in this exampl opens file for appending

writeFileSync(
	'./content/result-sync.txt',
	`Here is the rasdesult: ${first}, ${second}`,
	{ flag: 'a' }
);
console.log('done the task');
console.log('starting the next one');
//console logs to show sync features
//blocks other code from being executed
//painful in large scale applications, not great for optimization
//
