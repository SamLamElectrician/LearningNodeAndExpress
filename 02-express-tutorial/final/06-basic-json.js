//import express
const express = require('express');
// uses express method
const app = express();

const { products } = require('./data');
//http method for default
app.get('/', (req, res) => {
	//method name is json
	//sends back a JSON response and converted to json string using json.stringify()
	res.json(products);
});

// app.get('/', (req, res) => {
// 	res.json([{name: 'john'}, {name:'susan'}]);
// });

//listen for server
app.listen(5000, () => {
	console.log('Server is listening on port 5000....');
});
