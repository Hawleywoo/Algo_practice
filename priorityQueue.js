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
        const minNode = this.values[0]
        const end = this.values.pop()
        if(this.values.length > 0){
            this.values[0] = end
            this.sinkDown()
        }

        return minNode
    }

    sinkDown(){
        let index = 0
        let length = this.values.length
        const element = this.values[0]

        while(true){
            let leftIndex = 2 * index + 1
            let rightIndex = 2 * index + 2
            let left, right
            let swap = null

            if(leftIndex < length){
                left = this.values[leftIndex]

                if(left.priority < element.priority){
                    swap = leftIndex
                }
            }
            if(rightIndex < length){
                right = this.values[rightIndex]
                // checks left to right and if swapped
                if((swap === null && right.priority < element.priority) || (swap !== null && right.priority < left.priority)){
                    swap = rightIndex
                }
            }

            if(swap === null) break;
            this.values[index] = this.values[swap]
            this.values[swap] = element
            index = swap
        }
    }

}

class Node {

    constructor(value, priority){
        this.value = value
        this.priority = priority
    }
}