class LinkedList {
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        let newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode
        this.length++;
        return this;
    }

    prepend(value){ 
        let newNode = new Node(value);
        let current = this.head;
        newNode.next = current;
        this.head = newNode; 
        this.length++;
        return this;
    }

    print(){
        let currentNode = this.head;
        const arr = [];
        while(currentNode !== null){
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }

    insert(index, value){
        if(index >= this.length) 
            return this.append(value);

        let newNode = new Node(value);
        let leader = this.traverseIndex(index - 1);
        let nextHolder = leader.next;
        newNode.next = nextHolder;
        leader.next = newNode;
        this.length++;
        return this; 
    }

    remove(index){
        if(index >= this.length) return;  
        if(index === 0) {
            let currentHead = this.head;
            this.head = currentHead.next;
            this.length--; 
            if(this.length === 0)
              this.tail = this.head;
            return this;
        }

        let leader = this.traverseIndex(index - 1); 
        let nextHolder = leader.next; 
        leader.next = nextHolder.next;
        this.length--;
        return this; 
    }

    reverse(){
        if(this.length === 1)
            return this;

        let first = this.head;
        this.tail = this.head;
        let pointer = first.next;
        while(pointer){
            const temp = pointer.next;
            pointer.next = first;
            first = pointer;
            pointer = temp; 
        }
        this.head.next = null;
        this.head = first;
        return this;
    }

    traverseIndex(index){
        // do check for the validity of index
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){ 
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}


var linkedList = new LinkedList(0);
linkedList.append(5);
linkedList.append(10);
linkedList.prepend(-5);
linkedList.append(25);
linkedList.append(30);
linkedList.prepend(-10);
linkedList.insert(5, 20);
linkedList.insert(20, 35); 
linkedList.remove(1);
linkedList.remove(0);
console.log('All values ' + linkedList.print());
console.log(linkedList)

linkedList.reverse();
console.log('All values reversed ' + linkedList.print());
console.log(linkedList)