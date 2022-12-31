const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
	res.send('<h1> Home Page</h1><a href="/api/products">products</a>');
});
//send back json props
//sends back needed information instead of everything
// this sends back name image and price id
app.get('/api/products', (req, res) => {
	const newProducts = products.map((product) => {
		const { id, name, image } = product;
		return { id, name, image };
	});

	res.json(newProducts);
});
//route params to find product ID
//req returns as string
app.get('/api/products/:productID', (req, res) => {
	// console.log(req)
	// console.log(req.params)
	// destructruing the route param
	const { productID } = req.params;
	//finding the product based on the id
	const singleProduct = products.find(
		(product) => product.id === Number(productID)
	);
	// if product doesn't match, returns 404
	if (!singleProduct) {
		return res.status(404).send('Product Does Not Exist');
	}
	// otherwise return the json
	return res.json(singleProduct);
});
// : --> creates url params

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
	console.log(req.params);
	res.send('hello world');
});

app.get('/api/v1/query', (req, res) => {
	// console.log(req.query)
	const { search, limit } = req.query;
	let sortedProducts = [...products];

	if (search) {
		sortedProducts = sortedProducts.filter((product) => {
			return product.name.startsWith(search);
		});
	}
	if (limit) {
		sortedProducts = sortedProducts.slice(0, Number(limit));
	}
	if (sortedProducts.length < 1) {
		// res.status(200).send('no products matched your search');
		return res.status(200).json({ sucess: true, data: [] });
	}
	res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
	console.log('Server is listening on port 5000....');
});
