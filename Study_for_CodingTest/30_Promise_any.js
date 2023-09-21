// ########### Questions #############################################################################
const p0 = Promise.resolve(42);
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(21);
  }, 100);
});
await promiseAny([p0, p1]); // 42
// // ---------------
const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(42);
  }, 100);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Err!');
  }, 400);
});
await promiseAny([p2, p3]); // 42
// ---------------
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(42);
  }, 400);
});
const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Err!');
  }, 100);
});

(async () => {
  try {
    console.log(await promiseAny([p4, p5]));
  } catch (err) {
    console.log(err instanceof AggregateError); // true
    console.log(err.errors); // [ 42, "Err!" ]
  }
})();

// ########### Solution (async, await) ########################################################################
function promiseAny(iterable) {
  return new Promise((resolve, reject) => {
    // 배열이 없는경우
    if (iterable.length === 0) {
      reject(new AggregateError([]));
    }
    // 전부 오류일 것을 대비해서
    let pending = iterable.length;
    const errors = new Array(iterable.length);

    iterable.forEach(async (item, index) => {
      try {
        const value = await item;
        resolve(value);
      } catch (err) {
        errors[index] = err;
        pending--;
        // 다 에러인경우
        if (pending === 0) {
          // AggregateError는 배열에 있는 모든 오류들을 한꺼번에 보여줌
          reject(new AggregateError(errors));
        }
      }
    });
  });
}

// ########### Solution (then) ###############################################################################
function promiseAny(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      reject(new AggregateError([]));
    }

    let pending = iterable.length;
    const errors = new Array(iterable.length);

    iterable.forEach((item, index) =>
      Promise.resolve(item).then(
        (value) => {
          resolve(value);
        },
        (reason) => {
          errors[index] = reason;
          pending--;

          if (pending === 0) {
            reject(new AggregateError(errors));
          }
        }
      )
    );
  });
}
