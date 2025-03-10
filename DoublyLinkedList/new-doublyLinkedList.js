class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
            this.length++;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            this.length++;
         }
        return this;
    }
    
    pop(){
        if(this.length === 0) return undefined
        if(this.length === 1) {
            let current = this.head
            this.head = null
            this.tail = null
            this.length--
            return current
        }
        
        var current = this.tail
        var prevNode = current.prev 
        
        prevNode.next = null
        this.tail = prevNode
        current.prev = null
        this.length--
        return current
        
    }
    
    get(index){
        if(index < 0 || index > this.length - 1) return null
        const forward = (this.length / 2 ) > index
        let current = null
        let count = 0
        
        if(forward){
            current = this.head 
            while(count != index){
                current = current.next
                count++
            }
        } else {
            current = this.tail
            count = this.length - 1
            while(count != index){
                current = current.prev
                count--
            }
        } 
        return current;
    }
    
    shift(){
        if(this.length === 0) return undefined
        if(this.length === 1){
            var current = this.head
            this.head = null
            this.tail = null
            this.length--
            return current
        }
        
        var current = this.head
        var nextNode = current.next
        
        current.next = null
        nextNode.prev = null
        this.head = nextNode
        this.length--
        return current
        
    }
    
    unshift(val){
        if(this.length === 0) return this.push(val)
        
        var newNode = new Node(val)
        var current = this.head
        
        current.prev = newNode
        newNode.next = current
        this.head = newNode
        this.length++
        return this
        
    }
    
    set(index, val){
        var foundNode = this.get(index)
        if(foundNode){
            foundNode.val = val 
            return true
        }
        return false
    }
    
    insert(index, val) {
         if(index < 0 || index > this.length) return false
         if(index === this.length) return !!this.push(val)
         
         var newNode = new Node(val)
         if(index === 0){ 
             let current = this.head
             current.prev = newNode
             newNode.next = current
             this.head = newNode
             this.length++
             return true
         }
          
         let current = this.get(index)
         let beforeNode = current.prev
         
         beforeNode.next = newNode
         newNode.prev = beforeNode 
         current.prev = newNode
         newNode.next = current
         
         this.length++
         return true
    }
    
    remove(index) {
        let current = null
        
        if(index === 0){
           current = this.head
           this.head = null
           this.tail = null
           this.length-- 
           return current
        } 
        
        if(index === this.length - 1){
            current = this.tail
            let previous = current.prev
            current.prev = null
            previous.next = null
            this.length--
            this.tail = previous
            return current
        }
       
        current = this.get(index)
        if(current){
           let beforeNode = current.prev
           let afterNode = current.next
           
           current.next = null
           current.prev = null
           beforeNode.next = afterNode
           afterNode.prev = beforeNode 
           
           this.length-- 
           return current
        }
    }
    
    reverse(){
        let current = this.tail
        let head = this.head
        let tail = this.tail
        let count = 0
        while(count < this.length){
           let prevCurrent = current.prev
           let afterCurrent = current.next
            
           current.next = prevCurrent
           current.prev = afterCurrent 
           
           current = prevCurrent
           count++
        }
        
        this.head = tail
        this.head.prev = null
        this.tail = head
        this.tail.next = null
        return this
    }
}

 let doublyLinkedList = new DoublyLinkedList;
// doublyLinkedList.push(5); // doublyLinkedList
// doublyLinkedList.length; // 1
// doublyLinkedList.head.val; // 5
// doublyLinkedList.tail.val; // 5
// doublyLinkedList.head.prev // null
// doublyLinkedList.push(10); doublyLinkedList 
// doublyLinkedList.length; // 2
// doublyLinkedList.head.val; // 5
// doublyLinkedList.head.next.val; // 10
// doublyLinkedList.tail.val; // 10
// doublyLinkedList.head.next.prev.val // 5
// doublyLinkedList.push(15); doublyLinkedList
// doublyLinkedList.length; // 3
// doublyLinkedList.head.val; // 5
// doublyLinkedList.tail.val; // 15
// doublyLinkedList.tail.prev.val; // 10
// doublyLinkedList.head.next.next.val; // 15
 
// doublyLinkedList.pop().val; // 15
// doublyLinkedList.length; // 2
// doublyLinkedList.pop().val; // 10
// doublyLinkedList.length; // 1
// doublyLinkedList.pop().val; // 5
// doublyLinkedList.length; // 0
// doublyLinkedList.pop(); // undefined
// doublyLinkedList.length; // 0

// doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20)
doublyLinkedList.reverse(); // singlyLinkedList;
doublyLinkedList.length; // 4
doublyLinkedList.head.val; // 20
doublyLinkedList.head.next.val; // 15
doublyLinkedList.head.next.next.val; // 10
doublyLinkedList.head.next.next.next.val; // 5
