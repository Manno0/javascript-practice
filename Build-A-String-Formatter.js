/**
 * Title: JavaScript String Methods Workshop: trim(), case conversion, and manipulation
 * Description: This script demonstrates how to use various JavaScript string methods for text cleanup and formatting:
 * - trim(), trimStart(), and trimEnd(): Removes whitespace from both ends, the beginning, or the end of a string.
 * - toUpperCase() and toLowerCase(): Converts all characters in a string to uppercase or lowercase.
 * - String manipulation: Combines slice(), indexing, and case conversion methods to transform specific parts of a string (e.g., camelCasing).
 */

const userInput = "   Hello World!   ";
console.log("Original input:");
console.log(userInput);

const cleanedInput = userInput.trim();
console.log("Result of trimming whitespace from both ends:");
console.log(cleanedInput);

const trimmedStart = userInput.trimStart();
console.log("After using the trimStart() method, leading spaces removed:");
console.log(trimmedStart);

const trimmedEnd = userInput.trimEnd();
console.log("After using the trimEnd() method, trailing spaces removed:");
console.log(trimmedEnd);

const upperCaseInput = cleanedInput.toUpperCase();
console.log("Result of using the toUpperCase() method:");
console.log(upperCaseInput);

const lowerCaseInput = cleanedInput.toLowerCase();
console.log("Result of using the toLowerCase() method:");
console.log(lowerCaseInput);

const lowercaseWord = "camelcase";
const camelCasedVersion = lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase()+ lowercaseWord.slice(-3);
console.log("Camel cased version:");
console.log(camelCasedVersion);
