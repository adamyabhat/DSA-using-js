const rl = require('readline-sync');
var elements
function main() {
    var N = rl.question("Enter Number of objects : ")

    elements = createInitArray(N)
    console.log("Enter nodes to connect with spaces in between (type \"done\" to exit ) : ")
    while (N) {
        var connectables = rl.question()
        if (connectables === "done" ){
            break
        }
        var connectors = connectables.split(' ').map(ele => {return parseInt(ele)})
        if (!isConnected(parseInt(connectors[0]), connectors[1])) {
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

function isConnected(a,b) {
    return elements[a] === elements[b]
}

function union(a,b) {
    var eleOne = elements[a]
    var eleTwo = elements[b]
    elements.forEach((element,i) => {
        if (element === eleOne) {
            elements[i] = eleTwo
        }
    })
}

main()