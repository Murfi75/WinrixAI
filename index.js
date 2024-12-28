/*const my_math = require('./my_math');
const os = require('os');
let res = os.platform();
let res1 = my_math.add(4, 5);
let res2 = my_math.multiply(2, 2);
console.log('Result 1: ' + res1 + '. Result 2: ' + res2 + '. OS: ' + res);*/




const fs = require('fs');
fs.writeFileSync('some.txt', 'Hello World!')