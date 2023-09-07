// ############## 리마인더 #####################################################################################################################################################################


// ############## 인덱스 #####################################################################################################################################################################



// ############## Big O notation #####################################################################################################################################################################
// 좋은 코드는 1) No Repeat(중복성 없음), Consistent(일관성있는), Readible(가독성), Teastable(테스트하기 좋음)  2) Scalable(Big O) ---> 2-1)속도(시간복잡도 less than O(N^2)),  2-2)메모리(공간복잡도)
// Scalable 즉, 시간복잡도, 공간복잡도가 아무리 좋아도 가독성이 안좋으면 상황에 따라 좋은 코드라 볼 수없기 때문에 트레이드오프를 잘 고려 해야함.

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

// ############## 자료구조와 알고리즘 개요 ##################################################################################################################################################
// 자료구조 : Arrays, Trees, Stacks, Tries, Queses, Graphs, Linked List, Hash Tables
// 알고리즘 : Sorting, Dynamic Programming, BFS + DFS (Searchong), Recursion

// #########################################################################################################################################################################################
// ############### 자료구조 #################################################################################################################################################################
// #########################################################################################################################################################################################
// ############## 배열 (Arrays) #############################################################################################################################################################
// 문자열(String)도 split 메서드로 배열로 변경하고 join으로 원상태보 복귀 시킬 수 있어서 배열과 동일하게 적용됨
// search O(n)    // indexOf()나 includes()같이 특정요소 검색
// lookup  O(1)    // 특정 하나의 값만 조회
// push/pop  O(1)    // 동적 배열은 이에 해당하나, 정적 배열은 배열 길이를 미리 정하므로 Append 할 때 0{n}이 될 수 있음 (Java, C, C++ 등)
// insert  O(n)    // unshift도 이에 해당 --> 반복문안에서 사용하면 O(n^2)이 되서 사용 자제
// delete  O(n)  // shift도 이에 해당

// 장점 : 조회, push, pop에 빠르다, 순서(정렬)
// 단점 : (push,pop을 제외한) 검색, 삽입, 삭제가 느림, 정적 배열의 경우 비어있어도 큰 용량에 고정
// ############## 
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

// ############## 해시 테이블 (Hash Table) #################################################################################################################################################################
// 자바 스크립트의 객체, 파이썬의 딕셔너리가 이에 해당됨

// ############## 해시 함수
// 임의의 데이터를 고정된 크기의 고유한 해시 코드 또는 해시 값으로 변환하는 함수
// 데이터를 효율적으로 저장하고 검색하는 데 사용되며, 암호학, 데이터베이스, 데이터 구조, 보안, 알고리즘 등에 사용
// 특징과 역할 : 고유성, 고정된 출력 크기, 빠른 계산, 충돌 최소화, 원본 추론 어려움

// ############## 
// insert  O(1)
// delete  O(1)
// lookup  O(1)
// search  O(1)

// 장점 : 조회, 검색, 삽입, 삭제에 빠르다, 효율적인 Key사용
// 단점 : 순서가 존재하지 않는다, 이터러블 하지않아 Key Iteration이 느리다 
// ############## 


// ############## 링크드 리스트, 연결 리스트 (Linked Lists) #################################################################################################################################################################
// 배열들이 서로 머리부터 꼬리까지 연결되어 있는 자료구조
// 자바스크립트는 링크 리스트가 내장되있지 않지만 구현은 가능

// 전반적으로 링크드 리스트의 특징
// -- 장점 :  배열보다 추가, 제거가 빠르다, 순서(정렬)
// -- 단점 : lookup이 느리다, 전반적으로 메모리가 많이든다

// 싱글 링크드 리스트
// -- 장점 : 메모리 효율, 구현이 간단
// -- 단점 : 역방향 탐색 어려움, 접근 시간 오래 걸림
// 더블 링크드 리스트
// -- 장점 : 역방향 탐색 가능, 
// -- 단점 : 구현하기 복잡함, 메모리 비효율

// ############## 배열과 비교
// 배열: '조회'가 잦을때
// 링크드 리스트: '삽입 및 삭제' 작업이 잦을때

// ############## 
// prepend O(1)   // 앞에 추가 (unshift와 비슷하지만 시간복잡도면에서 효율적), 제거도 동일 시간복잡도
// append O(1)    // 뒤에 추가(push와 비슷), 제거도 동일 시간복잡도
// lookup O(n)
// insert O(n)  // 평균 O(1) --> 배열보다 빠름
// delete O(n)  // 평균 O(1) --> 배열보다 빠름

