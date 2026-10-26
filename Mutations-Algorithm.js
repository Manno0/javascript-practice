/**
 * Title: JavaScript Algorithm Lab: Mutations Algorithm
 * Description: Implements a function to check if the first string in an array contains all the letters of the second string, ignoring case.
 * do not use includes() method
 */


function mutation(arr){
  let first = arr[0].toLowerCase()
  let second = arr[1].toLowerCase()
  console.log(`first : ${first}`)
  console.log(`second : ${second}`)
  let count = 0
  let firstLen = first.length
  let secondLen = second.length
  let same = 0
  outerLoop: for (let l of second ){
    count = 0
    innerLoop: for(let i of first){
      
      if (l === i){
        same++
        
        break;
      }
      count++
      

    }
    if(same == secondLen ){
      return true    
    }
    if(count == firstLen){
      return false
    }
    
  }
}

console.log(mutation(["Alien", "line"]))
