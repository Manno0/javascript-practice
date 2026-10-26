// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// You should have a function named fearNotLetter.
// The fearNotLetter function should accept one argument: a string representing a range of letters in alphabetical order which can have one letter missing.
// The function should find the missing letter in the passed letter range and return it.
// If all letters are present in the range, the function should return undefined.


function fearNotLetter(letters){
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let firstIdx = alphabet.indexOf(letters[0])
 
  let result = undefined
  for (let i=1; i<= letters.length-1; i++){
    
    if(alphabet[i+firstIdx]!==letters[i]){
      result = alphabet[i+firstIdx]
      return result
    }
    
    if(i==letters.lenght-1){
      console.log(`breaking i: ${i}`)
      return result
    }
  }
}

console.log(fearNotLetter("stvwx"))
