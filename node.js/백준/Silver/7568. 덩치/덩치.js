const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const N = Number.parseInt(input[0]);

const people = []
const rank = new Array(N).fill(1);

for (let i = 1; i <= N; i++) {
    const [x, y] = input[i].split(" ").map(Number);
    people.push([x, y]);
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (i !== j) compare(people[i], people[j]) && rank[i]++;
    }
}

console.log(rank.join(" "));

function compare(x, y) {
    return (x[0] < y[0] && x[1] < y[1]);
}