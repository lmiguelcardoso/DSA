class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newItem = new Node(value);

        if (!this.bottom) {
            this.bottom = newItem;
            this.top = newItem;
        } else {
            const oldTop = this.top;
            this.top = newItem;
            this.top.next = oldTop;
        }

        this.length++;
    }

    pop() {
        if (this.length === 0) return null;

        if (this.bottom == this.top) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return this;
    }
}

const myStack = new Stack();

myStack.push('google');
myStack.push('udemy');
myStack.push('discord');

console.log(myStack);
myStack.push('discord');

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const node = new Node(value);

        if (this.first === null) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.length++;
    }

    dequeue() {
        const item = this.first;

        this.first = this.first.next;

        if (this.first === this.last) {
            this.last = null;
        }
        return item;
    }
}

const myQueue = new Queue();

myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
