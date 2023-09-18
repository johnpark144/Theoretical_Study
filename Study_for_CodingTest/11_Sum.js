// ########### Questions #############################################################################
// Implement a sum function that accepts a number and allows for repeated calling with more numbers

// sum(1)(); // 1
// sum(1)(2)(); // 3
// sum(1)(2)(-3)(); // 0

// ########### Solution 1 #############################################################################
function _sum(numberA) {
  return (numberB) => {
    return numberB === undefined ? numberA : sum(numberA + numberB);
  };
}

// ########### Solution 2 (화살표 함수로 한줄) ###########################################################
const sum = (a) => (b) => b !== undefined ? sum(a + b) : a;

console.log(sum(1)());
console.log(sum(1)(2)());
console.log(sum(1)(2)(-3)());
