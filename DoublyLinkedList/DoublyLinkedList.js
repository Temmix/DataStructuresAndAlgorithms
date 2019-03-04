class Node {
    constructor(value) {
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        let newNode = new Node(value);
        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode
        this.length++;
        return this;
    }

    prepend(value) {
        let newNode = new Node(value);
        let current = this.head;
        newNode.next = current;
        current.previous = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    print() {
        let currentNode = this.head;
        const arr = [];
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }

    insert(index, value) {
        if (index >= this.length)
            return this.append(value);

        let newNode = new Node(value);
        if (index === 0) {
            let currentHead = this.head;
            currentHead.previous = newNode;
            newNode.next = currentHead;
            this.head = newNode;
            this.length++;
            return this;
        }

        let leader = this.traverseIndex(index - 1);
        let follower = leader.next;
        newNode.next = follower;
        newNode.previous = leader;
        follower.previous = newNode;
        leader.next = newNode;
        this.length++;
        return this;
    }

    remove(index) {
        if (index >= this.length) return;
        if (index === 0) {
            let currentHead = this.head;
            this.head = currentHead.next;
            this.head.previous = null;
            this.length--;
            if (this.length === 0)
                this.tail = this.head;
            return this;
        }

        let leader = this.traverseIndex(index - 1);
        let target = leader.next;
        let follower = target.next;
        leader.next = follower;
        follower.previous = leader;
        this.length--;
        return this;
    }

    traverseIndex(index) {
        // do check for the validity of index
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}


var doubleLinkedList = new DoublyLinkedList(10);
doubleLinkedList.append(5);
doubleLinkedList.prepend(1);
doubleLinkedList.insert(0, 30);
console.log(doubleLinkedList.head.next.value);
console.log(doubleLinkedList.tail);
console.log(doubleLinkedList);
console.log(doubleLinkedList.print());

doubleLinkedList.remove(2)
console.log(doubleLinkedList);
console.log(doubleLinkedList.print());