const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const T = Number(input[0]);
const result = [];
for (let i = 1; i <= T; i++) {
    const [num, str] = input[i].split(' ');
    for (let j = 0; j < str.length; j++) {
        result.push(str.charAt(j).repeat(Number(num)));
    }
    result.push("\n");
}

console.log(result.join(""));
