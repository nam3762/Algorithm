const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const obj = new Object(Object.create(null));
for (let i = 1; i <= N; i++) {
    if (input[i] in obj) {
        obj[input[i]] += 1;
    } else {
        obj[input[i]] = 1;
    }
}
for (let i = N + 1; i <= N + M; i++) {
    if (input[i] in obj) {
        obj[input[i]] += 1;
    } else {
        obj[input[i]] = 1;
    }
}
for (const key in obj) {
    if (obj[key] === 1) {
        delete obj[key];
    }
}
console.log(`${Object.keys(obj).length}\n${new Array(...Object.keys(obj).sort()).join('\n')}`);