class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;  
        this.size = 0;
    }
    
    push(val){
        let newNode = new Node(val)
        if(!this.size) {
            this.first = newNode
            this.last = newNode
        }else {
            let first = this.first
            newNode.next = first 
            this.first = newNode 
        }
        return ++this.size
    }
    
 pop(){
        if(!this.size) return null
        
        let first = this.first
        if(this.first === this.last){
            this.last = null
        }
        this.first = first.next
        first.next = null
        
        this.size--
        return first.value
    }
}

let stack = new Stack();
 
stack.push(10) // 1
stack.first.value // 10
stack.last.value // 10
stack.push(100);
stack.first.value // 100
stack.last.value // 10
stack.push(1000);
stack.first.value // 1000
stack.last.value // 10
 
stack = new Stack();
stack.push(10) // 1
stack.size // 1
stack.push(100) // 2
stack.size // 2
stack.push(1000) // 3
stack.size // 3

stack = new Stack();
stack.push(10);
stack.push(100);
stack.push(1000);
var removed = stack.pop();
removed // 1000
stack.size // 2
stack.pop();
stack.pop();
stack.size // 0

// =============================================================================================

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


// ============================================================================================================================
