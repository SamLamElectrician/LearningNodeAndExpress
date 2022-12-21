console.log('first');
setTimeout(() => {
	console.log('Second');
}, 0);
console.log('third');
//completed and exited operating system process

//logs first, third, second
setInterval(() => {
	console.log('hello world');
}, 2000);
console.log(`I will run first`);
// process stays alive unless
// Kill Process CONTROL + C
// unexpected error
//async will be offloaded the stack, when its time, we invoke callback
