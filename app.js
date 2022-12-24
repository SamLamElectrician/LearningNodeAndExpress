const express = require('express');
const path = require('path');

const app = express();

// setup static and middleware
app.use(express.static('./public'));
//sends server the resources
app.get('/', (req, res) => {
	//resolves the path and sends the resources
	res.sendFile(
		path.resolve(__dirname + '02-express-tutorial\navbar-appindex.html')
	);
});
//e
app.all('*', (req, res) => {
	res.status(404).send('resource not found');
});

//listening to server
app.listen(5000, () => {
	console.log('server is listening on port 5000....');
});
