const strings = ['a', 'b', 'c', 'd'];

// push O(1) || O(N) when resize a dynamic arr
strings.push('e', 'asda ');
// pop O(1)
strings.pop();
// unshift O(N)
strings.unshift('x');
// splice O(N)
strings.splice(2, 0, 'alien');

console.log(strings);

class ArrayImpl {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(data) {
        this.data[this.length] = data;
        this.length++;
        return this.length;
    }

    get(index) {
        return this.data[index];
    }

    pop() {
        const lastIndex = this.data[this.length];
        delete this.data[this.length - 1];
        this.length--;

        return lastIndex;
    }

    delete(index) {
        const dataToDelete = this.data[index];
        this.shift(index);

        delete this.data[this.length - 1];
        this.length--;
    }

    shift(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
    }
}

const myArray = new ArrayImpl();

myArray.push('a');
myArray.push('b');
myArray.push('c');
myArray.push('d');
myArray.pop();
myArray.delete(0);
console.log(myArray);
