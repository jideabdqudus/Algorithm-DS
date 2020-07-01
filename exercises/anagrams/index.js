// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False



module.exports = anagrams;



// function anagrams(stringA, stringB) {
//   const chars = {};

//   const newCharSet = {};

//   for (let char of stringA.replace(/[^\w]/g, "").toLowerCase()) {
//     chars[char] = chars[char] + 1 || 1;         
//   }

//   for (let newchar of stringB.replace(/[^\w]/g, "").toLowerCase()) {
//     newCharSet[newchar] = newCharSet[newchar] + 1 || 1;
//   }

//   if (
//     Object.keys(chars).length !== Object.keys(newCharSet).length &&
//     chars !== newCharSet
//   ) {
//     return false;
//   } else {
//     return true;
//   }
// }