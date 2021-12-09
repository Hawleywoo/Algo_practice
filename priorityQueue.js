class PriorityQueue{

    constructor(){
        this.values = []
    }

    enqueue(value, priority){
        const newNode = new Node(value, priority)

        this.values.push(newNode)

        if(this.values.length === 1) return 

        let index = this.values.length -1 
        let findParent = (index) => Math.floor((index-1)/2)
        let parentIndex = findParent(index)

        while(newNode.priority < this.values[parentIndex].priority && index !== 0 ){
            console.log(index)
            console.log(parentIndex)

            let tempNode = this.values[parentIndex]
            this.values[parentIndex] = newNode
            this.values[index] = tempNode
            
            index = parentIndex
            parentIndex = findParent(index)
        }

    }

    dequeue(){

    }
}

class Node {

    constructor(value, priority){
        this.value = value
        this.priority = priority
    }
}