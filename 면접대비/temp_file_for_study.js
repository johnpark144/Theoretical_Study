// ############## 리마인더 #####################################################################################################################################################################


// ############## 인덱스 #####################################################################################################################################################################




// ############## Big O #####################################################################################################################################################################
// 좋은 코드는 1) Readible(가독성) 2) Scalable(Big O) ---> 2-1)속도(시간복잡도),  2-2)메모리(공간복잡도)
// Scalable 즉, 시간복잡도, 공간복잡도가 아무리 좋아도 가독성이 안좋으면 상황에 따라 좋은 코드라 볼 수없기 때문에 트레이드오프를 잘 고려 해야함

// Big O는 알고리즘이 실행되는데 걸리는 시간 (낮을수록 더 효율적이고 빠른 코드)

// 시간 복잡도(Time Complexity): 입력된 N의 크기에 따라 실행되는 조작의 수를 나타낸다.
// 공간 복잡도(Space Complexity): 알고리즘이 실행될 때 사용하는 메모리의 양을 나타낸다.

// ############## 시간 복잡도를 야기하는 것
// Looping (반복문)
// Operations (연산)
// Comparisons (비교)
// Outside Function call (함수 호출)

// ############## 공간 복잡도를 야기하는 것
// Variables (변수)
// Data Structure (자료구조)
// Call function (함수 실행)
// Allocations (할당)

// ############## Big O 계산의 4가지 규칙
// Worst Case (최악의 상황을기준)
// Remove Constants  (상수 제거)
// Different Terms For Inputs  (입력값의 대한 분리)
// Drop Non Dominants (상대적으로 비 지배적인부분 제거)

// ############## O(n) 코드 예시
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

findNemo(large);  // O(n) --> linear time (딱 배열이 길어진 만큼만 시간이 걸림, '/' 형태의 그래프)

// ############## O(1) 코드 예시

const boxes = [0, 1, 2, 3, 4, 5, 6];
const logFirstTwoBoxes = (boxes) => {
  console.log(boxes[0]);  //  O(1)
  console.log(boxes[1]);  //  O(1)
};

logFirstTwoBoxes(boxes);  //  O(2) but O(1)로 봄 --> constant time (딱 배열이 길어져도 정해진 시간만 걸림, 'ㅡ' 형태의 그래프)

// ############## O(n^2) 코드 예시
const boxes = ['a', 'b', 'c', 'd', 'e'];

const logAllPairsOfArray = (array) => {
    // O(n) * O(n)
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
};

logAllPairsOfArray(boxes); // O(n^2) --> Quadratice time

// ############## 자료구조와 알고리즘 ##################################################################################################################################################################
// 자료구조 : Arrays, Trees, Stacks, Tries, Queses, Graphs, Linked List, Hash Tables
// 알고리즘 : Sorting, Dynamic Programming, BFS + DFS (Searchong), Recursion

// ##################################################################################################################################################### 자료구조 #######################################
// ############## 배열 (Arrays)
// 문자열(String)도 split 메서드로 배열로 변경하고 join으로 원상태보 복귀 시킬 수 있어서 배열과 동일하게 적용됨
// lookup  O(1)
// push/pop  O(1)    // 동적 배열은 이에 해당하나 정적 배열은 배열 길이를 미리 정하므로 Append 할 때 0{n}이 될 수 있음
// insert  O(n)    --> 반복문안에서 사용하면 O(n^2)이 되서 사용자제
// delete  O(n)

const strings = ['a', 'b', 'c', 'd'];
strings[2] // O(1)
// push
strings.push('e'); // O(1)
// pop
strings.pop(); // O(1)
// unshift
strings.unshift('x'); // O(n) --> 배열 전체 index가 하나씩 뒤로 밀리기 때문에 어차피 하나씩 거쳐야됨
// shift
strings.shift(); // O(n)
// splice
strings.splice(2, 0, '!!!'); // O(n)





// ##################################################################################################################################################### 알고리즘 #######################################




















