// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = []; //Create empty array called chunked
  let index = 0; //Create index element = 0
  while (index < array.length) {
    //If index is less than the length of the array
    chunked.push(array.slice(index, index + size)); //Use the slice array method, to create new array from Index to Index+Size, Push new Array into chunked
    index += size;
  }
  return chunked; //Return chunked array
}

module.exports = chunk;

// function chunk(array, size) {
//     let chunked = []; //Create empty array called chunked

//     for (let element of array) {
//       const last = chunked[chunked.length - 1]; //Create a const that gets the last element in the chunked array
//       if (!last || last.length === size) {
//         //If the last element is equals to zero, or it's equal to chunk size
//         chunked.push([element]); //Push a new chunk into chunked
//       } else {
//         last.push(element); //ELse push into te last elemnt
//       }
//     }

//     return chunked;
//   }
