const http = require('http');
//create server method takes two params, request(req) and resoibse(res)
const server = http.createServer((req, res) => {
	if (req.url === '/') {
		//response
		res.end('Welcome to our homepage');
	}
	if (req.url === '/about') {
		res.end('Here is the about');
	}
	res.end(`
    <h1>Oops</h1>
    <p>Page doesn't exist</p>
    <a href=".">back Home </a> 
    `);
});

//what port server listens to
server.listen(5000);
//note node doesnt end, it keeps listening for request
