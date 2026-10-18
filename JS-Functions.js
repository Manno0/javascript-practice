// Build a Boolean Check Function
// In this lab, you will build a function that checks if a value is classified as a boolean primitive.

// Boolean primitives are true and false.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// You should have a function called booWho that receives one argument.
// If the argument received is a boolean primitive, the function should return true.
// If the argument is any other value, the function should return false.

function booWho(bool){
  if(bool===true || bool === false){
    return true
  } 
  return false
}

// In this lab, you will mask the username part of an email address with asterisks. Masking is a term used to hide or replace sensitive information with asterisks or other characters.

// For example, if the email address was myEmail@email.com, then the masked email address will be m*****l@email.com.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

  
function maskEmail(email){
const parts = email.split("@")
let username = parts[0]
let domain = parts[1]
let maskedUserName = username[0]
let lastChar = username[username.length-1]
  for(let i=1; i < username.length-1; i++){
    maskedUserName+= "*"
  }
  return maskedUserName+ lastChar +"@"+ domain
}
let email = "jeladzemary@gmail.com"
console.log(maskEmail(email))

// In this lab, you will write a function that converts the temperature from Celsius to Fahrenheit. 

function convertCtoF(tempInCelsius){
  return tempInCelsius * (9/5) + 32

}

console.log(convertCtoF(10))

