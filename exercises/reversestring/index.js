// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  
}

module.exports = reverse;

//Solution 1

// function reverse(str) {
//   const arr = str.split(""); //turns string to an array
//   arr.reverse(); //reverses the array
//   return arr.join(""); //joins the array to a string
// }



//Solution 2

// function reverse(str) {
//     let reversed = "";
  
//     for (let character of str) {
//       reversed = character + reversed;
//     }
  
//     return reversed;
//   }