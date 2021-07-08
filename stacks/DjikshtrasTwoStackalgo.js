const rl = require('readline-sync');

let valueStack = []
let operatorStack = []

let expression = rl.question("enter the expression(expressions must be wrapped in parentheses, including the most exterior one) : ").split('')
for(let i = 0; i <expression.length; i++){
    switch(expression[i]){
        case '(':
            continue
        case ')': 
            let y = parseInt(valueStack.pop())
            let x = parseInt(valueStack.pop())
            let operator = operatorStack.pop()
                switch(operator){
                    case '*' :
                        valueStack.push(x*y)
                        continue
                    case '/' :
                        valueStack.push(x/y)
                        continue
                    case '+' :
                        valueStack.push(x+y)
                        continue
                    case '-' :
                        valueStack.push(x-y)
                        continue
                }
        default:
            if (['+', '-','*','/'].indexOf(expression[i])>=0) {
                operatorStack.push(expression[i])
            } else {
                valueStack.push(expression[i])
            }
            continue
    }
}


console.log('result : ', valueStack[0]);