// ########### Questions #############################################################################
// Implement  Array.prototype.filter. To avoid overwriting the actual Array.prototype.filter which is being used by the autograder,
// we shall instead implement it as Array.prototype.myFilter.

// [1, 2, 3, 4].myFilter((value) => value % 2 == 0);        // [2, 4]
// [1, 2, 3, 4].myFilter((value) => value < 3);             // [1, 2]
// [1, 2, 3, 4].myFilter((_, index) => index % 2 === 0);    // [1, 3]
// [1, 2, 3, 4].myFilter((_, index, array) => (array[index] * array[index]) % 2 === 0)  // [2, 4]
// [1, 2, 3, 4].myFilter(function (element) { return (element * this) % 2 === 0; }, 9)  // [2, 4]

// ########### Solution #############################################################################
Array.prototype.myFilter = function (callbackFn, thisArg) {
  const len = this.length;
  const results = [];
  for (let k = 0; k < len; k++) {
    const kValue = this[k];
    // call의 첫째 인수는 this로 묶을 값, 둘째 부터는 callbackFn에 들어갈 인수
    // Object.hasOwn() 는 첫째 인수인 배열이나 객체 안에, 둘째 인수와 같은 값의 Index나 키(속성)값이 있는지 확인
    if (Object.hasOwn(this, k) && callbackFn.call(thisArg, kValue, k, this)) {
      results.push(kValue);
    }
  }

  return results;
};

console.log([1, 2, 3, 4].myFilter((value) => value % 2 == 0)); // [2, 4]
console.log([1, 2, 3, 4].myFilter((value) => value < 3)); // [1, 2]
console.log([1, 2, 3, 4].myFilter((_, index) => index % 2 === 0)); // [1, 3]
console.log(
  [1, 2, 3, 4].myFilter(
    (_, index, array) => (array[index] * array[index]) % 2 === 0
  )
); // [2, 4]

console.log(
  [1, 2, 3, 4].myFilter(function (element) {
    return (element * this) % 2 === 0;
  }, 9)
); // [2, 4]
