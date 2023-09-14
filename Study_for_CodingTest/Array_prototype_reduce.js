// ########### Questions #############################################################################
// Implement Array.prototype.reduce. To avoid overwriting the actual Array.prototype.reduce which is being used by the autograder,
// we shall instead implement it as Array.prototype.myReduce.

// [1, 2, 3].myReduce((prev, curr) => prev + curr, 0); // 6
// [1, 2, 3].myReduce((prev, curr) => prev + curr, 4); // 10
// [1, 2, 3, 4].myReduce((prev, curr, index, array) => prev + curr * array[index],); // 30

// ########### Solution 1 #############################################################################
Array.prototype.myReduce = function (callbackFn, initialValue) {
  const noInitialValue = initialValue === undefined;
  const len = this.length;

  if (noInitialValue && len === 0) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  let acc = noInitialValue ? this[0] : initialValue;
  let startingIndex = noInitialValue ? 1 : 0;

  for (let k = startingIndex; k < len; k++) {
    if (Object.hasOwn(this, k)) {
      acc = callbackFn(acc, this[k], k, this);
    }
  }

  return acc;
};

// ########### Solution 2 (내가 쓴)#############################################################################
Array.prototype.myReduce = function (callbackFn, initialValue) {
  if (!this.length && initialValue !== 0) throw new Error();
  let prev = initialValue === undefined ? 0 : initialValue;
  let idx = 0;

  for (const data of this) {
    if (data === undefined) continue;
    prev = callbackFn(prev, data, idx, this);
    idx++;
  }
  return prev;
};

console.log([1, 2, 3].myReduce((prev, curr) => prev + curr, 0));
console.log([1, 2, 3].myReduce((prev, curr) => prev + curr, 4));
console.log(
  [1, 2, 3, 4].myReduce(
    (prev, curr, index, array) => prev + curr * array[index],
    0
  )
);
