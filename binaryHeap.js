// for any index of array n
// the left child is stored at 2n + 1
// the right child is stored at 2n + 2

// if you have a child node adn want to find parent
// Math.floor (n-1)/2

class MaxBinaryHeap{
    constructor(){
        this.values= []
    }
    insert(value){
        this.values.push(value)
        if(this.values.length === 1) return 

        let index = this.values.length -1 
        let findParent = (index) => Math.floor((index-1)/2)
        let parentIndex = findParent(index)

        while(value > this.values[parentIndex] && index !== 0 ){
            console.log(index)
            console.log(parentIndex)

            let tempVal = this.values[parentIndex]
            this.values[parentIndex] = value
            this.values[index] = tempVal
            
            index = parentIndex
            parentIndex = findParent(index)
        }
    }
}