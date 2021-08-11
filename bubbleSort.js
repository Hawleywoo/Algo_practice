// Bubble Sort

function bubbleSort(arr){
    let noSwaps
    for(let i = arr.length; i > 0; i--){
        noSwaps = true
        for(let j = 0; j <= i - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false
            }
        }
        if(noSwaps) break
    }
    return arr
}

// Larger values bubble to the top it checks all values to the top
// Breaks out of loop if no swaps take place to shorten time complexity
