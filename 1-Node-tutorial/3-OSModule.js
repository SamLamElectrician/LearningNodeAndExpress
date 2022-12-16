const os = require('os');

//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds(how long its been running)
console.log(`The System Uptime is ${os.uptime()}`);

const currentOS = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeMem: os.freemem(),
};

console.log(currentOS);
