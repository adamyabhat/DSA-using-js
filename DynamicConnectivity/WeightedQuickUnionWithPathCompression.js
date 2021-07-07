const rl = require('readline-sync');

var elements
var treeSize

function main() {
    var N = rl.question("Enter Number of objects : ")

    elements = createInitArray(N)
    treeSize = createSizeArray(N)

    console.log("Enter nodes to connect with spaces in between (type \"done\" to exit ) : ")
    while (N) {
        var userInput = rl.question()
        if (userInput === "done" ){
            break
        }
        var connectors = userInput.split(' ').map(ele => {return parseInt(ele)})
        if (!isConnected(connectors[0], connectors[1])) {
            union(connectors[0], connectors[1])
        }
    }

    console.log(elements)
    
}

function createInitArray(N) {
    var arr = []
    for (var i = 0; i < N; i++) {
        arr.push(i)        
    }
    return arr
}

function createSizeArray(N) {
    var arr = []
    for (var i = 0; i < N; i++) {
        arr.push(1)        
    }
    return arr
}

function root(i) {
    while(i != elements[i]){
        elements[i] = elements[elements[i]]
        i = elements[i]
    }
    return i    
}

function isConnected(a,b){
    return root(a) === root(b)
}

function union(a,b) {
    var i = root(a)
    var j = root(b)
    if (treeSize[i] <= treeSize[j]){
        elements[i] = j
        treeSize[b] += treeSize[a]
    } else {
        elements[j] = i
        treeSize[a] += treeSize[b]
    }
}

main()