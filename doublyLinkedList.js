class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {

    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value) {
        let newNode = new Node(value)

        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }

        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined;

        let oldTail = this.tail

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = oldTail.prev
            this.tail.next = null
            oldTail.prev = null
        }

        this.length--
        return oldTail
    }

    shift(){
        if (!this.head) return undefined;

        let oldHead = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }

        this.length--
        return oldHead
    }

    unshift(val){
        let newNode = new Node(val)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode

        length++
        return this
    }

    get(index){
        if( index < 0 || index >= this.length) return null

        let current
        let count = 0
        if( index <= Math.floor(this.length/2)){
            current = this.head
            while(count !== index){
                current = current.next
                count++
            }
        }else{
            count = this.length - 1
            current = this.tail
            while(count !== index ){
                current = current.prev
                count--
            }
        }

        return current
    }

    set(index, val){
        
        let foundNode = this.get(index)
        if(foundNode !== null){
            foundNode.val = val
            return true
        }
        return false
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val)
        
        let newNode = new Node(val)
        let foundNode = this.get(index);
        let before = foundNode.prev
        
        before.next = newNode
        newNode.prev = before
        
        newNode.next = foundNode
        foundNode.prev = newNode
        
        length++
        return true
    }
    
    remove(index){
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()

        let foundNode = this.get(index)
        let before = foundNode.prev
        let after = foundNode.next

        before.next = after
        after.prev = before

        foundNode.next = null
        foundNode.prev = null
        this.length--
        return foundNode
    }
}