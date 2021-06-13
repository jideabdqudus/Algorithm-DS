// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}


fib = memoize(fib);

module.exports = fib;

// function fib(n) {
//   let initial_array = [0, 1];
//   for (i = 1; i < n; i++) {
//     const sum_both = initial_array[i] + initial_array[i - 1];
//     initial_array.push(sum_both);
//   }
//   return initial_array[n];
// }

// function fib(n) {
//   const fib_array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
//   const first_bracket = Math.pow((1 + Math.sqrt(5)) / 2, n);
//   const second_bracket = Math.pow((1 - Math.sqrt(5)) / 2, n);
//   const answer = Math.round((first_bracket - second_bracket) / Math.sqrt(5));
//   return answer
// }
