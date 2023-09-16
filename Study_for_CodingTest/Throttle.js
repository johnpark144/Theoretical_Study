// ########### Questions #############################################################################
// Implement a throttle function which accepts a callback function and a wait duration.
// Calling throttle() returns a function which throttled invocations of the callback function
// following the behavior described above.
let i = 0;
function increment() {
  i++;
}
const throttledIncrement = throttle(increment, 100);

throttledIncrement(); // i = 1
throttledIncrement(); // i = 1
throttledIncrement(); // i = 2

// ########### Solution #############################################################################
function throttle(func, wait = 0) {
  let shouldThrottle = false;

  return function (...args) {
    if (shouldThrottle) {
      // true가 될때마다 작동안되도록
      return;
    }

    shouldThrottle = true;
    setTimeout(function () {
      shouldThrottle = false; // wait에 전달된 시간마다 작동되도록 풀림
    }, wait);

    func.apply(this, args);
  };
}
