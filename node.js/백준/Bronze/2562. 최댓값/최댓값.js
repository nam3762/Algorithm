const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split('\n');
let max = 0;
let maxIndex = 0;
for (let i = 0; i < 9; i++) {
    const num = Number.parseInt(input[i]);
    if (num > max) {
        max = num;
        maxIndex = i;
    }
}
console.log(`${max}\n${maxIndex + 1}`);