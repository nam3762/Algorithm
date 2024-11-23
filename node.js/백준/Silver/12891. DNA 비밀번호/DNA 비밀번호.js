const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const [S, P] = input[0].split(' ').map(Number);
const DNA = input[1].trim();
const [A, C, G, T] = input[2].split(' ').map(Number);
let arr = new Array(4).fill(0).map(Number);
let start = 0, end = P;
let count = 0;

// 슬라이딩 윈도우 배열 초기화
for (let i = start; i < end; i++) {
    updateCount(DNA.charAt(i), 1);
}
if (isDNA()) {
    count++;
}

while (end < S) {
    // 빠질 값과 들어올 값만 확인해서 값을 변경
    updateCount(DNA.charAt(start), -1);
    updateCount(DNA.charAt(end), 1);
    if (isDNA()) {
        count++;
    }
    start++;
    end++;
}
console.log(count);

// 배열 값 업데이트
function updateCount(char, value) {
    switch (char) {
        case 'A':
            arr[0] += value;
            break;
        case 'C':
            arr[1] += value;
            break;
        case 'G':
            arr[2] += value;
            break;
        case 'T':
            arr[3] += value;
            break;
        default:
            break;
    }
}

// DNA 조건에 충족하는지 확인
function isDNA() {
    return arr[0] >= A && arr[1] >= C && arr[2] >= G && arr[3] >= T;
}