const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
let N = Number.parseInt(input[0]);
let set = new Set();
for (let i = 1; i <= N; i++) {
    set.add(input[i]);
}
let arr = [...set];
arr.sort();
arr.sort((a, b) => a.length - b.length);
console.log(arr.join("\n"));