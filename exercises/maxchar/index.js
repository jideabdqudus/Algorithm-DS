// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};//Create empty object

  let max = 0;      //let temporary max value be 0 - Step 2
  let maxChar = ""; //let temporary character be empty - Step 2

  for (let char of str) {   //let each chararacter of the string
    charMap[char] = charMap[char] + 1 || 1; //associate each character of the string to corresponding number of times it was repeated
  }

  for (let char in charMap) {   //for each character in the new object - Step 2
    if (charMap[char] > max) {  //if the character value is greater than temp value 0 - Step 2
      max = charMap[char];      //let max = character value - Step 2
      maxChar = char;           //let the character be replaced with temo character maxChar - Step 2
    }
  }
   
  return maxChar;
}

module.exports = maxChar;
