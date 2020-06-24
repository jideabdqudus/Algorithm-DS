// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let num = n.toString().split("").reverse().join(""); // Turns the number to a string, then to an array, reverses the array, turns the array back to a string
  return parseInt(num) * Math.sign(n); //Turns the string to an integer, multiply the integer by the corresponding sign
}

module.exports = reverseInt;
