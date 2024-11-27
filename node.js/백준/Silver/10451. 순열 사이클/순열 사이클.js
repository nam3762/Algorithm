const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const iterator = input[Symbol.iterator]();
const T = Number.parseInt(iterator.next().value);
for (let test = 0; test < T; test++) {
    const N = Number.parseInt(iterator.next().value);
    // 1부터 N까지 숫자가 한 번씩 등장하므로, 그래프의 모든 노드가 연결된다.
    // 따라서, 반드시 1개 이상의 cycle을 형성
    const permutation = iterator.next().value.trim().split(' ').map(Number);
    const adjList = {};
    for (let i = 1; i <= N; i++) {
        adjList[i] = [permutation[i - 1]];
    }
    console.log(isCycle(adjList, N));
}

function isCycle(adjList, N) {
    const visited = new Set();
    let count = 0;

    function DFS(node) {
        if (visited.has(node)) {
            return false;
        }
        visited.add(node);
        for (const neighbor of adjList[node]) {
            DFS(neighbor);
        }
        return true;
    }

    for (let i = 1; i <= N; i++) {
        if (!visited.has(i)) {
            // DFS 종료 여부는 cycle 탐지 여부와 같음
            if (DFS(i)) {
                count++;
            }
        }
    }
    return count;
}