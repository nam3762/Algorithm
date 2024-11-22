const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split('\n');
const N = Number.parseInt(input[0]);
let arr = [];
let numbers = input[1].split(' ');
let min = 1000001;
let max = -1000001;
for (let i = 0; i < N; i++) {
    arr.push(Number.parseInt(numbers[i]));
    max = Math.max(max, arr[i]);
    min = Math.min(min, arr[i]);
}
console.log(min + " " + max);