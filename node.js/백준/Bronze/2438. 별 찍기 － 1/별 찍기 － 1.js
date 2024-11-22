const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString();
let result = '';
for (let i = 1; i <= Number(input); i++) {
    for (let j = 1; j <= i; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);