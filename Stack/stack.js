class StackWithLinkedList {
  constructor(value) {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
      return this;
    }

    let current = this.top;
    this.top = newNode;
    this.top.next = current;
    this.length++;
    return this;
  }

  pop() {
    let current = this.top;
    if (current && current.next) {
      this.top = current.next;
      this.length--;
    } else {
      this.top = null;
      this.bottom = null;
    }
    return this;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// ===========================================================================================================================

class Stack {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
    return this;
  }

  pop() {
    this.data.pop();
    return this;
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

var stack = new Stack(); //new StackWithLinkedList();
stack.push("Google.com");
stack.push("WebBrains.net");
stack.push("Santander.co.uk");
console.log(stack.peek());

stack.pop();
console.log(stack);
console.log(stack.peek());
