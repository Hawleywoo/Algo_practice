// Create a queue this can be an array FIFO and a variable to store the values
// // of nodes visted
// place the root node in the queue
// loop as long as long as there is anything in the queue
//     dequeue a node from the queue and push the value of the node into the variable of the stored nodes
//     if there is a left property on the node dequeued add it to the queue
//     if there is a right property to the node dequeued add it to the queue


class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    BFS(){
        let data = []
        let queue = []
        let node = this.root
        queue.push(node)

        while(queue.length){
            node = queue.shift()
            data.push(node.value)
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        return data
    }
}
