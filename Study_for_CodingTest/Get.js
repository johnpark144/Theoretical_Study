// ########### Questions #############################################################################
const john = {
  profile: {
    name: { firstName: 'John', lastName: 'Doe' },
    age: 20,
    gender: 'Male',
  },
};

const jane = {
  profile: {
    age: 19,
    gender: 'Female',
  },
};

console.log(get(john, 'profile.name.firstName')); // 'John'
console.log(get(john, 'profile.gender')); // 'Male'
console.log(get(jane, 'profile.name.firstName')); // undefined

// ########### Solution #############################################################################
function get(objectParam, pathParam, defaultValue) {
  const path = Array.isArray(pathParam) ? pathParam : pathParam.split('.');

  let index = 0;
  let length = path.length;
  let object = objectParam;

  while (object != null && index < length) {
    object = object[String(path[index])];
    index++;
  }

  const value = index && index === length ? object : undefined;
  return value !== undefined ? value : defaultValue;
}
