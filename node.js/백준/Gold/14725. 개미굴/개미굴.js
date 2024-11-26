class Trie {
    constructor() {
        this.root = Object.create(null);
    }

    insert(words) {
        let node = this.root;
        for (const word of words) {
            node[word] = node[word] || Object.create(null);
            node = node[word];
        }
    }

    print() {
        this.printHelper(this.root, 0);
    }

    printHelper(node, depth) {
        // 사전순 정렬 출력
        const keys = Object.keys(node).sort((a, b) => a.localeCompare(b));
        for (const key of keys) {
            console.log(`${"--".repeat(depth)}${key}`);
            this.printHelper(node[key], depth + 1);
        }
    }
}

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const N = Number.parseInt(input[0]);
const trie = new Trie();
for (let i = 1; i <= N; i++) {
    const words = input[i].trim().split(' ').filter(item => isNaN(item));
    trie.insert(words);
}
trie.print();