const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
let result = [];
for (let i = 1; i <= 9; i++) {
    result.push(`${input} * ${i} = ${Number(input) * i}`);
}
console.log(result.join('\n'));