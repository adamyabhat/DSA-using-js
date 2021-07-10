const rl = require('readline-sync');

sorterArray = rl.question('enter the array to sort with spaces :').split(' ').map(num=>parseInt(num, 10))

for (let i = 1; i < sorterArray.length; i++) {
    for (let j = i; j >= 0; j--) {
        if (sorterArray[j]<sorterArray[j-1]) {
            let temp = sorterArray[j]
            sorterArray[j] = sorterArray[j-1]
            sorterArray[j-1] = temp
        } else{
            break
        }
    }
}
console.log(sorterArray)