class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = new Node(value);
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = new Node(value);
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  breadthFirstSearch(){
     var node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        while(queue.length){
           node = queue.shift();
           data.push(node.value);
           if(node.left) queue.push(node.left);
           if(node.right) queue.push(node.right);
        }
        return data;
  }

  DFS() {
    var data = []
    var Q = []
    Q.push(this.root)

    while(Q.length){
      let node = Q.shift()
      data.push(node.value)
      
      node.left && Q.push(node.left)
      node.right && Q.push(node.right)
    }
    return data
  }
  
  DFSPreOrder() {
      var data = []
      var keeper = []
      var current = this.root 

      function helper(current) {
        data.push(current.value)
        current.left && helper(current.left)
        current.right && helper(current.right) 
      }
    
    helper(current)
    return data
  }
  
  DFSInOrder() {
      var data = []
      var keeper = []
      var current = this.root 

      function helper(current) {
        current.left && helper(current.left)
        data.push(current.value)
        current.right && helper(current.right)
      }
    
    helper(current)
    return data
  }
  
  DFSPostOrder() {
      var data = []
      var keeper = []
      var current = this.root 

      function helper(current) {
        current.left && helper(current.left)
        current.right && helper(current.right)
        data.push(current.value)
      }
    
    helper(current)
    return data
  }
}

var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50);
console.log(binarySearchTree.DFSInOrder()) // [1, 5, 10, 12, 15,20, 50]

var binarySearchTree2 = new BinarySearchTree();
binarySearchTree2
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50);
console.log(binarySearchTree2.DFSPostOrder()) // [5, 1, 12, 10, 50, 20, 15]

var binarySearchTree3 = new BinarySearchTree();
binarySearchTree3
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50);
console.log(binarySearchTree3.DFSPreOrder()) // [15, 10, 1, 5, 12, 20, 50]

var binarySearchTree4 = new BinarySearchTree();
binarySearchTree4
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50);
console.log(binarySearchTree4.breadthFirstSearch()) // [(15, 10, 20, 1, 12, 50, 5)];
