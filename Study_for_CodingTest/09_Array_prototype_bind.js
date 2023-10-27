// ########### Questions #############################################################################
// Implement your own Function.prototype.bind without calling the native bind method.
// To avoid overwriting the actual Function.prototype.bind,
// implement the function as Function.prototype.myBind.

// ex)
const john = {
  name: 'John',
  age: 42,
  getAge: function () {
    return this.age;
  },
  greeting(prefix, message) {
    return `${prefix} ${this.name}, ${message}`;
  },
};

// const unboundGetAge = john.getAge;
// console.log(unboundGetAge()); // undefined

// const boundGetAge = john.getAge.myBind(john);
// console.log(boundGetAge()); // 42

// const greeting = john.greeting.myBind(john, 'Mr.');
// console.log(greeting('good morning!'));  // Mr. John, good morning!

// ########### Solution #############################################################################
Function.prototype.myBind = function (thisArg, ...argArray) {
  return (...argArray2) => {
    return this.apply(thisArg, [...argArray, ...argArray2]);
  };
};

const unboundGetAge = john.getAge;
console.log(unboundGetAge()); // undefined

const boundGetAge = john.getAge.myBind(john);
console.log(boundGetAge()); // 42

const greeting = john.greeting.myBind(john, 'Mr.');
console.log(greeting('good morning!')); // Mr. John, good morning!
