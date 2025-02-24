const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const N = Number.parseInt(input[0]);

let DP = Array.from({length: N + 1}).map((_, i) => Number(i));

for (let i = 4; i <= N; i++) {
    for (let j = 1; j <= sqrt(i); j++) {
        DP[i] = Math.min(1 + DP[i - j * j], DP[i]);
    }
}

console.log(DP[N]);

function sqrt(n) {
    return Math.floor(Math.sqrt(n));
}