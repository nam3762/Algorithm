const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const [N, M, V] = input[0].split(' ').map(Number);
const adjList = [];

// 리스트 초기화
for (let i = 0; i <= N; i++) {
    adjList.push([]);
}

// 인접 리스트 생성
for (let i = 1; i <= M; i++) {
    const [s, e] = input[i].split(' ').map(Number);
    adjList[s].push(e);
    adjList[e].push(s);
}
// 오름차순 정렬
for (let i = 1; i <= N; i++) {
    adjList[i].sort((a, b) => a - b);
}

// visited 배열 초기화
let visited = Array(N + 1).fill(false);
// 결과 저장할 배열
let DFS_result = [];
DFS(V);
visited = Array(N + 1).fill(false);
let BFS_result = [];
BFS(V);

console.log(`${DFS_result.join(' ')}\n${BFS_result.join(' ')}`);

// 배열을 순회할 때 for of 사용
function DFS(start) {
    visited[start] = true;
    DFS_result.push(start);
    for (let next of adjList[start]) {
        if (visited[next] === false) {
            DFS(next);
        }
    }
}

// 배열의 shift와 push로 queue처럼 사용 가능
function BFS(start) {
    visited[start] = true;
    let queue = [];
    queue.push(start);
    while (queue.length > 0) {
        const num = queue.shift();
        BFS_result.push(num);
        for (let next of adjList[num]) {
            if (visited[next] === false) {
                visited[next] = true;
                queue.push(next);
            }
        }
    }
}