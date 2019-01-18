class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        return this.first;
    }

    enqueue(value) { 
        let newNode = new Node(value);
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
            this.length++;
            return this;
        }
        this.last.next = newNode;
        this.last = newNode;
        this.length++;
        return this;
    }

    dequeue() {
        if(!this.first) return null;
        if(this.length === 1){
            this.first = null;
            this.last = null;
            this.length--;
            return this;
        }
 
        this.first = this.first.next;
        this.length--;
        return this;
    }
}


class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

let queue = new Queue();
queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);
console.log('The peek is --------------')
console.log(queue.peek())

console.log()
console.log(queue);
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue)