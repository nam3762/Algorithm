const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
let [N, K] = input[0].trim().split(' ').map(Number);
const coins = [];
for (let i = 1; i <= N; i++) {
    coins.push(Number.parseInt(input[i]));
}
let result = 0;
for (let i = N - 1; i >= 0; i--) {
    if (K >= coins[i]) {
        result += Math.floor(K / coins[i]);
        K = K % coins[i];
    }
}
console.log(result);