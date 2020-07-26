// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi)
  return matches ? matches.length : 0
}

module.exports = vowels;



//Solution 1

// function vowels(str) {
//     let count = 0; //Initialize Count
  
//     word = ["a", "e", "i", "o", "u"]; //Set word array containing the vowels
  
//     for (let char of str.toLowerCase()) {
//       //turn str to the lowercase, for each character in str, check if it's included in the word array and increase the count by 1
//       if (word.includes(char)) {
//         count++;
//       }
//     }
//     return count;
//   }