// ########### Questions #############################################################################
// Implement a deepClone function that performs a deep clone operation on JavaScript objects.

const obj1 = { user: { role: 'admin' } };
const clonedObj1 = deepClone(obj1);

clonedObj1.user.role = 'guest'; // Change the cloned user's role to 'guest'.
clonedObj1.user.role; // 'guest'
obj1.user.role; // Should still be 'admin'.
// ----------------------------------
const obj2 = { foo: [{ bar: 'baz' }] };
const clonedObj2 = deepClone(obj2);

obj2.foo[0].bar = 'bax'; // Modify the original object.
obj2.foo[0].bar; // 'bax'
clonedObj2.foo[0].bar; // Should still be 'baz'.

// ########### Solution 1 (한줄로 해결) ##################################################################
function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

// ########### Solution 2 #############################################################################
function deepClone(value) {
  // 객체면 entrie로 바꿔서 [키, value를 인자로 받는 재귀함수] 식으로 리턴
  if (typeof value === 'object' && value !== null) {
    return Object.fromEntries(
      Object.entries(value).map(([key, value]) => [key, deepClone(value)])
    );
  }

  // 배열이면 모든 값을 재귀함수 호출하여 리턴
  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item));
  }

  // 둘다 아니면 그냥 있는 그래도 리턴
  return value;
}
