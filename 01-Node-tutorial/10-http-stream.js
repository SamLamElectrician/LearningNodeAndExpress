//import modules
var http = require('http');
var fs = require('fs');

http
	.createServer(function (req, res) {
		// const text = fs.readFileSync('./content/big.txt', 'utf8')
		// res.end(text)
		//creates the stream in utf8 encoding
		const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
		//listening for open
		fileStream.on('open', () => {
			//pipe method --> push from read stream to write stream
			fileStream.pipe(res);
		});
		//error handling
		fileStream.on('error', (err) => {
			res.end(err);
		});
	})
	.listen(5000);
