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

    // colts solution
    // insert(value){
    //     this.bubbleUp()
    // }
    
    // bubbleUp(){
    //     let index = this.values.length - 1
    //     const element = this.values[index]
    //     while(index < 0){
    //         let parentIdx = Math.floor((index-1)/2)
    //         let parent = this.values[parentIdx]
    //         if(element <= parent)break

    //         this.values[parentIdx] = element
    //         this.values[index] = parent
    //         index = parentIdx
    //     }
    // }

    // removing from a heap
    // typically remove from the root
    //  replace with most recently added
    // adjust Sink Down
    extractMax(){
        const max = this.values[0]
        const end = this.values.pop()
        this.values[0] = end
        this.sinkDown()


        return max
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

                if(left > element){
                    swap = leftIndex
                }
            }
            if(rightIndex < length){
                right = this.values[rightIndex]
                // checks left to right and if swapped
                if((swap === null && right > element) || (swap !== null && right > left)){
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


