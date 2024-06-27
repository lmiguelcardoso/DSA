class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    // O(1)
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    // O(1)
    set(key, value) {
        // first hash the key in order to get an unique identifier to prevent slowness when access the data
        const address = this._hash(key);
        // then create a bucket in order to prevent colision
        if (!this.data[address]) {
            this.data[address] = [];
        }
        // finally insert the data in this new data structure
        this.data[address].push([key, value]);
        return address;
    }

    //O(1) best scenario
    //O(N) when colision, iteration in bucket needed
    // colision happens when bad hash function or low memory allocation
    get(key) {
        const hashedKey = this._hash(key);
        const bucket = this.data[hashedKey];

        if (bucket.length) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) return bucket[i];
                // [['key', 'value'], ['key1', 'value1']]
            }
        }
        return null;
    }

    //O(N) best scenario
    //O(N2) when colision
    keys() {
        const keys = [];

        if (!this.data.length) return null;

        for (let i = 0; i < this.data.length; i++) {
            const bucket = this.data[i];
            if (!bucket) continue;

            // usual case, when no colision
            if (bucket.length === 1) {
                const key = bucket[0][0];
                keys.push(key);
                continue;
            }
            // colision workaround
            for (let j = 0; j < bucket.length; j++) {
                const key = bucket[j][0];
                keys.push(key);
            }
        }

        return keys;
    }

    values() {
        const values = [];

        if (!this.data.length) return null;

        for (let i = 0; i < this.data.length; i++) {
            const bucket = this.data[i];
            if (!bucket) continue;

            // usual case, when no colision
            if (bucket.length === 1) {
                const value = bucket[0][1];
                values.push(value);
                continue;
            }
            // colision workaround
            for (let j = 0; j < bucket.length; j++) {
                const value = bucket[j][1];
                values.push(value);
            }
        }
        return values;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('key', 'value');
myHashTable.set('key1', 'value2');
myHashTable.set('key2', 'value3');
// console.log(myHashTable.get('key'));
console.log(myHashTable.keys());
console.log(myHashTable.values());
