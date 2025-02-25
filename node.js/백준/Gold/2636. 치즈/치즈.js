const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n').map(l => l.trim());
const [N, M] = input[0].split(' ').map(l => Number(l));
const board = input.slice(1).map(i => i.split(' ').map(i => Number(i)));

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
const visited = Array.from({length: N}, () => new Array(M).fill(false));

// 외곽 공기는 연결되어 있으므로 (0, 0) 한 번의 BFS로 외부 공기만 탐색 가능
visited[0][0] = true;
board[0][0] = 2;
BFS(0, 0);

// visited 배열 초기화
visited.forEach(row => row.fill(false));

// 몇 시간만에 치즈가 모두 녹을지 카운팅
let count = 0;
// 한 시간 전에 남아있는 치즈 개수
let result = 0;

while (!isAllMelted()) {
    // 치즈가 녹을 좌표를 저장할 배열
    const position = [];
    const lastCheese = countCheese();

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            // 녹을 치즈 찾기
            if (board[i][j] === 1) {
                for (let k = 0; k < 4; k++) {
                    const nx = i + dx[k];
                    const ny = j + dy[k];
                    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
                    if (board[nx][ny] === 2) {
                        position.push([i, j]);
                        break;
                    }
                }
            }
        }
    }

    // 치즈 녹는 로직
    if (position.length > 0) {
        for (const [x, y] of position) {
            board[x][y] = 2;
        }
    }

    // 치즈가 녹은 후 내부 공기를 외부 공기와 연결
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (board[i][j] === 0 && !visited[i][j]) {
                // 외부인지 내부인지 재확인
                for (let k = 0; k < 4; k++) {
                    const nx = i + dx[k];
                    const ny = j + dy[k];
                    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
                    if (board[nx][ny] === 2) {
                        board[i][j] = 2;
                        visited[i][j] = true;
                        BFS(i, j);
                    }
                }
            }
        }
    }

    // 녹을 치즈와 녹은 치즈가 같으면 마지막 시간이라고 볼 수 있음
    if (lastCheese === position.length) {
        result = position.length;
    }

    count++;
    // 매 반복마다 초기화
    visited.forEach(row => row.fill(false));
}
console.log(count)
console.log(result);

function countCheese() {
    let cheese = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (board[i][j] === 1) cheese++;
        }
    }
    return cheese;
}

function isAllMelted() {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (board[i][j] === 1) return false;
        }
    }
    return true;
}

function BFS(x, y) {
    const queue = [[x, y]];
    let index = 0;
    while (index < queue.length) {
        const [currentX, currentY] = queue[index];
        index++;
        for (let i = 0; i < 4; i++) {
            const nx = currentX + dx[i];
            const ny = currentY + dy[i];
            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
            if (!visited[nx][ny] && board[nx][ny] === 0) {
                visited[nx][ny] = true;
                board[nx][ny] = 2;
                queue.push([nx, ny]);
            }
        }
    }
}