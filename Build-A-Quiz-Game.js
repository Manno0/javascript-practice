/**
 * Title: JavaScript Algorithm Lab: Quiz Game
 * Description: Implements a quiz game with structured question objects, random selection logic for questions and choices, and result evaluation.
 * 
 * User Stories & Requirements:
 * - questions (Array): Contains at least 5 objects with category, question, choices (3 choices), and answer keys.
 * - getRandomQuestion(arr): Selects and returns a random question object from the questions array.
 * - getRandomComputerChoice(arr): Selects and returns a random answer from the available choices.
 * - getResults(questionObj, computerChoice): Evaluates the computer's choice against the correct answer and returns the corresponding outcome message.
 */
const question1 = {
  category : "Geography",
  question : "What is the 7th planet in our solar system?",
  choices : ["Earth", "Uranus", "Neptune"],
  answer : "Uranus"
}
const question2 = {
  category : "Mathematics",
  question : "What is the square root of 1200?",
  choices : ["34", "400", "40"],
  answer : "40"
}

const question3 = {
  category : "Chemistry",
  question : "What is the chemical formula for water?",
  choices : ["CO2", "H20", "NH4"],
  answer : "H20"
}
const question4 = {
  category : "Physics",
  question : "What does the variable v stands for?",
  choices : ["Velocity", "Accerelation", "Space"],
  answer : "Velocity"
}
const question5 = {
  category : "Biology",
  question : "What is the largest organ in our body?",
  choices : ["Lungs", "Spleen", "Skin"],
  answer : "Skin"
}

function getRandomQuestion(questions){
  let len = questions.length
  let random = Math.floor(Math.random(0,len))
  return questions[random]
}
function getRandomComputerChoice(choices){
  let len = choices.length
  let random = Math.floor(Math.random(0,len))
  return choices[random]
}
function getResults(question, answer){
  if(question.answer == answer){
    return ("The computer's choice is correct!")
  } else{
    return (`The computer's choice is wrong. The correct answer is: ${question.answer}`)
  }
}

let questions = [question1, question2, question3, question4, question5]