// ############## 자바스크립트 링크드 리스트 형식 예시
// 10 --> 5 --> 16

let myLinkedList = {
    head : {
        value : 1,
        next : {
            value : 5,
            next : {
                value : 16,
                next : null
            }
        }
    }
}

// ############## 싱글 링크드 리스트 (Singly Linked Lists)
class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head;
    this.length = 1;
  }

  // 뒤로 입력 (push 같이)
  append(value) {
    const newNode = {
      value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // 앞으로 입력 (unshift 같이)
  prepend(value) {
    const newNode = {
      value,
      next: this.head,
    };
    this.head = newNode;
    this.length++;
    return this;
  }

  // 중간에 삽입
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    } else if (index === 0) {
      return this.prepend(value);
    }
    const newNode = {
      value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    newNode.next = holdingPointer;
    leader.next = newNode;
    this.length++;
    return this;
  }

  // index이동 (lookup)
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  // 삭제
  remove(index) {
    if (index >= this.length) return this;
    else if (index <= 0) {
      this.head = this.head.next;
    } else {
      const leader = this.traverseToIndex(index - 1);
      leader.next = leader.next.next;
    }
    this.length--;
    return this;
  }

  // 반대로 뒤집기
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }

  // 배열형태로 출력
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }
}

const myLinkedList = new LinkedList(5); // 5
myLinkedList.append(16); // 5,16
myLinkedList.prepend(10); // 10, 5, 16
myLinkedList.insert(1, 99); // 10, 99, 5, 16
myLinkedList.remove(2); // 10, 99, 16
myLinkedList.reverse(); // 16, 99, 10
myLinkedList.printList();


// ############## 더블 링크드 리스트 (Doubly Linked Lists)
class DoublyLinkedList {
  constructor(value) {
    this.head = { value, next: null, prev: null };
    this.tail = this.head;
    this.length = 1;
  }

  // 뒤로입력
  append(value) {
    const newNode = {
      value,
      next: null,
      prev: null,
    };

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // 앞으로입력
  prepend(value) {
    const newNode = {
      value,
      next: this.head,
      prev: null,
    };
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  // 중간에 삽입
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    } else if (index === 0) {
      return this.prepend(value);
    }
    const newNode = {
      value,
      next: null,
      prev: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    newNode.next = follower;
    leader.next = newNode;
    newNode.prev = leader;
    follower.prev = newNode;
    this.length++;
    return this;
  }

  // index이동 (lookup)
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  // 삭제
  remove(index) {
    if (index >= this.length) return this;
    else if (index <= 0) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      const leader = this.traverseToIndex(index - 1);
      leader.next = leader.next.next;
      leader.next.prev = leader;
    }
    this.length--;
    return this;
  }

  // 배열형태로 출력
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }
}

const myDoublyLinkedList = new DoublyLinkedList(5); // 5
myDoublyLinkedList.append(16); // 5,16
myDoublyLinkedList.prepend(10); // 10, 5, 16
myDoublyLinkedList.insert(1, 99); // 10, 99, 5, 16
myDoublyLinkedList.remove(2); // 10, 99, 16
myDoublyLinkedList.printList();


// ############## 스택(Stacks) #################################################################################################################################################################
// LIFO (Last In First Out)
// 배열과, 링크리스트로 구현가능 (한쪽 통로만 사용해서)

// ############## 
// lookup O(n)
// pop, push O(1)
// peek O(1) 

// ############## 배열로 스택 구현
class Stack {
  constructor() {
    this.arr = [];
  }

  peek() {
    return this.arr[this.arr.length - 1];
  }

  push(value) {
    this.arr.push(value);
    return this;
  }

  pop() {
    this.arr.pop();
    return this;
  }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('youtube');
myStack.push('naver');
myStack.pop();
console.log(myStack.peek());

// ############## 링크리스트로 스택 구현
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) return null;
    if (this.length === 1) this.bottom = null;
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('youtube');
myStack.push('naver');
myStack.pop();
console.log(myStack);


// ############## 큐(Queues) #################################################################################################################################################################
// FIFO (First In First Out)
// 링크리스트로 구현가능 (배열은 index가 밀리기 때문에 비효율적)

// ############## 
// lookup O(n)
// enqueue, dequeue O(1)
// peek O(1) 



// #########################################################################################################################################################################################
// ############### 알고리즘 #################################################################################################################################################################
// #########################################################################################################################################################################################


















