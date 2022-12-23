// not built in with node
//import express
//convention is to call it express
const express = require('express');
//sets up express
const app = express();

app.get('/', (req, res) => {
	console.log('user hit the resource');
	res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
	res.status(200).send('About Page');
});

app.all('*', (req, res) => {
	res.status(404).send('<h1>resource not found</h1>');
});

//how to listen to port of server
app.listen(5000, () => {
	console.log('server is listening on port 5000...');
});
