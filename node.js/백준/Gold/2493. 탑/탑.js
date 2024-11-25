const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const N = Number.parseInt(input[0]);
const towers = input[1].split(' ').map(Number);
const stack = [];
const result = [];
for (let i = 0; i < N; i++) {
    // towers를 순회하며 stack의 top보다 큰 경우에 stack을 pop
    // 레이저가 닿을 수 없기 때문
    while (stack.length > 0 && towers[i] > towers[stack[stack.length - 1]]) {
        stack.pop();
    }
    // 스택이 비어있으면 0을 결과 배열에 저장
    if (stack.length === 0) {
        result.push(0);
    } else {
        // stack의 top을 결과 배열에 저장
        result.push(stack[stack.length - 1] + 1);
    }
    stack.push(i);
}
console.log(result.join(' '));