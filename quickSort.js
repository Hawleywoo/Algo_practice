function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right)
        quickSort(arr, left, pivotIndex -1)
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

// Exploit arrays 0 or 1 are sorted
// works by selecting one element called pivot and finding the index where the pivot 
// should end up in the sorted array
// once pivot is positioned appropriateley quick sort can be applied to either side of pivot

function pivot(arr, start=0, end=arr.length-1){
    function swap(arr, i, j){
        let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
    }
    let pivot = arr[start]
    let swapIndex = start
    for(let i = start +1; i<arr.length; i++){
        if(pivot > arr[i]){
            swapIndex++
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex
}

// designate pivot and rearrange elements in the array so that all the values less than the pivot
// are moved to the left and the values greater are moved to the right
// order doesnt matter

