class UnionFind {
    constructor(size) {
        this.parent = Array.from({length: size}, (_, i) => i);
        this.rank = Array(size).fill(1);
        this.hasCycle = Array(size).fill(false);
    }

    find(a) {
        if (this.parent[a] !== a) {
            this.parent[a] = this.find(this.parent[a]);
        }
        return this.parent[a];
    }

    union(a, b) {
        const root1 = this.find(a);
        const root2 = this.find(b);
        // 이미 부모가 같은 부분 집합에 속해있는 두 정점을 합치면 cycle 생성
        // 이미 사이클인 두 집합을 합쳤을 때, count를 증가시키지 않기 위해 hasCycle 설정
        if (root1 === root2) {
            if (!this.hasCycle[root1]) {
                this.hasCycle[root1] = true;
            }
        }
        if (this.rank[root1] > this.rank[root2]) {
            this.parent[root2] = root1;
            this.hasCycle[root1] = this.hasCycle[root1] || this.hasCycle[root2];
        } else if (this.rank[root1] < this.rank[root2]) {
            this.parent[root1] = root2;
            this.hasCycle[root2] = this.hasCycle[root1] || this.hasCycle[root2];
        } else {
            this.parent[root2] = root1;
            this.rank[root1]++;
            this.hasCycle[root1] = this.hasCycle[root1] || this.hasCycle[root2];
        }
    }
}

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const iterator = input[Symbol.iterator]();
let line = iterator.next();
let test = 1;
const result = [];
while (!line.done) {
    const [n, m] = line.value.split(' ').map(Number);
    if (n === 0 && m === 0) {
        break;
    }
    const unionfind = new UnionFind(n + 1);
    let countCycle = 0;
    for (let i = 0; i < m; i++) {
        const [u, v] = iterator.next().value.trim().split(' ').map(Number);
        // 유니온 연산
        unionfind.union(u, v)
    }
    const parentSet = new Set();
    for (let i = 1; i <= n; i++) {
        // 부모 개수 찾기 (연결 요소의 개수)
        parentSet.add(unionfind.find(i));
    }
    for (const parent of parentSet) {
        // 연결 요소의 부모가 사이클에 포함되었는지 확인
        if (unionfind.hasCycle[parent]) {
            countCycle++;
        }
    }

    let count = parentSet.size - countCycle;
    if (count === 0) {
        result.push(`Case ${test}: No trees.`)
    } else if (count === 1) {
        result.push(`Case ${test}: There is one tree.`)
    } else {
        result.push(`Case ${test}: A forest of ${count} trees.`);
    }
    test++;
    line = iterator.next();
}
console.log(result.join('\n'));