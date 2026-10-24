/**
 * Title: JavaScript String Methods Workshop: replace(), replaceAll(), and repeat()
 * Description: This script demonstrates how to use advanced string modification methods in JavaScript:
 * - replace(): Replaces the first occurrence of a specified substring or pattern with a new value.
 * - replaceAll(): Replaces all occurrences of a specified substring throughout the entire string.
 * - repeat(): Constructs and returns a new string which contains the specified number of copies of the string it was called on.
 */

const originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);

const replacedString = originalString.replace("cats", "dogs");
console.log("After using the replace() method:");
console.log(replacedString);

const exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);

const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);

const learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);

const repeatedLove = "love ".repeat(3).trimEnd();
console.log(repeatedLove);

const newSentence = `I ${repeatedLove} learning.`;
console.log(newSentence);
