const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const N = Number.parseInt(input);
let bitmask = ~N;
let twoCompliment = (bitmask + 1)

let xorResult = bitmask ^ twoCompliment;

let count = 0;
while (xorResult > 0) {
    xorResult = xorResult & (xorResult - 1);
    count++;
}
console.log(32 - count);