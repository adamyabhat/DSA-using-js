const howManySums = (start, localSum, finalSum, localArray, array) => {
    if (localSum === finalSum) {
        console.log(localArray)
    }
    for(let i = start; i < array.length; i++) {
        if (localSum+array[i] > finalSum) continue
        if (i>start && array[i]===array[i-1]) continue
        localArray.push(array[i])
        howManySums(i+1, localSum+array[i], finalSum, localArray, array)
        localArray.pop()
    }
}

const combination = (array, targetSum) => {
    array.sort((a,b) => a-b)
    howManySums(0,0,targetSum,[],array)
}

array=[4,3,2,5,100,200,250,50,390,386,396]
targetSum=1000
combination(array,targetSum)