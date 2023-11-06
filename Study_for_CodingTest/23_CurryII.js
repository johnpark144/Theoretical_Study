// ########### Questions ########################################################################################
// Implement the curry function which accepts a function
// as the only argument and returns a function that accepts any number of arguments
// (vs only one argument at a time in Curry)
//  and returns a function which can be repeatedly called
// until at least the minimum number of arguments has been provided

// function addTwo(a, b) {
//     return a + b;
//   }
//   const curriedAddTwo = curry(addTwo);
//   curriedAddTwo(3)(4); // 7
//   curriedAddTwo(3, 4); // 7
//   const alreadyAddedThree = curriedAddTwo(3);
//   alreadyAddedThree(4); // 7

// //   ------------------------------------
//   function multiplyThree(a, b, c) {
//     return a * b * c;
//   }
//   const curriedMultiplyThree = curry(multiplyThree);
//   curriedMultiplyThree(4)(5)(6); // 120
//   curriedMultiplyThree(4)(5, 6); // 120
//   curriedMultiplyThree(4, 5)(6); // 120
//   curriedMultiplyThree(4, 5, 6); // 120

//   const containsFour = curriedMultiplyThree(4);
//   const containsFourMulFive = containsFour(5);
//   containsFourMulFive(6); // 120

// ########### Solution 1 (bind 이용) ###########################################################################
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }
    return curried.bind(this, ...args);
  };
}

// ########### Solution 2 (apply만 이용 -> call로 대체가능) ######################################################
function curry(func) {
  return function curried(...args) {
    // 파라미터 수와 함수 인자 수가 같을때 만 작동
    if (args.length === func.length) {
      return func.apply(this, args);
    }

    return (...args2) => curried.apply(this, [...args, ...args2]); // 배열로 겹쳐서 재귀함수로써 다시 호출
  };
}
