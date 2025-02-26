const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const T = Number.parseInt(input[0]);
let line = 1;

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

for (let test = 0; test < T; test++) {
    const [M, N, K] = input[line].split(' ').map(Number);
    const board = Array.from({length: N}, () => new Array(M).fill(0));
    const visited = Array.from({length: N}, () => new Array(M).fill(false));
    let count = 0;
    line++;
    for (let i = line; i < K + line; i++) {
        const [y, x] = input[i].trim().split(' ').map(Number);
        board[x][y] = 1;
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (!visited[i][j] && board[i][j] === 1) {
                visited[i][j] = true;
                BFS(i, j, N, M, board, visited);
                count++;
            }
        }
    }

    line += K;
    console.log(count);
}

function BFS(x, y, N, M, board, visited) {
    const queue = [[x, y]];
    let index = 0;
    while (index < queue.length) {
        const [currentX, currentY] = queue[index];
        index++;
        for (let i = 0; i < 4; i++) {
            const nx = dx[i] + currentX;
            const ny = dy[i] + currentY;
            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
            if (board[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
            }
        }
    }
}