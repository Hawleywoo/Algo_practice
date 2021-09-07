class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{

    constructor(){
        this.length = 0;
        this.head = null
        this.tail = null
    }

    push(val){
        let newNode = new Node(val)

        if(!this.head){
            this.tail = newNode
            this.head = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++
        return this;
    }

    traverse(){
        let current = this.head
        while(current){
            current = current.next
        }
    }

    pop(){
        if(!this.head) return undefined
        
        let current = this.head
        let newTail

        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }

    shift(){
        if(!this.head) return undefined
        let oldHead = this.head
        this.head = this.head.next
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return oldHead
    }

    unshift(val){
        if(!this.head){
            this.tail = newNode
            this.head = newNode
        }
        let newNode = new Node(val)
        newNode.next = this.head
        this.head = newNode
        length++
        return this
    }

    get(position){
        if(position < 0 || position >= this.length) return null

        let current = this.head
        for(let i = 1; i <= this.length; i++){
            if(i === position){
                return current.val
            }
            current = current.next
        }
    }
}

const list  = new SinglyLinkedList()