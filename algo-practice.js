function powerBase(base, power) {
    if (power === 0) return 1;
    return base * powerBase(base, power - 1)
}

// console.log(powerBase(2,4))


function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}
// console.log(factorial(7))


function fib(num) {
    // add whatever parameters you deem necessary - good luck! 

    if (num <= 2) return 1;

    return fib(num - 2) + fib(num - 1)
}

console.log(fib(6))


// 1, 1, 2, 3, 5, 8, 13, 21, 34, 
// 1, 2, 3, 4, 5, 6,  7,  8,  9, 10, 11, 12, 13, 14,
// 1.3k
// 1agPLTC9fIu280dLzXx6ygTda0bHWF5fVSksGrMoN7tJBiLbh9CqW6yQxEnArSRuKeNES6oJXzzWvcZwWDomqfTWvRH7c8zrICCqg92m8Bm3LQIcW4qlF4zlCQWCtUj3QEoUpvhuAHyH6hcMzfOSKVagEnFf9A7iUlVrK3i3YyieNlEkpCN1ulGkuQRbyMI078DLGSWqejSIbCTVVSrD6tUTIFlqdXPW6jccp05nn9nKiWMuum1qIbeNfskS42oDDd5XJ4vPI9INj2VGsleMfpdlHqyYH8epF1ilzkN5UkIj9B5aJa4pY4DPPtNsU8U87bXanL2Ow1qmHAPXlkQDCni7HESWoMMaQqaZkxyomtA6rUSdDmwJ7BgWXiUvHgl8ytLCtn9cdEhKzqPYlIkKPdX9Eth0lpNKQkepvtE3BqKiucolhkPnwCyEp7FAbwNz4cxRBgSHOOqRX78I1iYnG7kr2pRHTCyLu4aZRDVwOG3LjTIr6bR1FAicr3KwRq3K6V4XP9QaGy75G8wtdwp6deL13CTNYHD1SuNvxGCtNOi867ZtZODTMddGwMkZZrEFFLvJLTEhvVdlAu7RGJ1L9l46XG62GjA6o3hxJlnyGfi1bzPqx2kKXpPikeRhGZ6B4GatWlxoCISxZNsQ1rzDtV1uAqd31FJXYkBeFqvlQajt4B1DEeuakjzRSFgplBlWJ0AElAhCqzx6qtMcSZ5JoqZhi7JyXJkUzEbeN8vAZMvPPwpelVE5FJ1I4WnpmiwfmjP8gnhcjk7ZEbz9ooXBpHXLZNZOLJTSW2TUhIPHEHWCGk5YNWVB5NyGnZBU1hXCfn7tmQ29ABxEQEpdRxm9JPECr0oew4SLCpfSBbUtJLATVqPbFubY3NbnPFMTDRofXzzsZrK5MFry8wWnGpRNW66iVE2rUeqd9YLCBsq6wUHETNL8CMbTIkCMbHnTZytcbol2K7eicr5JfGfvwPhVQiiL58pnfbBzCVKyFDRnNpoEvlkrdJ65kJA0q2W72BtCPeSpoN1cFUGEAJoXOhTwBa8kXNrKOOI2oodd8DbdamznGuoTRUl04BsptkEaMymWquwiM2PTyINmoEctk1I2adBTkxRJoNSb4B1H0UYlRmTjl3JtdQuX3P1OaFnOscWuLOiAk29Z6U4UgNhjctbDRFllmHFU2DXCOjppVDDkuueqshEBIuzgyCC4sHGZXLnnIJ1dsJaNU8fSRcqH6O2wiOgfpgTs8RDULuB1oXTMkwfVnh0GlYyVyT

// 1.1k
// WRswI03L5YXDJ3oVnNL9akOOZciJTjH8ZzqniOAqdfDHUQnxtwk6QOfrFacgVEvhzlY9d0VI0mo05vQYDCWjVMkR9ZVuXVxOVmeizUr4BQyYKaFjcxYoB5BryUBvd45xN2aPOkErEbKHWNnaYOtnbsHkRCiDeQvKm39mU3RUS1dqU4BaNwNmnNQxVqGFDc40UukmwXiuZkzADnNk5YpEYuheTBuIXRefSalkLQkXs7kyxiD0Q24SqEYwZuZ9RVNEuXM64YrIJa8ZPcLDJtdIymipP1clhFLzTtV1Eh7ZjdC17o7bDZKEiD2iQKkp73UmNypnYgxMhbUOLmDpit2dJHbEsiQNNN7kDe2DSBhiBRW3jxCzqJmkPM8bkxIOl4vrjuuZOsD51JgTL9njPrp6EhSciYh0oA9flulzuo2GC3HM0DDK4GoKlpkvmVsDCtJwGCN8Q7aSVdtEWc2JbF5YuhGouWqKdvH6RTMlpO7ETqj5MJAyMZEtfr4jmXEtM5qzQjQuPdbAdoTVb3asp8bONM7yTLq13DRWhxnQYiJXDHcCqxUTbw8AJ4MvUbMJnIahkswv6NJsuWtaoQGuyHzPGAabmrRQNvKtZbwNBfojltOVNjvGDc1IPDE5OsFsR8uCXNQ5SUqmUhtLZgVftqtDD6Mppcj5gaeRXFrqIblkM5W710qcPlQkDKKHeWBpYcpFGr4kQTt0OIrEyPTV49qEhJuE0H8Hip5B8ALvY40O4RqvJyQvvA4eRIkudoLmqh4DGH3JZHIbsLqgWhUbKthMAjpvFnwaXkoMigDzIOJf5BTCJu7gCJRnA6t4mDUFNVSlMbHqGF2t3GrzpqjY4JHhdTvVQcJc898wZSJiCbUvahWtRQkMB21SdFPSQqe7KKAD31TRWt510ncw81yJHtIZaIVIrsIEmc0DLURkLM6NXYp65aVdSJhlPuLHxqzVpEThHutC7h4Ivq6DV2vJz4GCJxP7JYOGMgBDJRydHrI0B93fPZA8JKQlEkHtAsO61c969JEtDdXvgutTg9

function binarySearch(sortedArr, value) {
    // add whatever parameters you deem necessary - good luck!
    let left = 0
    let right = sortedArr.length - 1
    let i = Math.floor((sortedArr.length - 1) / 2)

    while (sortedArr[i] !== value && left <= right) {
        console.log(i, 'i')
        console.log(right, 'right')
        console.log(left, 'left')

        if (sortedArr[i] < value) {
            left = i + 1
    
        } else {
            right = i - 1
        }
        i = Math.floor((right + left) / 2)
        
    }
    if(sortedArr[i] === value){
        return i
    }
    return -1
}


// Bubble sort i starts from back j from the front if j + 1 is less than j swap if there are no swaps break
// Moves big numbers to the back
// O of n^2 worst case best case O of n

function bubbleSort(arr){
    let noSwaps;
    for(let i = arr.length; i > 0 ; i--){
        noSwaps = true;
        for(let j = 0; j < i -1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
                noSwaps = false
            }
        }
        if(noSwaps) break;
    }
}
// Selection sort moves through finds a lower number then continues throught o check if there is a smaller number 
// swap with number on the left if at the end of the loop it is the smallest
// if number is not the same as lowest swap
// keep a variable with the smallest number starting with the first number of the array
// stopping before last number to swap itself and first number
// Moves small numbers to the front

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let lowest = i
        for(let j= i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if( i !== lowest){
            let temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }
    }
    return arr
}