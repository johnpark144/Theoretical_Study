// ########### Questions #############################################################################
// Implement Array.prototype.map. To avoid overwriting the actual Array.prototype.map which is being used by the autograder,
// we shall instead implement it as Array.prototype.myMap.

// [1, 2, 3, 4].myMap((i) => i * i);                            // [1, 4, 9, 16]
// [1, 2, 3].myMap((i, index) => i * index)                     // [0, 2, 6]
// [1, 2, 3, 4].myMap((i, index, array) => i * array[index])    // [1, 4, 9, 16]
// [1, 2, 3, 4].myMap(function (element) { return element * this; }, 10)   // [10, 20, 30, 40]

// ####################################################################################################
// ########### Solution 1 #############################################################################
Array.prototype.myMap = function (callbackFn, thisArg) {
  const len = this.length;
  const array = new Array(len);

  for (let k = 0; k < len; k++) {
    if (Object.hasOwn(this, k)) {
      array[k] = callbackFn.call(thisArg, this[k], k, this);
    }
  }

  return array;
};

// ########### Solution 2 (내가 쓴) #############################################################################
Array.prototype.myMap = function (callbackFn, thisArg) {
  return this.map((i, idx) => callbackFn.call(thisArg, i, idx, this));
};

console.log([1, 2, 3, 4].myMap((i) => i * i));
console.log([1, 2, 3].myMap((i, index) => i * index));
console.log([1, 2, 3, 4].myMap((i, index, array) => i * array[index]));
console.log(
  [1, 2, 3, 4].myMap(function (element) {
    return element * this;
  }, 10)
);
