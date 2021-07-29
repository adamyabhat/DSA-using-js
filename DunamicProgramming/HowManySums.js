const howManySums = (targetSum, array) => {
    if (targetSum === 0) return []
    if (targetSum < 0) return null
    for(let i=0; i<array.length; i++) {
        let remainder = targetSum - array[i]
        let remainderCombination = howManySums(remainder, [ ...array.slice(0,i),...array.slice(i+1,array.length)] )
        if (remainderCombination !== null){
            return [...remainderCombination, array[i]]
        }
    }
    return null
}


array=[4,3,2,5,100,200,250,50,390,386,396]
targetSum=1000
let results=[]
for (let i = 0; i < array.length; i++) {
    let sumpath =  howManySums(targetSum, [ ...array.slice(0,i),...array.slice(i+1,array.length)] )
    if (sumpath !== null) {
        results.push(sumpath)
    }
}
console.log(results)