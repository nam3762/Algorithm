const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
let N = Number.parseInt(input[0]);

const count = new Array(10).fill(0);
while (N > 0) {
    const number = N % 10;
    count[number]++;
    N = Number.parseInt(N / 10);
}
count[6] = Math.ceil((count[6] + count[9]) / 2);
count[9] = 0;
console.log(Math.max(...count));