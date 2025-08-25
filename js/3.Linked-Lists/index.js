class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.setPrevious(this.tail);
        this.tail.setNext(newNode);
        this.tail = newNode;
        this.length++;
    }

    find(value) {
        let node = this.head;

        while (node) {
            if (node.value == value) return node;

            node = node.next;
        }
        return null;
    }

    insert(value, index) {
        if (index > this.length) return this.append(value);
        if (index === 0) return this.preppend(value);

        let leader = this.getNode(index - 1);

        const oldNodeInThisPosition = leader.next;

        const newNode = new Node(value);
        newNode.setPrevious(leader);
        newNode.next = oldNodeInThisPosition;
        // leader -> newNode -> oldNodeInthisPosition

        leader.next = newNode;

        this.length++;
    }

    getNode(index) {
        let i = 0;
        let node = this.head;
        console.log(this.toArray());
        while (i < index) {
            node = node.next;
            i++;
        }
        return node;
    }

    preppend(value) {
        const oldHead = this.head;
        const newNode = new Node(value);
        newNode.setNext(oldHead);
        oldHead.setPrevious(newNode);
        this.head = newNode;
        this.length++;

        return this;
    }

    remove(index) {
        if (index >= this.length) return this.pop();
        let leader = this.getNode(index - 1);

        let nodeToDelete = leader.next;

        let newNodeInIPosition = nodeToDelete.next;
        if (nodeToDelete.next) {
            newNodeInIPosition.setPrevious(leader);
        }

        leader.setNext(newNodeInIPosition);

        this.length--;
        return this.toArray();
    }

    pop() {
        const leader = this.getNode(this.length - 1);

        leader.next = null;
        this.length--;
        return this.toArray();
    }

    shift() {
        const oldHead = this.head;

        this.head = oldHead.next;

        this.length--;

        return this.toArray();
    }

    toArray() {
        const array = [];
        let node = this.head;
        while (node !== null) {
            array.push(node.value);
            node = node.next;
        }

        return array;
    }

    reverse() {
        if (!this.head.next) return this.head;

        let prev = this.head;
        this.tail = prev;
        let current = prev.next;

        while (current !== null) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head.next = null;
        this.head = prev;

        return this.toArray();
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }

    setNext(next) {
        this.next = next;
    }
    setPrevious(previous) {
        this.previous = previous;
    }
}

const myList = new LinkedList(10);
myList.append(25);
myList.append(50);
myList.append(70);
myList.insert(600, 20);
myList.preppend(157);
myList.insert(666, 1);
myList.append(70);

myList.remove(7);
myList.remove(7);
// console.log(myList.toArray());
console.log(myList.reverse());
// console.log(myList.find(50));
