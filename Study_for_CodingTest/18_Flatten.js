// ########### Questions #############################################################################
// Implement a function flatten that returns a newly-created array
// with all sub-array elements concatenated recursively into a single level.

// // Single-level arrays are unaffected.
// flatten([1, 2, 3]); // [1, 2, 3]

// // Inner arrays are flattened into a single level.
// flatten([1, [2, 3]]); // [1, 2, 3]
// flatten([
//   [1, 2],
//   [3, 4],
// ]); // [1, 2, 3, 4]

// // Flattens recursively.
// flatten([1, [2, [3, [4, [5]]]]]); // [1, 2, 3, 4, 5]

// ########### Solution 1 (some) #############################################################################
function flatten(value) {
  while (value.some(Array.isArray)) {
    value = [].concat(...value); // value = value.flat()로 바꿔도 됨
  }
  return value;
}

// ########### Solution 2 (Recursive, reduce) #############################################################
function flatten(value) {
  return value.reduce(
    (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr),
    []
  );
}

// ########### Solution 3 (Recursive, flatMap) ###########################################################################
function flatten(value) {
  return Array.isArray(value) ? value.flatMap((item) => flatten(item)) : value;
}

// ########### Solution 4 (Flatten the array in-place) ########################################################
function flatten(value) {
  for (let i = 0; i < value.length; ) {
    if (Array.isArray(value[i])) {
      value.splice(i, 1, ...value[i]); // 배열이 나타난 경우 그 자리에서 비구조화 시키고 i++ 없이 반복문 되돌아감
    } else {
      // i++ 는 배열이 안나타나는 경우에만
      i++;
    }
  }
  return value;
}
