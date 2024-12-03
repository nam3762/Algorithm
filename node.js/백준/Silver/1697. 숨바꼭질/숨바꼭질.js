const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
if (N > K) {
    console.log(Math.abs(K - N));
} else {
    console.log(BFS(N));
}

function BFS(start) {
    const queue = [];
    queue.push([start, 0]);
    const set = new Set();
    let index = -1;
    while (true) {
        const [currentNumber, currentDepth] = queue[++index];
        if (currentNumber === K) {
            return currentDepth;
        }
        if (!set.has(currentNumber)) {
            set.add(currentNumber);
            queue.push([currentNumber + 1, currentDepth + 1]);
            queue.push([currentNumber - 1, currentDepth + 1]);
            if (currentNumber * 2 <= 100000) {
                queue.push([currentNumber * 2, currentDepth + 1]);
            }
        }
    }
}