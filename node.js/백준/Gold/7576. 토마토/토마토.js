const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const map = Array.from({length: M}, () => Array(N).fill(0));

// 시작 지점 좌표
const queue = [];
// 안 익은 토마토 개수
let nomato = 0;
for (let i = 1; i <= M; i++) {
    const row = input[i].split(' ').map(Number);
    for (let j = 0; j < N; j++) {
        map[i - 1][j] = row[j];
        if (row[j] === 1) {
            // 시작 지점 좌표를 배열에 저장
            queue.push([i - 1, j, 0]);
        } else if (row[j] === 0) {
            // 안 익은 토마토 카운팅
            nomato++;
        }
    }
}

// 모든 토마토가 익어있는 상태 예외 처리
if (nomato === 0) {
    console.log(0);
} else {
    // 최대 depth = 최소 날짜
    const day = BFS();

    // 안 익은 토마토가 1개라도 있으면 -1, 그렇지 않으면 day 출력
    const result = nomato ? -1 : day;
    console.log(result);
}

function BFS() {
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    let maxDepth = 0;
    let index = -1;

    while (index < queue.length - 1) {
        const [currentX, currentY, depth] = queue[++index];
        // JavaScript Array의 shift() 메서드는 O(n)이라 느림! -> 인덱스로 관리
        maxDepth = Math.max(maxDepth, depth);
        for (let i = 0; i < 4; i++) {
            const nextX = dx[i] + currentX;
            const nextY = dy[i] + currentY;
            if (isInside(nextX, nextY) && map[nextX][nextY] === 0) {
                map[nextX][nextY] = 1;
                nomato--;
                queue.push([nextX, nextY, depth + 1]);
            }
        }
    }
    return maxDepth;
}

function isInside(x, y) {
    return x >= 0 && x <= M - 1 && y >= 0 && y <= N - 1;
}