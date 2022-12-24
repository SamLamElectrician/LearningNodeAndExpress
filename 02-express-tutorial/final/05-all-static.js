const express = require('express');
const path = require('path');

const app = express();

// setup static and middleware
app.use(express.static('./public'));

// technically a static asset so you can put it in public
// since index is named, it will be considered as root

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//   adding to static assets
//   SSR
// })

app.all('*', (req, res) => {
	res.status(404).send('resource not found');
});

app.listen(5000, () => {
	console.log('server is listening on port 5000....');
});
