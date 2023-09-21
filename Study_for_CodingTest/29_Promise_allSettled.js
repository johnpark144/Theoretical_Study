// ########### Questions #############################################################################
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('foo');
  }, 100);
});

await promiseAllSettled([p0, p1, p2]);
// [
//   { status: 'fulfilled', value: 3 },
//   { status: 'fulfilled', value: 42 },
//   { status: 'rejected', reason: 'foo' },
// ];

// ########### Solution (async, await) ########################################################################
function promiseAllSettled(iterable) {
  return new Promise((resolve) => {
    // 전달할 객체 공간 확보 및 pending중 카운트 숫자 생성
    const results = new Array(iterable.length);
    let pending = iterable.length;

    // 카운트할게 없으면 그냥 resolve
    if (pending === 0) {
      resolve([]);
      return;
    }

    // 프로미스 하나씩 실행해서 fulfilled 된거
    iterable.forEach(async (item, index) => {
      try {
        const value = await item;
        results[index] = {
          status: 'fulfilled',
          value,
        };
        // rejected 된거
      } catch (err) {
        results[index] = {
          status: 'rejected',
          reason: err,
        };
      }

      pending--; // 실행 마칠 때마다 카운트 다운

      // 실행 다 마치면 값 전달
      if (pending === 0) {
        resolve(results);
      }
    });
  });
}

// ########### Solution (then) ###############################################################################
function promiseAllSettled(iterable) {
  return new Promise((resolve) => {
    const results = new Array(iterable.length);
    let pending = iterable.length;

    if (pending === 0) {
      resolve(results);
      return;
    }

    iterable.forEach((item, index) => {
      Promise.resolve(item)
        .then(
          (value) => {
            results[index] = {
              status: 'fulfilled',
              value,
            };
          },
          (reason) => {
            results[index] = {
              status: 'rejected',
              reason,
            };
          }
        )
        .finally(() => {
          pending -= 1;
          if (pending === 0) {
            resolve(results);
          }
        });
    });
  });
}
