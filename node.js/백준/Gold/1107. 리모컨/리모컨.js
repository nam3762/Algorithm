const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
let N = input[0].trim();
let n = N.length;
N = Number.parseInt(N);
const M = input[1].trim();
const arr = [];

// 고장난 버튼 없을 때 예외 처리
if (M === '0') {
    for (let i = 0; i <= 9; i++) {
        arr.push(i);
    }
} else {
    const temp = input[2].split(' ').map(Number);
    for (let i = 0; i <= 9; i++) {
        if (!temp.includes(i)) {
            arr.push(i);
        }
    }
}
let min = Infinity;
let result_n = n;
for (let i = 1; i <= n + 1; i++) {
    combination(0, [], i);
}

// 1. 번호 입력 이동
// 2. 번호 입력하지 않고 이동 (100에서 +-)
// 둘 중 더 작은 값을 결과값으로 출력
const result = Math.min(min + result_n, Math.abs(100 - N));
console.log(result);

// 가능한 모든 조합 생성 후 원하는 채널과 가장 차이가 적은 채널 확인
function combination(current, list, size) {
    if (current === size) {
        const origin = list.reduce((acc, curr) => acc * 10 + curr, 0);
        const diff = Math.abs(origin - N);
        if (min > diff) {
            min = diff;
            result_n = list.length;
        }
        return;
    }
    for (let num of arr) {
        list.push(num);
        combination(current + 1, list, size);
        list.pop();
    }
}