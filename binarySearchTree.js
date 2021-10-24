// BST
// one or two children
// Sorted and data that can be compared
// Every node to the left is less than parent
// Every node to the right is greater than parent


class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value)
        if(this.root === null) {
            this.root = newNode
            return this
        }else{
            let current = this.root
    
            while(true){
                if(current.value === value) return undefined
                if(current.value > value){
                    if(current.left.value){
                        current = current.left
                    }else{
                        current.left = newNode
                        return this
                    }
                }else if(current.value < value){
                    if(current.right){
                        current = current.right
                    }else{
                        current.right = newNode
                        return this
                    }
                } 
            }
        }
    }

    find(value){
        if(this.root === null) return false;
        let current = this.root

        while(current){
            if(current.value === value) return true
            if(current.value > value){
                // LEFT
                current = current.left
            }else{
                // RIGHT
                current = current.right
            }
        }
        return false
    }
}


let tree = new BinarySearchTree()
tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(7)
tree.root.left.right = new Node(9)