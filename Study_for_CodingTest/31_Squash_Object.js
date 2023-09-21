// ########### Questions #############################################################################
const object = {
  a: 5,
  b: 6,
  c: {
    f: 9,
    g: {
      m: 17,
      n: 3,
    },
  },
};
squashObject(object); // { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }

// ----------------------------
const object2 = {
  a: { b: null, c: undefined },
};
squashObject(object2); // { 'a.b': null, 'a.c': undefined }

// ----------------------------
const object3 = { a: { b: [1, 2, 3], c: ['foo'] } };
squashObject(object3); // { 'a.b.0': 1, 'a.b.1': 2, 'a.b.2': 3, 'a.c.0': 'foo' }

// ----------------------------
const object4 = {
  foo: {
    '': { '': 1, bar: 2 },
  },
};
squashObject(object4); // { foo: 1, 'foo.bar': 2 }

// ########### Solution 1 #############################################################################
// path는 생성할 키를 모으기 위해, output은 전체 저장할 값을 모으기 위해
function squashObject(object, path = [], output = {}) {
  for (const [key, value] of Object.entries(object)) {
    // 객체가 아닌 경우 : 현재까지 축적한 path로 key를 생성 --> value와 함께 output 객체에 축적
    if (typeof value !== 'object' || value === null) {
      output[[...path, key].filter(Boolean).join('.')] = value; // filter(Boolean)은 false, undefined, null, 0, NaN, ''을 제외시키는 역할
      // 객체 혹은 배열인 경우
    } else {
      squashObject(value, [...path, key], output); // key 축적 및 축적한 output전달
    }
  }

  return output;
}

// ########### Solution 2 #############################################################################
// 두개씩 묶어서 entries식으로 빈 배열에 전달
function chunk(array) {
  const chunkedArray = [];
  while (array.length) {
    chunkedArray.push(array.splice(0, 2));
  }
  return chunkedArray;
}

// [키,벨류,키,벨류, ...] 식으로 만듬
function traverse(object, path = []) {
  // 축적한 key인 path를 첫번째 배열로, 끝판에 있는 object 파라미터안에 value를 첫번째 배열로
  if (typeof object !== 'object' || object === null) {
    return [path.join('.'), object];
  }

  // 객체일 경우 key를 path에 축적
  return Object.entries(object).flatMap(([key, value]) => {
    const newPath = key === '' ? [...path] : [...path, key];
    return traverse(value, newPath);
  });
}

// 디폴트 함수
function squashObject(object) {
  const flattened = traverse(object);
  return Object.fromEntries(chunk(flattened)); // entries식 배열을 다시 객체로
}

console.log(squashObject(object));
console.log(squashObject(object2));
console.log(squashObject(object3));
console.log(squashObject(object4));
