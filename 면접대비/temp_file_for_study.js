// ############## Big O #####################################################################################################################################################################
// 좋은 코드는 Readible(가독성)하고 Scalable(Big O)해야함
// Big O는 알고리즘이 실행되는데 걸리는 시간 (낮을수록 더 효율적이고 빠른 코드)

// ############## 코드 예시
const everyone = ['1', '2', '3', '4', '5', '6', 'nemo', '7', '8', '9'];
const large = new Array(100000).fill('nemo');

const findNemo = (array) => {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('found Nemo!');
    }
  }
  let t1 = performance.now();
  console.log('call to find Nemo took', +(t1 - t0) + 'ms');
};

findNemo(large);  // O(n) -> linear time (딱 배열이 길어진 만큼만 시간이 걸림, '/' 형태의 그래프)

// ############## 코드 예시
