// ########### Questions #############################################################################
// Implement the classnames function.

// classNames('foo', 'bar'); // 'foo bar'
// classNames('foo', { bar: true }); // 'foo bar'
// classNames({ foo: true }, { bar: true }); // 'foo bar'
// classNames({ foo: true, bar: true }); // 'foo bar'
// classNames({ foo: true, bar: false, qux: true }); // 'foo qux'
// classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // 'foo bar baz quux'
// ########### Solution #############################################################################
function classNames(...args) {
  const classes = [];

  args.forEach((arg) => {
    // arg가 존재하지 않으면 생략
    if (!arg) {
      return;
    }

    // 배열인 경우, 비구조화하여 재귀함수 인수로 넣어 리턴값을 배열에 추가
    if (Array.isArray(arg)) {
      classes.push(classNames(...arg));
      return;
    }

    // 객체인 경우, 객체에 key가 존재하고, value가 false가 아니면 배열에 key값 추가
    if (typeof arg === 'object') {
      for (const key in arg) {
        if (arg[key]) {
          classes.push(key);
        }
      }
      return;
    }

    // 문자열이나 숫자의 경우 배열에 바로 추가
    classes.push(arg);
  });

  return classes.join(' '); // 배열을 다시 문자열로
}

console.log(classNames('foo', 'bar'));
console.log(classNames('foo', { bar: true }));
console.log(classNames({ foo: true }, { bar: true }));
console.log(classNames({ foo: true, bar: false, qux: true }));
console.log(classNames('a', ['b', { c: true, d: false }]));
