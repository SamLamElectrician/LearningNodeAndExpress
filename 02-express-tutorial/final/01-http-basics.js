//calls http for importing http module, built in
const http = require('http');
//setting up server
//http built in method
const server = http.createServer((req, res) => {
	// console.log(req.method)
	const url = req.url;
	// home page
	if (url === '/') {
		res.writeHead(200, { 'content-type': 'text/html' });
		res.write('<h1>home page</h1>');
		res.end();
	}
	// about page
	else if (url === '/about') {
		res.writeHead(200, { 'content-type': 'text/html' });
		res.write('<h1>about page</h1>');
		res.end();
	}
	// 404
	else {
		res.writeHead(404, { 'content-type': 'text/html' });
		res.write('<h1>page not found</h1>');
		res.end();
	}
});
//listening on a port:5000
server.listen(5000);
