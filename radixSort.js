function radixSort(nums){
    let maxDigitCount = mostDigits(nums)
    for(let i = 0; i < maxDigitCount; i++){
        let digitBuckets = Array.from({length: 10}, () => [])
        for(let j = 0; j < nums.length; j++){
            let digit = getDigit(nums[j],i)
            digitsBucket[digit].push(nums[i])
        }
        nums = [].concat(...digitBuckets)
    }
    return nums
}

// Doesnt work with comparrisons
// works on numbers
// exploits the fact that numbers with more digits are 
// its a bigger number
// group in buckets based on specific digits
// start with right most digit

function getDigit(num, position){
    return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10
}

function digitCount(num){
    if(num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(numbers){
    let maxDigits = 0
    for(let i = 0; i < numbers.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}