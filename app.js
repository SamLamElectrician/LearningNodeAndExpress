// Event-Driven Programming
// - Flow of the program is controlled via external events
// - used heavily in node.js

//EventEmitter common practice for
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

customEmitter.on('response', () => {
	console.log('some other logic here');
});

//emits--> method
//
customEmitter.emit('response', 'john', 34);
