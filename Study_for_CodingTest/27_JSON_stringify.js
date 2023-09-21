// ########### Questions #############################################################################
// Implement a function jsonStringify, similar to JSON.stringify that converts a JavaScript value into a JSON string

jsonStringify({ foo: 'bar' }); // '{"foo":"bar"}'
jsonStringify({ foo: 'bar', bar: [1, 2, 3] }); // '{"foo":"bar","bar":[1,2,3]}'
jsonStringify({ foo: true, bar: false }); // '{"foo":true,"bar":false}'

jsonStringify(null); // 'null'
jsonStringify(true); // 'true'
jsonStringify(false); // 'false'
jsonStringify(1); // '1'
jsonStringify('foo'); // '"foo"'

jsonStringify([
  42,
  'Hello, World!',
  true,
  null,
  { name: 'John', age: 30 },
  [1, 2, 3],
]), // '[42,"Hello, World!",true,null,{"name":"John","age":30},[1,2,3]]'
  jsonStringify({
    name: 'foo',
    age: 18,
    attr: ['coding', 123],
  }), // '{"name":"foo","age":18,"attr":["coding",123]}'
  // ########### Solution 1 #############################################################################
  function jsonStringify(value) {
    // array 타입인 경우 --> 내부 데이터마다 다 string화 시켜야해서 재귀적으로 함수 다시실행
    if (Array.isArray(value)) {
      const arrayValues = value.map((item) => jsonStringify(item));
      return `[${arrayValues.join(',')}]`; // 배열마다 ','붙여 문자열로 리턴
    }

    // object 타입인 경우 --> key만 따옴표 덧 붙이고, value는 재귀적으로 함수 다시실행
    // (null 타입도 object 뜨기 떄문에 주의)
    if (typeof value === 'object' && value !== null) {
      const objectEntries = Object.entries(value).map(
        ([key, value]) => `"${key}":${jsonStringify(value)}`
      );
      return `{${objectEntries.join(',')}}`; // 배열마다 ','붙여 문자열로 리턴
    }

    // string 타입인 경우  --> 기존 value 따옴표 덧 붙임
    if (typeof value === 'string') {
      return `"${value}"`;
    }

    // 나머지는 String으로 변경
    return String(value);
  };

// ########### Solution 2 #############################################################################
// 타입변경 함수
function getType(value) {
  if (value === null) {
    return 'null';
  }
  if (Array.isArray(value)) {
    return 'array';
  }
  return typeof value;
}

// 디폴트 함수
function jsonStringify(value) {
  const type = getType(value);

  switch (type) {
    case 'array':
      const arrayValues = value.map((item) => jsonStringify(item)).join(',');
      return `[${arrayValues}]`;
    case 'object':
      const objectValues = Object.entries(value)
        .map(([key, value]) => `"${key}":${jsonStringify(value)}`)
        .join(',');
      return `{${objectValues}}`;
    case 'string':
      return `"${value}"`;
    default:
      return String(value);
  }
}
