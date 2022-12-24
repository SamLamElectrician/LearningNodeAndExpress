const express = require('express');
const path = require('path');

const app = express();

// app.use --> setup static and middleware
// static resources in public
// static asset --> file that server doesnt change --> img, style, js
// js is only dynamic on web not server
app.use(express.static('./public'));
//sends server the resources
app.get('/', (req, res) => {
	//resolves the path and sends the resources
	//absolute path
	//path.join or path.resolve works plus dir name
	res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
});
//e
app.all('*', (req, res) => {
	res.status(404).send('resource not found');
});

//listening to server
app.listen(5000, () => {
	console.log('server is listening on port 5000....');
});
