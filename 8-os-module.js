const os = require('os');

//To get current user info

console.log(os.userInfo());

//to get system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`);

//to get os data

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);