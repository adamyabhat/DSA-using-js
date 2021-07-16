const rl = require('readline-sync');

const quicksort = arr =>
  arr.length <= 1
    ? arr
    : [
        ...quicksort(arr.slice(1).filter((el) => el < arr[0])),
        arr[0],
        ...quicksort(arr.slice(1).filter((el) => el >= arr[0])),
      ];
    
const sorterArray = rl.question('enter the array to sort with spaces :').split(' ').map(num=>parseInt(num, 10))
const sortedArray = quicksort(sorterArray)
console.log(sortedArray)
