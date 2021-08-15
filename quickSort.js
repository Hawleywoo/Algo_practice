function quickSort(arr){

}

// Exploit arrays 0 or 1 are sorted
// works by selecting one element called pivot and finding the index where the pivot 
// should end up in the sorted array
// once pivot is positioned appropriateley quick sort can be applied to either side of pivot

function pivot(arr, start=0, end=arr.length-1){
    let pivot = arr[start]
    let swapIndex = start
    for(let i = start +1; i<arr.length; i++){
        if(pivot > arr[i]){
            swapIndex++
        }
    }
}

// designate pivot and rearrange elements in the array so that all the values less than the pivot
// are moved to the left and the values greater are moved to the right
// order doesnt matter