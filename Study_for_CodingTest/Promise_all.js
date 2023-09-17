// ########### Questions #############################################################################
// Let's implement our own version of Promise.all(), a promiseAll function,
// with the difference being the function takes in an array instead of an iterable.
// Be sure to read the description carefully and implement accordingly!

const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 100);
});

promiseAll([p0, p1, p2]).then(console.log); // [3, 42, 'foo']

// ------------------------

const p3 = Promise.resolve(30);
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('An error occurred!');
  }, 100);
});

promiseAll([p3, p4]).then(console.log).catch(console.log);

// ########### Solution #############################################################################
function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    // 배열이 빈 경우, 빈 배열 resolve 시키고 그냥 리턴
    let unresolved = iterable.length;
    const results = new Array(unresolved);
    if (unresolved === 0) {
      resolve(results);
      return;
    }

    // item의 resolve된 값 value를 index에 맞게 하나하나 배열에 정렬
    iterable.forEach((item, index) => {
      Promise.resolve(item).then(
        (value) => {
          results[index] = value;
          unresolved--;

          if (unresolved === 0) {
            resolve(results);
          }
        },
        // 거절 된경우
        (reason) => {
          reject(reason);
        }
      );
    });
  });
}
