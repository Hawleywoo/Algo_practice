class Node{
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

    // PreOrder Top Left Down
    DFSPreOrder(){
        let data = []
        let current = this.root

        const traverse = (node) => {
            data.push(node.value)
            if(node.left){
                traverse(node.left)
            }
            if(node.right){
                traverse(node.right)
            }
        }
        traverse(current)

        return data
    }

    // PostOrder goes bottom up left 
    DFSPostOrder(){
        let data = []
        let current = this.root

        const traverse = (node) => {
            if(node.left) {
                traverse(node.left)
            } 

            if(node.right){
                traverse(node.right)
            }

            data.push(node.value)
            
        }

        traverse(current)
        return data
    }

    // traverse the entire left bottom up
    DFSInOrder(){
        let data = []
        let current = this.root

        const traverse = (node) => {
            if(node.left) traverse(node.left)
            data.push(node.value)
            if(node.right) traverse(node.right)
        }

        traverse(current)
        return data
    }
}
