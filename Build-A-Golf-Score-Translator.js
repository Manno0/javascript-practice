/**
 * Title: JavaScript Algorithm Lab: Build a Golf Score Translator
 * Description: Implements a function to evaluate golf scores relative to par using a switch statement with boolean expressions.
 */

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  switch (true) {
    case strokes === 1:
      return "Hole-in-one!";
    case strokes <= par - 2:
      return "Eagle";
    case strokes === par - 1:
      return "Birdie";
    case strokes === par:
      return "Par";
    case strokes === par + 1:
      return "Bogey";
    case strokes === par + 2:
      return "Double Bogey";
    default:
      return "Go Home!";
  }
}
