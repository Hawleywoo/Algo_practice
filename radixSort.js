function radixSort(){

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
