const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const N = BigInt(Number.parseInt(input, 10));
const DP = [];
DP[0] = BigInt(0);
DP[1] = BigInt(1);
for (let i = 2; i <= N; i++) {
    DP[i] = BigInt(DP[i - 2] + DP[i - 1]);
}
console.log(DP[N].toString());