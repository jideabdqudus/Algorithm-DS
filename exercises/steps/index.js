// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  //from 0 to no iterate through rows
  for (let row = 0; row < n; row++) {
    let stair = ""; //Create an empty string stair

    for (let column = 0; column < n; column++) {
      //from 0 to n iterate through columns
      if (column <= row) {
        //if the current column is less than or equal to row and a #
        stair += "#";
      } else {
        stair += " "; //else add a space
      }
    }
    console.log(stair);
  }
}

module.exports = steps;
