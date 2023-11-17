const path = require('path');

console.log(path.sep); //gives path separator

const filePath = path.join('/content', 'subfolder', 'test.txt');

console.log(filePath);


const base = path.basename(filePath); //gives base of the path
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt'); //gives absolute path
console.log(absolute);