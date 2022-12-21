// started operating system process
console.log('first');
setTimeout(() => {
	console.log('Second');
}, 0);
console.log('third');
//completed and exited operating system process

//logs first, third, second
