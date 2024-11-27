const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const N = Number.parseInt(input[0]);
const students = input[1].trim().split(' ').map(Number);
const [B, C] = input[2].trim().split(' ').map(Number);
let count = 0;
for (const student of students) {
    const a = student - B;
    if (a < 0) {
        count++;
    } else {
        count += Math.ceil(a / C) + 1;
    }
}
console.log(count);