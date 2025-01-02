const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const N = Number.parseInt(input[0]);
const P = [0, ...input[1].split(' ').map(Number)];
let DP = Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= i; j++) {
        DP[i] = Math.max(DP[i], P[i], DP[j] + P[i - j]);
        if (i % j === 0) {
            DP[i] = Math.max(DP[i], (i / j) * P[j]);
        }
    }
}
console.log(Math.max(...DP));