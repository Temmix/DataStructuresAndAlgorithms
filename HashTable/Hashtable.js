class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let x = 0; x < this.data[i].length; x++) {
          keysArray.push(this.data[i][x][0]);
        }
      }
    }
    return keysArray;
  }
}

var hashTable = new HashTable(2);
hashTable.set('grapes', 1000);
hashTable.set('apples', 1790);
hashTable.set('oranges', 20);
console.log(hashTable.data);

console.log(hashTable.get('grapes'));
console.log(hashTable.get('oranges'));
console.log(hashTable.get('apples'));

console.log(hashTable.keys());
