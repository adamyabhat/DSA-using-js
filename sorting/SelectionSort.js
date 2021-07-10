const rl = require('readline-sync');

sorterArray = rl.question('enter the array to sort with spaces :').split(' ').map(num=>parseInt(num, 10))

for (let i = 0; i < sorterArray.length; i++) {
    let minIndex = i
    for (let j = i; j < sorterArray.length; j++) {
        if (sorterArray[j]<sorterArray[minIndex]) {
            minIndex = j
        }
        let temp = sorterArray[i]
        sorterArray[i] = sorterArray[minIndex]
        sorterArray[minIndex] = temp
    }
}
console.log(sorterArray)