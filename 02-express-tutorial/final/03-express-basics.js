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

//get request, resource user is trying to access
app.get('/about', (req, res) => {
	//sending status code
	res.status(200).send('About Page');
});

app.all('*', (req, res) => {
	res.status(404).send('<h1>resource not found</h1>');
});

//how to listen to port of server
app.listen(5000, () => {
	console.log('server is listening on port 5000...');
});

// app.get(path, callback) --> HTTP GET request with specific path --> reads data
// app.post (path, callback) --> HTTP post request with specific path --> inserts data
// app.put (path, callback) --> HTTP put request with specific path -->updates data
// app.delete(path, callback) --> HTTP delete request with specific path --> Deletes data
// app.all -->
// app.use -->
// app.listen(port, callback) --> Listens for connections between host and port, similiar to http.server.listen()
