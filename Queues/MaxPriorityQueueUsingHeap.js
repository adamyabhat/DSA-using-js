const rl = require('readline-sync');
const heap = []

const heapInsert = (ele) => {
    if (heap.length === 0) { heap.push(ele) }
    else { 
        let leafIndex = heap.length
        heap.push(ele)
        let parent = Math.floor(leafIndex/2)
        while (heap[leafIndex]>heap[parent]){
            heapSwap(leafIndex,parent)
            leafIndex = parent
            parent = Math.floor(parent/2)
        }
    }
}

const heapRemove = () => {
    let removedEle = heap.shift()
    heap.unshift(heap.pop())
    let root = 0
    let left =1
    let right =2
    while (heap[root] < heap[left] || heap[root] < heap[right]){
        if (heap[root] < heap[left]) {
            heapSwap(root,left)
            root = left
        }else if (heap[root]< heap[right]) {
            heapSwap(root,right)
            root = right
        }
        left =(2 * root) + 1
        right = (2 * root) + 2
    }
    return removedEle
}

const heapDisplay = ()=> {
    console.log('heap structure : ')
    let node = 0
    let height = 0
    let numObjects = Math.pow(2,height)
    while (heap [node]) {
        let heightLeafs = heap.slice(node,numObjects)
        console.log(heightLeafs.join(' '))
        node = numObjects 
        height++
        numObjects =node + Math.pow(2,height)
    }
}

const heapSwap = (a,b) => {
    temp = heap[a]
    heap[a] = heap[b]
    heap[b] = temp
}
while (true) {
    const value = rl.question("options : \n 1) enqueue \n 2)dequeue \n 3) display heap \n 4) exit \n enter option number : ")
    if (value === '4') {
        break
    } else if (value === '3') {
        heapDisplay()
    } else if (value === '2') {
        let val = heapRemove()
        console.log('removed : '+val)
    }else if(value === '1'){
        let ele = rl.question("enter value : ")
        heapInsert(parseInt(ele))
    }else{
        console.log("Please enter a valid option!")
    }
}