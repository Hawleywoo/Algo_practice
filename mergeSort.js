function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

// array of 0 or 1 elements are always sorted

function merge(arrOne, arrTwo){
    let merged = []
    let j = 0
    let i = 0
    while(i < arrOne.length && j < arrTwo.length){
        if(arrOne[i] < arrTwo[j]){
            merged.push(arrOne[i])
            i++
        }else{
            merged.push(arrTwo[j])
            j++
        }
    }
    while(i < arrOne.length){
        merged.push(arrOne[i])
    }
    while(j < arrTwo.length){
        merged.push(arrTwo[j])
    }
}