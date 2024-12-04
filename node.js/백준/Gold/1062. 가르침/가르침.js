const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const set = createSet();
let max = 0;
if (set.size <= K - 5) {
    console.log(N);
} else {
    combination([...set], [], 0);
    console.log(max);
}

function createSet() {
    const set = new Set(['a', 'n', 't', 'i', 'c']);
    for (let i = 1; i <= N; i++) {
        // 맨 첫 4자리와 맨 끝 4자리 제거
        const str = input[i].trim().slice(4, input[i].length).slice(0, -4);
        for (let j = 0; j < str.length; j++) {
            if (!set.has(str.charAt(j))) {
                set.add(str.charAt(j));
            }
        }
    }
    set.delete('a');
    set.delete('n');
    set.delete('t');
    set.delete('i');
    set.delete('c');
    return set;
}


function combination(setArray, array, start) {
    if (array.length === K - 5) {
        // 최댓값 확인하는 로직
        max = Math.max(max, find(new Set(array)));
        return;
    }

    for (let i = start; i < setArray.length; i++) {
        array.push(setArray[i]);
        combination(setArray, array, i + 1);
        array.pop();
    }
}

function find(s) {
    let set = new Set(['a', 'n', 't', 'i', 'c', ...s]);
    let count = 0;
    for (let i = 1; i <= N; i++) {
        const str = input[i].trim();
        for (let j = 0; j < str.length; j++) {
            if (!set.has(str.charAt(j))) {
                break;
            }
            if (j === str.length - 1) {
                count++;
            }
        }
    }
    return count;
}