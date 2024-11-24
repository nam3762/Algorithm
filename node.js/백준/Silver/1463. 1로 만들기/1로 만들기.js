const fs = require('fs');
const N = Number.parseInt(fs.readFileSync(0, 'utf8').toString().trim());

let DP = Array.from({length: N + 1}).fill(0);
DP[2] = 1;
DP[3] = 1;
for (let i = 4; i <= N; i++) {
    if (i % 6 === 0) {
        DP[i] = Math.min(DP[i - 1], Math.min(DP[i / 2], DP[i / 3])) + 1;
    } else if (i % 3 === 0) {
        DP[i] = Math.min(DP[i - 1], DP[i / 3]) + 1;
    } else if (i % 2 === 0) {
        DP[i] = Math.min(DP[i - 1], DP[i / 2]) + 1;
    } else {
        DP[i] = DP[i - 1] + 1;
    }
}
console.log(DP[N]);