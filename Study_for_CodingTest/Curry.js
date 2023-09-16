// ########### Questions #############################################################################
// Implement the curry function which accepts a function as the only argument and returns a function
// that accepts single arguments and can be repeatedly called
// until at least the minimum number of arguments have been provided
// (determined by how many arguments the original function accepts)

// function add(a, b) {
//   return a + b;
// }

// const curriedAdd = curry(add);
// curriedAdd(3)(4); // 7

// const alreadyAddedThree = curriedAdd(3);
// alreadyAddedThree(4); // 7

// // ----------

// function multiplyThreeNumbers(a, b, c) {
//   return a * b * c;
// }

// const curriedMultiplyThreeNumbers = curry(multiplyThreeNumbers);
// curriedMultiplyThreeNumbers(4)(5)(6); // 120

// const containsFour = curriedMultiplyThreeNumbers(4);
// const containsFourMulFive = containsFour(5);
// containsFourMulFive(6); // 120

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
    // func안에 있는 파라미터 수보다, 지금까지 쌓인 args 배열 인수의 개수가 같거나 많을때
    if (args.length >= func.length) {
      return func.apply(this, args); // func에 지금까지 쌓인 args 그대로 적용하여 최종적으로 실행
    }

    // 다음 인수를 가져옴
    return (arg) => {
      return arg === undefined
        ? curried.apply(this, args)
        : curried.apply(this, [...args, arg]); // args를 하나로 합쳐서 curried의 인수로 보냄
    };
  };
}

function multiplyThreeNumbers(a, b, c) {
  return a * b * c;
}

const curriedMultiplyThreeNumbers = curry(multiplyThreeNumbers);
console.log(curriedMultiplyThreeNumbers(4)(5)(6));
