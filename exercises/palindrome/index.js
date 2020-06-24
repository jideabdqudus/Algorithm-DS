// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const arr = str.split(""); //turns string to an array
  arr.reverse(); //reverses the array
  let turn = arr.join(""); //joins the array to a string
  if (turn === str) {
    //Checks if solution is true
    return true;
  } else {
    //Checks if solution is false
    return false;
  }
}

module.exports = palindrome;
