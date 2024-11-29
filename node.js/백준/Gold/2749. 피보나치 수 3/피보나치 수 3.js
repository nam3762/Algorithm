const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const N = BigInt(input);
console.log(fibonacci(N, 1000000));

function fibonacci(n, m) {
    const pisano = BigInt(m / 10 * 15);
    n = BigInt(n % pisano);

    let prev = 0;
    let curr = 1;
    for (let i = 2; i <= n; i++) {
        const temp = (prev + curr) % m;
        prev = curr;
        curr = temp;
    }
    return curr;
}