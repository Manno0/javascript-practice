/**
 * Title: JavaScript Algorithm Lab: Chunk Array in Groups
 * Description: Implements a function to split an array into smaller sub-arrays of a specified size using a for loop and the slice() method.
 */
function chunkArrayInGroups(arr, num){
  let sliced = []
  for (let i=0; i <= arr.length-1; i+=num){
    console.log(`arr.length-num;: ${arr.length-num}`)
    console.log(`i - ${i}`)
    sliced.push(arr.slice(i, i+num))
  }
  return sliced
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e"], 2))
