const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split(' ');
const N = Number.parseInt(input[0]);
const K = Number.parseInt(input[1]);

let DP = Array.from({length: N + 1}, () => Array(K + 1).fill(0));

for (let i = 1; i <= N; i++) {
    for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
            DP[i][j] = 1;
        } else {
            DP[i][j] = DP[i - 1][j] + DP[i - 1][j - 1];
        }
    }
}

console.log(DP[N][K]);