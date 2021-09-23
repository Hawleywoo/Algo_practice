// First In First Out FIFO 
class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null
        this.tail = null
        this.size = 0
    }

    enqueue(val){
        let newNode = new Node(val)
        if(this.size === 0){
            this.first = newNode
            this.tail = newNode
        }else{
            this.last.next = newNode
            this.last = newNode
        }

        return ++this.size
    }

    dequeue(){
        if(!this.first) return null
        let oldHead = this.first
        if(this.first === this.last){
            this.last = null
        }
        this.first = this.first.next
        oldeHead.next = null

        this.size--
        return oldHead
    }
}