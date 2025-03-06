class Node {
    constructor(val) {
        this.val = val;
        this.next = null;   
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    
    insert(index, value){
        if(index < 0 || index > this.length + 1) return false;
        if(index === this.length) {
            this.length++
            return !!this.push(value)
        }
        
        let current = this.head
        let previous = null
        let counter = 0
        let newNode = new Node(value)
        
        while(current){
            if(counter === index){
                previous.next = newNode
                newNode.next = current
                this.length++
                return true
            }
            
            counter++
            previous = current
            current = current.next
        }
        return false
    }
    
    pop(){
        if(this.length === 0) 
            return undefined
            
        var current = this.head
        var tail = this.tail
        if(current === tail){
            this.head = null
            this.tail = null 
            this.length = 0
            return current
        }
        
        while(current){
            if(current.next === this.tail){
                current.next = null
                this.length--
                this.tail = current
            }
            current = current.next
        }
        return tail
    }
    
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    
    set(index, val){
        let selectedNode = this.get(index)
        if(selectedNode) {
            selectedNode.val = val
            return true
        }
        return false;
    }
    
    // 1 > 2 > 3 > 4 > 5 
    rotate(index) {
        let rotateTimes = index % this.length
        if(rotateTimes === 0) return;
        
        let current = this.head
        let tail = this.tail
        let forwardRotate = rotateTimes > 0
        
        while(rotateTimes !== 0){
            if (forwardRotate) {
                tail.next = current
                this.tail = current
                current = current.next;
                
                this.tail.next = null
                tail = this.tail
                this.head = current
                rotateTimes--
            } else {
                // make tail the head and make tail -1 new tail
                let newTail = this.get(this.length - 2)
                this.head = tail
                this.head.next = current 
                this.tail = newTail
                this.tail.next = null
                tail = this.tail
                current = this.head 
                rotateTimes++
            } 
        } 
    }
}

var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;
 
singlyLinkedList.rotate(3);
singlyLinkedList.head.val; // 20
singlyLinkedList.head.next.val; // 25
singlyLinkedList.head.next.next.val; // 5
singlyLinkedList.head.next.next.next.val; // 10
singlyLinkedList.head.next.next.next.next.val; // 15
singlyLinkedList.tail.val; // 15
singlyLinkedList.tail.next; // null

var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;
 
singlyLinkedList.rotate(-1);
singlyLinkedList.head.val; // 25
singlyLinkedList.head.next.val; // 5
singlyLinkedList.head.next.next.val; // 10
singlyLinkedList.head.next.next.next.val; // 15
singlyLinkedList.head.next.next.next.next.val; // 20
singlyLinkedList.tail.val; // 20
singlyLinkedList.tail.next // null

var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;
 
singlyLinkedList.rotate(1000);
singlyLinkedList.head.val; // 5
singlyLinkedList.head.next.val; // 10
singlyLinkedList.head.next.next.val; // 15
singlyLinkedList.head.next.next.next.val; // 20
singlyLinkedList.head.next.next.next.next.val; // 25
singlyLinkedList.tail.val; // 25
singlyLinkedList.tail.next // null
