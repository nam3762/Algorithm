const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const str1 = input[0].trim();
const str2 = input[1].trim();
const N = str1.length;
const M = str2.length;
let DP = Array.from({length: 2}, () => Array(Math.max(N, M) + 1).fill(0));
let max = 0;
for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
        if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
            DP[i % 2][j] = DP[(i - 1) % 2][j - 1] + 1;
        } else {
            DP[i % 2][j] = Math.max(DP[(i - 1) % 2][j], DP[i % 2][j - 1]);
        }
        max = Math.max(max, DP[i % 2][j]);
    }
}
console.log(max);