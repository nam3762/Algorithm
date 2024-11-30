const fs = require('fs');
// - 연산 이후 나오는 모든 + 연산자를 모두 괄호로 묶기
const input = fs.readFileSync(0, 'utf8').toString().trim().split("-");
// 00020, 01234 같은 문자열을 0을 없애고 함수로 보내 식을 계산하여 리턴
let sum = new Function(`return ${input[0].replace(/\b0+(\d+)/g, '$1')}`)();
for (let i = 1; i < input.length; i++) {
    const result = Number.parseInt(new Function(`return ${input[i].replace(/\b0+(\d+)/g, '$1')}`)());
    sum -= result;
}
console.log(sum);