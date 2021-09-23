// Data collection needs to abide LIFO Last In First Out 
// 
class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Stack{
    constructor(){
        this.first = null
        this.tail = null
        this.size = 0
    }

    pop(){
        if(this.size === 0) return null
        let oldFirst = this.first
        if(this.first === this.tail) {
            this.last = null
        }
        this.first = this.first.next 
        oldFirst.next = null
        
        this.size--
        return oldFirst
    }

    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.first = newNode
            this.tail = newNode
        }else{
            let temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
    }
}