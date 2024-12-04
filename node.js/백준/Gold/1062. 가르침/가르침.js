// 1. 비트마스킹으로 필수 알파벳을 포함한 비트 생성 ([a, n, t, i, c], initializedBits)
// 2. 각 단어를 비트로 변환하고 각 단어에서 사용한 전체 알파벳을 배열에 저장 (wordBits, usedArray)
// 3. 사용한 알파벳으로 가능한 모든 조합을 생성
// 4. 가장 많은 단어를 읽을 수 있는 조합을 찾을 때 까지 반복

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
if (K < 5) {
    console.log(0);
    process.exit(0);
}

// a, c, i, n, c 포함한 비트
const initializedBits = 0b10100000100001000001000000;

// 각 단어에서 사용한 알파벳을 저장할 비트
let usedAlphabets = initializedBits;
const alphabetMap = {
    'a': 25, 'b': 24, 'c': 23, 'd': 22, 'e': 21, 'f': 20, 'g': 19,
    'h': 18, 'i': 17, 'j': 16, 'k': 15, 'l': 14, 'm': 13, 'n': 12,
    'o': 11, 'p': 10, 'q': 9, 'r': 8, 's': 7, 't': 6, 'u': 5,
    'v': 4, 'w': 3, 'x': 2, 'y': 1, 'z': 0,
};

// 최대 가능 단어 개수
let max = 0;

// 단어를 비트로 변환
let wordBits = wordToBit();
// 사용된 알파벳의 인덱스만 가지는 배열
const usedArray = [];
for (let i = 0; i < 26; i++) {
    if (usedAlphabets & (1 << i)) {
        usedArray.push(i);
    }
}

// 사용할 수 있는 알파벳 수가 더 많을 때 모든 알파벳을 읽을 수 있음
if (usedArray.length <= K) {
    console.log(N);
    process.exit(0);
}

combination(initializedBits, 0, 0);
console.log(max);

function combination(bit, depth, start) {
    if (depth === K - 5) {
        let count = 0;
        for (const wordBit of wordBits) {
            if ((bit & wordBit) === wordBit) count++;
        }
        max = Math.max(max, count);
        return;
    }
    for (let i = start; i < usedArray.length; i++) {
        combination(bit | (1 << usedArray[i]), depth + 1, i + 1);
    }
}

// 세트나 배열 이용하지 않고 직접 비트로 비교
function wordToBit() {
    const wordBits = [];
    for (let i = 1; i <= N; i++) {
        const str = input[i].trim().slice(4, -4);
        let bit = 0;
        for (const char of str) {
            const position = alphabetMap[char];
            bit |= (1 << position);
            // 사용한 알파벳을 나타내는 변수
            usedAlphabets |= (1 << position);
        }
        wordBits.push(bit);
    }
    return wordBits;
}
