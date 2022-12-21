//built in package
const http = require('http');
//create the server, takes two objects, request and response
const server = http.createServer((req, res) => {
	//check request url
	if (req.url === '/') {
		res.end('Home Page');
	}
	if (req.url === '/about') {
		// blocking code --> nested for loop in this example
		for (let i = 0; i < 1000; i++) {
			for (let j = 0; j < 1000; j++) {
				console.log(`${i} ${j}`);
			}
		}
		res.end('About Page');
	}
	//error page if nothing matches
	res.end('Error Page');
});
//listens on the port
server.listen(5000, () => {
	console.log('Server listening on port : 5000....');
});
