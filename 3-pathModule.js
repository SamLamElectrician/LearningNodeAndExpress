const path = require('path');

//return platform specifc seperator
console.log(path.sep);
//joins path by seperator
//shows whole path that is a value
//normalize path
const filePath = path.join('/content/', 'subfolder', 'test.txt');
//extra trailing slash is removed due to normalize
console.log(filePath);

//how to get base name of last file
const base = path.basename(filePath);
console.log(base);

//resolve shows absolute path--> accepts sequence of paths or path segments
//path different in every machine
const resolve = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(resolve);
