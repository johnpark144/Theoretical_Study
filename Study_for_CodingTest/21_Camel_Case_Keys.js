// ########### Questions #############################################################################
// Implement a function camelCaseKeys, that takes an object and returns a new object with all its keys converted to camel case.

// camelCaseKeys({ foo_bar: true });
// { fooBar: true }

// camelCaseKeys({ foo_bar: true, bar_baz: { baz_qux: '1' } });
// { fooBar: true, barBaz: { bazQux: '1' } }

// camelCaseKeys([{ baz_qux: true }, { foo: true, bar: [{ foo_bar: 'hello' }] }]);
// [{ bazQux: true }, { foo: true, bar: [{ fooBar: 'hello' }] }]

// ########### Solution 1 (정규표현식) ######################################################################
// '_'를 찾아 지우고, '_'뒤에 있는 영어 대문자화 시키는 정규표현식 함수
function changeToCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/([_])([a-z])/g, (_match, _p1, p2) => p2.toUpperCase());
}

function camelCaseKeys(object) {
  // 배열 형태인 경우, 배열에 item들을 재귀함수로써 다시 전달하고, 다시 배열 반환
  if (Array.isArray(object)) {
    return object.map((item) => camelCaseKeys(item));
  }

  // 객체가 아닌경우 그대로 반환
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  // 객체인 경우, 배열(entries)로 만들어 key는 정규표현식 함수로, value는 재귀함수로 다시 전달
  // 그 후 다시 객체(fromEntries)로 되돌림
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => [
      changeToCamelCase(key),
      camelCaseKeys(value),
    ])
  );
}

console.log(camelCaseKeys({ foo_bar: true }));
console.log(camelCaseKeys({ foo_bar: true, bar_baz: { baz_qux: '1' } }));
console.log(
  camelCaseKeys([{ baz_qux: true }, { foo: true, bar: [{ foo_bar: 'hello' }] }])
);

// ########### Solution2 (정규표현식 대신) ###########################################################################
function changeToCamelCase(str) {
  let newMsg = str.toLowerCase().split('');
  const idx = newMsg.indexOf('_');
  if (idx === -1) return str; // '_'가 없는경우
  newMsg[idx + 1] = newMsg[idx + 1].toUpperCase();
  newMsg.splice(idx, 1);
  return newMsg.join('');
}
