// Event-Driven Programming
// - Flow of the program is controlled via external events
// - used heavily in node.js
// - core building blocks

// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
// takes from event module
// common practice is calling it EventEmitter

//importing the module
const EventEmitter = require('events');
//example of extending the class
const customEmitter = new EventEmitter();

// on and emit methods
// On --> listen for events
// emit --> Emit the event
// keep track of the order
// additional arguments
// built-in modules utilize it

//when event takes place, uses name and id and logs it
customEmitter.on('response', (name, id) => {
	console.log(`data recieved user ${name} with id:${id}`);
});

//as many response as we want
customEmitter.on('response', () => {
	console.log('some other logic here');
});

//emits--> method for event
//emit function location matters, listen first then emit
customEmitter.emit('response', 'john', 34);
