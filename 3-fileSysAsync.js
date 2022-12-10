const { readFile, writeFile } = require('fs');

//readFile(path, encoding), (err, result fuinction)
//buffer will show if not provided a encoding
console.log('start');
readFile('./content/first.txt', 'utf-8', (err, results) => {
	//checks if there is an error
	if (err) {
		console.log(err);
		return;
	}
	//shows results if not error
	const first = results;
	readFile('./content/second.txt', 'utf-8', (err, results) => {
		if (err) {
			console.log(err);
			return;
		}
		const second = results;
		writeFile(
			//pathing
			'./content/results-async.txt',
			//data to write
			`Here is the rasdesult: ${first}, ${second}`,
			//flag
			{ flag: 'a' },
			//callback function
			(err, results) => {
				if (err) {
					console.log(err);
					return;
				}
				//shows results if not error
				console.log(results);

				console.log('done with this task');
			}
		);
	});
});
console.log('starting next task');

//console log to show async features

//you can use promises or async await to avoid callback hell
