const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const str1 = input[0].trim();
const str2 = input[1].trim();
const N = str1.length;
const M = str2.length;
let DP = Array.from({length: N + 1}, () => Array(M + 1).fill(0));
let max = 0;
// DP[i][j] = str1 의 처음 i 글자와 str2 의 처음 j 글자 사이의 최장 공통 부분 수열 길이
for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
        if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
            DP[i][j] = DP[i - 1][j - 1] + 1;
        } else {
            DP[i][j] = Math.max(DP[i - 1][j], DP[i][j - 1]);
        }
        max = Math.max(max, DP[i][j]);
    }
}
const result = [];
let i = N;
let j = M;
while (i > 0 && j > 0) {
    if (DP[i][j] === DP[i - 1][j]) {
        i--;
    } else if (DP[i][j] === DP[i][j - 1]) {
        j--;
    } else {
        result.push(str1.charAt(i - 1));
        i--;
        j--;
    }
}
console.log(`${max}\n${result.reverse().join("")}`);