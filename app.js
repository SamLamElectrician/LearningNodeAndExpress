//calls http for importing http module, built in
const http = require('http');
//setting up server
//http built in method
const server = http.createServer((req, res) => {
	// console.log(req.method)
	const url = req.url;
	// home page
	if (url === '/') {
		//provides header info, metadata about response
		//res.writeHead(statusCode{KV pair})
		res.writeHead(200, { 'content-type': 'text/html' });
		//content being passed
		res.write('<h1>home page</h1>');
		//always call res.end to end response
		res.end();
	} else if (url === '/about') {
		res.writeHead(200, { 'content-type': 'text/html' });
		res.write('<h1>about page</h1>');
		res.end();
	} else {
		res.writeHead(404, { 'content-type': 'text/html' });
		res.write('<h1>page not found</h1>');
		res.end();
	}
});
//listening on a port:5000 for request
server.listen(5000);
