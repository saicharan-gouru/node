const { readFileSync, writeFileSync } = require('fs');

//reading contents of file
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

//writing to file - if file not present node will create and if file already exist by defau;t over ridden

writeFileSync('./content/result-sync.txt', `Here is the result : ${first},${second}`);


//to append

writeFileSync('./content/result-sync.txt', `Here is the result : ${first},${second}`, { flag: 'a' });