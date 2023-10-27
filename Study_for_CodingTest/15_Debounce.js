// ########### Questions #############################################################################
// Implement a debounce function which accepts a callback function and a wait duration.
// Calling debounce() returns a function which has debounced invocations of the callback function

// let i = 0;
// function increment() {
//   i++;
// }
// const debouncedIncrement = debounce(increment, 100);

// debouncedIncrement();

// ########### Solution #############################################################################
function debounce(func, wait) {
  let timeoutId; // 클로저용 (timeoutId 에 setTimeout Id 저장)

  return function (...args) {
    const context = this;
    clearTimeout(timeoutId); // 전에 setTimeout 시간(wait) 안지났으면 전에꺼 취소

    // wait 만큼 기다리고 실행되지만 연속 실행되면 다음실행에서 clearTimeout 만나게 되있음
    timeoutId = setTimeout(() => {
      timeoutId = null; // 필수는 아니지만 해두는게 좋음
      func.apply(context, args); // this가 있으면 context.func(args) 처럼됨
    }, wait);
  };
}

function increment() {
  console.log('한번만 출력ㅋ');
}

const debouncedIncrement = debounce(increment, 100);

debouncedIncrement();
debouncedIncrement();
debouncedIncrement();
debouncedIncrement();
debouncedIncrement(); // 한번만 제대로 실행됨
