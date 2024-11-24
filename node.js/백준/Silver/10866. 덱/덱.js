class Deque {
    // frontIndex = 맨 앞 요소의 위치
    // backIndex = 맨 뒤 요소의 다음 위치
    constructor() {
        this.frontIndex = 0;
        this.backIndex = 0;
        this.data = {};
    }

    // push_front()
    unshift(value) {
        this.frontIndex--;
        this.data[this.frontIndex] = value;
    }

    // push_back()
    push(value) {
        this.data[this.backIndex] = value;
        this.backIndex++;
    }

    // pop_front()
    shift() {
        if (this.isEmpty()) {
            return -1;
        }
        const value = this.data[this.frontIndex];
        delete this.data[this.frontIndex];
        this.frontIndex++;
        return value;
    }

    // pop_back()
    pop() {
        if (this.isEmpty()) {
            return -1;
        }
        this.backIndex--;
        const value = this.data[this.backIndex];
        delete this.data[this.backIndex];
        return value;
    }
    
    isEmpty() {
        return Number(this.frontIndex === this.backIndex);
    }

    size() {
        return this.backIndex - this.frontIndex;
    }

    front() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.data[this.frontIndex];
    }

    back() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.data[this.backIndex - 1];
    }
}

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const N = Number.parseInt(input[0]);
const deque = new Deque();
const result = [];
for (let i = 1; i <= N; i++) {
    let [command, value = null] = input[i].split(' ');
    value = Number.parseInt(value);
    switch (command.trim()) {
        case "push_front":
            deque.unshift(value);
            break;
        case "push_back":
            deque.push(value);
            break;
        case "pop_front":
            result.push(deque.shift());
            break;
        case "pop_back":
            result.push(deque.pop());
            break;
        case "size":
            result.push(deque.size());
            break;
        case "empty":
            result.push(deque.isEmpty());
            break;
        case "front":
            result.push(deque.front());
            break;
        case "back":
            result.push(deque.back());
            break;
        default:
            break;
    }
}
console.log(result.join('\n'));