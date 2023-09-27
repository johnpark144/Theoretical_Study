// ########### Questions #############################################################################
deepEqual('foo', 'foo'); // true
deepEqual({ id: 1 }, { id: 1 }); // true
deepEqual([1, 2, 3], [1, 2, 3]); // true
deepEqual([{ id: '1' }], [{ id: '2' }]); // false
deepEqual(
  { foo: 'bar', item: [1, 2, { baz: 'baz' }] },
  { foo: 'bar', item: [1, 2, { baz: 'baz' }], id: 1 }
); // false

// ########### Solution 1 ##########################################################################
// 객체 혹은 배열인지 출력
function shouldDeepCompare(type) {
    return type === '[object Object]' || type === '[object Array]';
  }
  
  // 타입체크 
  function getType(value) {
    // (이런식으로 출력) ---> [object Object], [object Array], [object Boolean]
    return Object.prototype.toString.call(value);
  }
  
  // 디폴트 함수
  export default function deepEqual(valueA, valueB) {
    const type1 = getType(valueA);
    const type2 = getType(valueB);
  
    // 두 타입이 같으면서 객체이거나 배열일때
    if (type1 === type2 && shouldDeepCompare(type1)) {
      // 단순히 두 value가 같은지 체크하는거라서 배열의 경우도 entries로 바꿔도 됨
      const entriesA = Object.entries(valueA); 
      const entriesB = Object.entries(valueB);
  
      if (entriesA.length !== entriesB.length) { // 두 배열 길이체크
        return false;
      }
  
      return entriesA.every( // valueB가 entriesA의 모든 키를 가지는지 확인 후, 모든 벨류는 다시 제귀적으로 호출
        ([k, v]) => Object.hasOwn(valueB, k) && deepEqual(v, valueB[k]),
      );
    }
  
    return Object.is(valueA, valueB) // valueA === valueB 와 같고, 같으면 'true' 출력
  }
  


// ########### Solution (내가쓴답) ##########################################################################
function checkType(value) {
  return Array.isArray(value) ? 'array' : value === null ? null : typeof value;
}

export default function deepEqual(valueA, valueB) {
  const typeA = checkType(valueA);
  const typeB = checkType(valueB);

  if (typeA !== typeB) return false;

  if (typeA === 'array') {
    if (valueA.length !== valueB.length) return false;
    const resultArr = [];
    for (const i in valueA) {
      resultArr.push(deepEqual(valueA[i], valueB[i]));
    }

    return resultArr.every((item) => item === true);
  }

  if (typeA === 'object') {
    const entriesA = Object.entries(valueA);
    const entriesB = Object.entries(valueB);
    if (entriesA.length !== entriesA.length) return false;

    return deepEqual(entriesA, entriesB);
  }

  return valueA === valueB;
}
