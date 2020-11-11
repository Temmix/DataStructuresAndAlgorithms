class MyArray {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
    // typical array push will return length of the array after operation
  }

  pop() {
    let lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    // O(n) operation
    const item = this.data[index];
    this._shiftItems(index);
    return item;
  }

  // internal method/funx (starts with _)
  _shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    // delete the last item and decrease the length.
    delete this.data[this.length - 1];
    this.length--;
  }
}

var myArray = new MyArray();
// push
console.log("***** Push Operation *****");
myArray.push(1);
myArray.push(2);
myArray.push(3);
myArray.push(4);
myArray.push(5);
myArray.push(6);
console.log(myArray);
console.log(myArray.length);

// pop
console.log("***** Pop Operation *****");
myArray.pop();
console.log(myArray);
console.log(myArray.length);

// delete
console.log("***** Delete Operation *****");
myArray.delete(3);
console.log(myArray);
console.log(myArray.length);
