//Module --> encapsulated Code
//CommonJS --> every file is a module by default

const { john, peter } = require('./2-name');
const sayHi = require('./2-utils');
//data is alternative way to import
const data = require('./2-altSyntax');
//you can use this set up to invoke a function if it is called in the original file
require('./moz.js');

sayHi('Susan');
sayHi(john);
sayHi(peter);
