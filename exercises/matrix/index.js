// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],[4, 3]]
//   matrix(3)
//     [[1, 2, 3], [8, 9, 4], [7, 6, 5]]
//  matrix(4)
//     [[1,2,3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10,  9,  8, 7]]

function matrix(n) {
  const results = [];

  for (i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    //Right Coulumn
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }

    endColumn--;

    //Bottom Row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }

    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}

module.exports = matrix;

// function matrix(n) {
//   another_array = []
//   empty_array = [];
//   for (i = 1; i < n; i++) {
//     another_array.push(i)
//   }
//   another_array.forEach((val) => {
//     empty_array.push(another_array);
//   });
//   element_one_gone = empty_array.shift()
//   empty_array.forEach((val)=>{
//     const lastItem = val[val.length - 1]
//     const new_value = lastItem ++
//     console.log(new_value)
//   })

//   console.log(empty_array)
// }
// matrix(5);
