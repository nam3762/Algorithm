const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const map = new Map();
const result = [];

for (let i = 1; i <= N; i++) {
    const [link, password] = input[i].trim().split(' ');
    map.set(link, password);
}

for (let i = N + 1; i < N + M + 1; i++) {
    const link = input[i].trim();
    result.push(map.get(link));
}
console.log(result.join('\n'));