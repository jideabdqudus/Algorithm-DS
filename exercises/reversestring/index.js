// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str
    .split("")
    .reduce((reversed, character) => character + reversed, "");
}

module.exports = reverse;

//Solution 1

// function reverse(str) {
//  return str
//  .split("") //turns string to an array
//  .reverse("") //reverses array
//  .join("") //turns array to string
// }

//Solution 2

// function reverse(str) {
//     let reversed = "";

//     for (let character of str) {
//       reversed = character + reversed;
//     }

//     return reversed;
//   }
