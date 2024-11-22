const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().split(' ');
console.log(input[0] / input[1]);