class UnionFind {
    constructor(size) {
        this.parent = Array.from({length: size}, (_, i) => i);
        this.rank = Array(size).fill(1);
    }

    find(node) {
        if (this.parent[node] !== node) {
            this.parent[node] = this.find(this.parent[node]);
        }
        return this.parent[node];
    }

    union(a, b) {
        const root1 = this.find(a);
        const root2 = this.find(b);
        if (this.parent[root1] > this.parent[root2]) {
            this.parent[root2] = root1;
        } else if (this.parent[root1] < this.parent[root2]) {
            this.parent[root1] = root2;
        } else {
            this.parent[root2] = root1;
            this.rank[root1]++;
        }
    }
}

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
unionfind = new UnionFind(N + 1);
let count = 0;
for (let i = 1; i <= M; i++) {
    const [u, v] = input[i].split(' ').map(Number);
    // cycle 여부 확인
    if (unionfind.find(u) === unionfind.find(v)) {
        count++;
    } else {
        unionfind.union(u, v);
    }
}
// 부모 개수를 셋에 저장하여 중복 제거
const parents = new Set();
for (let i = 1; i <= N; i++) {
    parents.add(unionfind.find(i));
}
console.log(parents.size - 1 + count);