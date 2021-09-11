class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {

    constructor() {
        this.length = 0;
        this.head = null
        this.tail = null
    }

    push(val) {
        let newNode = new Node(val)

        if (!this.head) {
            this.tail = newNode
            this.head = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++
        return this;
    }

    traverse() {
        let current = this.head
        while (current) {
            current = current.next
        }
    }

    pop() {
        if (!this.head) return undefined

        let current = this.head
        let newTail

        while (current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }

    shift() {
        if (!this.head) return undefined
        let oldHead = this.head
        this.head = this.head.next
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return oldHead
    }

    unshift(val) {
        if (!this.head) {
            this.tail = newNode
            this.head = newNode
        }
        let newNode = new Node(val)
        newNode.next = this.head
        this.head = newNode
        length++
        return this
    }

    get(position) {
        if (position < 0 || position >= this.length) return null

        let current = this.head
        for (let i = 1; i <= this.length; i++) {
            if (i === position) {
                return current
            }
            current = current.next
        }
    }

    set(val, position) {
        let foundNode = this.get(position)

        if (foundNode) {
            foundNode.val = val
            return true
        }

        return false
    }

    insert(val, position){
        if (position < 0 || position > this.length) return false
        if(position === this.length) !!this.push(val)
        if(position === 0) !!this.unshift(val)

        let newNode = new Node(val)
        let before = this.get(position - 1)
        let after = this.get(position)
        before.next = newNode
        newNode.next = after
        this.length++
        return true
    }
    
    remove(position){
        if (position < 0 || position > this.length) return false
        if(position === this.length -1 ) this.pop()
        if(position === 0) this.shift()

        let before = this.get(position - 1 )
        let removedNode = before.next
        before.next = removedNode.next
        this.length--
        return removedNode
    }

    reverse(){ 
        let current = this.head
        this.head = this.tail
        this.tail = current
        
        let next 
        let prev = null

        for(let i = 0; i < this.length; i++){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return this
    }
}

