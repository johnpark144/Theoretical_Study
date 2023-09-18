// ########### Questions #############################################################################
// Implement a function uniqueArray that takes in an array and returns a duplicate-free version of the array
uniqueArray([1, 2, 3]); // [1, 2, 3]
uniqueArray([1, 1, 2]); // [1, 2]
uniqueArray([2, 1, 2]); // [2, 1]

// ########### Solution #############################################################################
export default function uniqueArray(array) {
  const result = [];

  array.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });

  return result;
}
