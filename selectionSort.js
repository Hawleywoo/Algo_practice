// Selection sort instead of large values bubbling to the top smaller values aorted first

function selectionSort(arr){
    let currentLowest 
    for(let i = 0; i < arr.length ; i ++){
        currentLowest = i
        for(let j = i +1; j < arr.length ; j++){
            if(arr[j] < arr[currentLowest]){
                currentLowest = j
            }
        } 
        if(i !== curreLowest){
            let temp = arr[i]
            arr[i] = arr[currentLowest]
            arr[curreLowest] = temp
        }
        
    }
}