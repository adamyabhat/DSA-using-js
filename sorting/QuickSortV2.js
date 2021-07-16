const rl = require('readline-sync');

function quicksort(arr, start, end) {
    if(start>=end) return

    pIndex = partition(arr, start, end)
    quicksort(arr,start,pIndex-1)
    quicksort(arr,pIndex+1,end)
}

function partition(arr, start, end){
    let pivot = arr[end]
    let pIndex = start

    for (let i = start; i < end; i++) {
        if (arr[i]<=pivot){
            let temp = arr[i]
            arr[i] = arr[pIndex]
            arr[pIndex] = temp
            pIndex++
        }        
    }
    let temp = arr[end]
    arr[end ] = arr[pIndex]
    arr[pIndex] = temp

    return pIndex
}

const sorterArray = rl.question('enter the array to sort with spaces :').split(' ').map(num=>parseInt(num, 10))
quicksort(sorterArray, 0, sorterArray.length-1)
console.log(sorterArray)