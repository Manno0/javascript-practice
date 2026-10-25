/**
 * Title: JavaScript Loops Workshop: Factorial Calculator
 * Description: Implements a function to calculate the factorial of a given number using a standard for loop.
 */

let num = 10
function factorialCalculator(num){
  let result = 1
  for(let i=2; i<=num; i++){
    result*=i
  }
  return result
}

let factorial = factorialCalculator(num)
let resultMsg = `Factorial of ${num} is ${factorial}`
console.log(resultMsg)
