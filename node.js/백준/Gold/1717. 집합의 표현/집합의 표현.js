class UnionFind {
    constructor(size) {
        // 초기화가 필요한 이유 : 각 노드가 자기 자신을 부모로 가르키게 함으로써, 각 노드가 독립된 집합에 속하게 함
        this.parent = Array.from({length: size}, (_, i) => i);
        // 랭크를 1로 초기화
        this.rank = Array(size).fill(1);
    }

    find(node) {
        // 경로 압축 (초기 1회는 탐색 필요)
        if (this.parent[node] !== node) {
            this.parent[node] = this.find(this.parent[node]);
        }
        return this.parent[node];
    }

    union(a, b) {
        const root1 = this.find(a);
        const root2 = this.find(b);
        // 랭크(높이)가 낮은 트리를 랭크가 높은 트리 루트에 붙인다
        if (root1 !== root2) {
            if (this.rank[root1] > this.rank[root2]) {
                this.parent[root2] = root1;
            } else if (this.rank[root1] < this.rank[root2]) {
                this.parent[root1] = root2;
            } else {
                // 랭크가 같으면 둘 중 하나가 부모가 되고 랭크가 1 늘어난다.
                this.parent[root2] = root1;
                this.rank[root1]++;
            }
        }

    }

    isConnected(a, b) {
        // 부모가 같으면 연결되었다고 간주
        return this.find(a) === this.find(b);
    }
}

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const unionfind = new UnionFind(n + 1);
for (let i = 1; i <= m; i++) {
    const [operator, a, b] = input[i].trim().split(' ').map(Number);
    if (operator === 0) {
        unionfind.union(a, b);
    } else {
        console.log(unionfind.isConnected(a, b) ? "YES" : "NO");
    }
}