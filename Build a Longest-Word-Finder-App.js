/**
 * Title: JavaScript Algorithm Lab: Longest Word Finder App
 * Description: Implements a function to determine the length of the longest word in a given sentence by splitting the text into words and iterating through their lengths.
 */

function findLongestWordLength(sentence){
  sentence = sentence.trim()
  let words = sentence.split(" ")
  let len = 0
  for (let word of words){
    len = word.length> len ? word.length : len
  }
  return len
} 

let longest = findLongestWordLength("Google do a barrel roll")
console.log(longest)
