// ############## 리마인더 #####################################################################################################################################################################

// ############## 인덱스 #####################################################################################################################################################################
// Big O notation
// 자료구조 -- 배열, 해시 테이블, 링크드 리스트, 더블 링크드 리스트, 스택, 큐, 트리, 이진 탐색 트리, 이진 힙, 트라이, 그래프
// 알고리즘 -- 재귀, 정렬, 탐색, BFS, DFS, 다이나믹 프로그래밍

// ############## Big O notation #####################################################################################################################################################################
// 좋은 코드는 1) No Repeat(중복성 없음), Consistent(일관성있는), Readible(가독성), Testable(테스트하기 좋음)  2) Scalable(Big O) ---> 2-1)속도(시간복잡도 less than O(N^2)),  2-2)메모리(공간복잡도)
// 시간복잡도, 공간복잡도, 가독성 트레이드오프를 잘 고려 해야함.

// 시간 복잡도(Time Complexity): 입력된 N의 크기에 따라 실행되는 조작의 수
// 공간 복잡도(Space Complexity): 사용하는 메모리의 양

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
// Worst Case (최악의 상황을 기준)
// Remove Constants  (상수 제거)
// Different Terms For Inputs  (입력 값의 대한 분리)
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

findNemo(large); // O(n) --> linear time (딱 배열이 길어진 만큼만 시간이 걸림, '/' 형태의 그래프)

// ############## O(1) 코드 예시

const boxes = [0, 1, 2, 3, 4, 5, 6];
const logFirstTwoBoxes = (boxes) => {
  console.log(boxes[0]); //  O(1)
  console.log(boxes[1]); //  O(1)
};

logFirstTwoBoxes(boxes); //  O(2) but O(1)로 봄 --> constant time (딱 배열이 길어져도 정해진 시간만 걸림, 'ㅡ' 형태의 그래프)

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
// 알고리즘 : Sorting, Dynamic Programming, BFS + DFS (Searching), Recursion

// #########################################################################################################################################################################################
// ############### 자료구조 #################################################################################################################################################################
// #########################################################################################################################################################################################
// ############## 배열 (Arrays) #############################################################################################################################################################
// 문자열도 배열 같이 동일 적용 
// 문자열(String) --> split --> 배열 --> join --> 문자열 

// search O(n)    // indexOf()나 includes()같이 특정 요소 찾기
// lookup  O(1)    // 특정 하나의 값만 조회
// push/pop  O(1)    // 동적 배열: O(1), 정적 배열 : 0{n} --> 배열 길이 재 조정 (Java, C, C++ 등)
// insert  O(n)    // unshift 포함 --> 반복문안에서 사용하면 O(n^2)이 되서 사용 자제
// delete  O(n)  // shift 포함

// 장점 : 조회, push, pop에 빠르다, 순서가 있다
// 단점 : (push, pop을 제외한) 검색, 삽입, 삭제가 느림, 정적 배열의 경우 비어있어도 큰 용량에 고정
// ##############
const strings = ['a', 'b', 'c', 'd'];
strings[2]; // O(1)
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
// 자바 스크립트의 객체, 파이썬의 딕셔너리

// ############## 해시 함수 란
// 임의의 데이터를 고정된 크기의 고유한 해시 코드 또는 해시 값으로 변환하는 함수
// 암호학, 데이터베이스, 데이터 구조, 보안 등에 사용
// 특징과 역할 : 고유성, 고정된 출력 크기, 빠른 계산, 충돌 최소화, 원본 추론 어려움

// ##############
// insert  O(1)
// delete  O(1)
// lookup  O(1)
// search  O(1)

// 장점 : 조회, 검색, 삽입, 삭제에 빠르다, 효율적인 Key사용
// 단점 : 순서가 존재X , 이터러블 하지않음

// ############## 링크드 리스트, 연결 리스트 (Linked Lists) #################################################################################################################################################################
// 배열들을 머리부터 꼬리까지 연결
// 자바스크립트는 링크 리스트가 내장 X

// 전반적으로 링크드 리스트의 특징
// -- 장점 : 배열보다 추가 및 제거가 빠름, 순서가 존재
// -- 단점 : lookup이 느리다, 전반적으로 메모리가 많이든다

// 싱글 링크드 리스트
// -- 장점 : 메모리 효율, 구현이 간단
// -- 단점 : 역방향 탐색 어려움, 접근 시간 오래 걸림
// 더블 링크드 리스트
// -- 장점 : 역방향 탐색 쉬움,
// -- 단점 : 구현하기 복잡함, 메모리 비효율

// ############## 배열과 비교
// 배열 : '조회(lookup)'가 잦을때
// 링크드 리스트 : '삽입 및 삭제'아 잦을때

// ##############
// prepend O(1)   // 앞에 추가(배열의 unshift보다 효율적), 제거도 동일
// append O(1)    // 뒤에 추가(push), 제거도 동일
// lookup O(n)
// insert O(n)  // 평균 O(1) --> 배열보다 빠름
// delete O(n)  // 평균 O(1) --> 배열보다 빠름

// ############## 자바스크립트 링크드 리스트 형식 예시
// 10 --> 5 --> 16

let myLinkedList = {
  head: {
    value: 1,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null,
      },
    },
  },
};

// ############## 싱글 링크드 리스트 (Singly Linked Lists)
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head;  // !! 참고 부분 !!
    this.length = 1;
  }

  // 뒤로 입력 (push 같이)
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;  // this.tail.next는 객체의 내부라서 같은 주소로 연결 되어있는 this.head의 값도 같이 변경됨 (위에 !! 참고 부분 !!)
    this.tail = newNode;  // this.tail 자체 값을 변경하면 this.head에는 영향 없음
    this.length++;
    return this;
  }

  // 앞으로 입력 (unshift 같이)
  prepend(value) {
    const newNode = new Node(value, this.head);
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
    const newNode = new Node(value);
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
console.log(myLinkedList);
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
// 배열과, 링크리스트로 구현 (한쪽 통로만 사용해서)

// 스택과 큐의 장단점 동일함
// -- 장점 : 빠른 삽입 및 제거, 빠른 peek 확인, 순서(정렬)
// -- 단점 : lookup이 느리다
// ##############
// lookup O(n)
// pop, push O(1)
// peek O(1)

// ############## 배열로 스택 구현
class Stack {
  constructor() {
    this.arr = [];
  }

  // 확인
  peek() {
    return this.arr[this.arr.length - 1];
  }

  // Last In
  push(value) {
    this.arr.push(value);
    return this;
  }

  // First Out
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

  // 확인
  peek() {
    return this.top;
  }

  // Last In
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

  // First Out
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
// 링크리스트로 구현 (배열은 index가 뒤로 밀려서 비효율적)

// 스택과 큐의 장단점 동일함
// -- 장점 :  빠른 삽입 및 제거, 빠른 peek 확인, 순서 존재
// -- 단점 : lookup이 느리다
// ##############
// lookup O(n)
// enqueue, dequeue O(1)
// peek O(1)

// ############## 링크리스트로 스택 구현
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // 확인
  peek() {
    return this.first;
  }

  // First In
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  // First Out
  dequeue() {
    if (!this.first) return null;
    if (this.length === 1) this.last = null;
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const myQueue = new Queue();
myQueue.enqueue('a');
myQueue.enqueue('b');
myQueue.enqueue('c');
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue);

// ############## 트리(Tree) #################################################################################################################################################################
// ############################################################################################################################################ 이진트리 (Binary Tree) #######################
// 하나의 뿌리 당 0,1,2개의 자식 노드를 가진 트리

// 완전 이진 트리 (Perfect Binary Tree): 모든 노드 --> 2개씩, 마지막 리프노드 --> 0개 (노드가 늘어날때 두배가 됨 -> 리프 노드 = 모든 노드 + 1)
// 포화 이진 트리 (Full Binary Tree): 0개 혹은 2개씩 차있는 트리 (1개만X)

// ############## 이진 탐색 트리 (Binary Search Tree)
// 왼쪽 --> 작은숫자, 오른쪽 --> 큰 숫자
// 2개노드 까지만 가능

// 장점 :  O(n)보단 낫다, 순서 존재, 유동적인 사이즈
// 단점 : 그렇다고 O(1)은 아니다.

// 밸런스가 맞은 경우
// lookup O(log N)
// insert O(log N)
// delete O(log N)

// 밸런스가 맞지 않은 경우 (배열처럼 O(n)같이 됨)
// lookup O(n)
// insert O(n)
// delete O(n)

// ##############
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // 노드 생성
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        // 적으면 왼쪽으로 (노드가 없을때 새 노드 적용)
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
          // 크면 오른쪽으로 (노드가 없을때 새 노드 적용)
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  // 노드 조회
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
  }

  // remove는 너무어려워서 중요하진 않음
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

const tranverse = (node) => {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : tranverse(node.left);
  tree.right = node.right === null ? null : tranverse(node.right);
  return tree;
};

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.insert(0);
tree.insert(3);
tree.insert(5);
tree.insert(7);
tree.insert(11);
tree.insert(16);
tree.insert(22);
tree.insert(175);
//               9
//        4           20
//      1   6      15   170
//    0  3 5  7  11 16 22  175

tree.remove(20);

// console.log(tree.lookup(4));

// 브라우저 console에서 조회 하려고
console.log(JSON.stringify(tranverse(tree.root)));


// ############## Balanced BST (균형 이진 탐색 트리) -> (AVL Tree, Red Black Tree)
// AVL Tree와 Red Black Tree 같은 균형 이진 탐색 트리는 트리가 벨런스가 맞게 알아서 조절함

// ############################################################################################################################################ 이진 힙 (Binary Heap) #######################
// 트리의 한 종류
// 자식 노드일수록 숫자가 작아짐
// 왼쪽, 오른쪽 구분이 없으며 저절로 균형이 맞아감
// 참고 !! 자료구조 힙과 자바스크립트 런타임 엔진에 사용되는 메모리 힙과는 전혀 다름.

// ##############
// 장점 : O(n)보단 낫다, 유동적인 사이즈, 삽입이 빠르다, 우선순위를 가짐
// 단점 : lookup이 느리다

// lookup O(n)    // 두 방향 모두 숫자가 작아서 어느 방향인지 모르므로 다 찾아 봐야함
// insert O(log N)
// delete O(log N)

// ############## 우선순위 큐
// 일반 큐보다 먼저 실행되게 한다

// ############################################################################################################################################ 트라이 (Trie) #######################
// 가지를 따라 단어를 저장, 각 노드는 문자를 나타냄
// 공간 효율적: 중복 문자열 공간을 아낌
// 시간 복잡도: O(L) // L 은 문자열의 길이
// 용도: 문자열 검색, 자동 완성, 철자 검사, IP 주소 관리, 등

// ############## 그래프(Graph) ###########################################################################################################################################################
// 장점 : 관계성
// 단점 : 노드가 추가될 수록 복잡해져서 확장이 어려움

// ############## 그래프 종류
// Directed : 단방향 (양방향이 될수도있음)
// Undirected : 양방향

// Weighted Graph : 노드간에 거리, 비용 (중요도)이 다름  ex) 빠른길 찾기, 중요한 친구 등
// Unweighted Graph : 노드간에 중요도가 동일

// Cyclic : 순환적
// Acyclic : 순환적 X

// ########################################################################################################################################################## 그래프 연결 종류 ##############
//                2ㅡㅡㅡㅡㅡ0
//               / \
//              /   \
//             /     \
//            1ㅡㅡㅡㅡ3

// ############## Edge List
// 모든 커넥션별로 묶음 (항상 두 숫자씩)
const graph1 = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// ############## Adjacent List
// index와 숫자
const graph2 = [
  [2], // 0 (index 0은 2랑만 연결되있음)
  [2, 3], // 1
  [0, 1, 3], // 2
  [1, 2], // 3
];

// ############## Adjacent Matrix (Array 버전)
// index와 숫자 (2진수)
const graph3 = [
  [0, 0, 1, 0], // 0 (index 0은 2랑만 연결되있어수 index 2만 1)
  [0, 0, 1, 1], // 1
  [1, 1, 0, 1], // 2
  [0, 1, 1, 0], // 3
];

// ############## Adjacent Matrix (Object 버전)
const graph4 = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0],
};

// ########################################################################################################################################################## 그래프 구현  ##############
// ############## Adjacent List
class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  // 노드 추가
  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }
  // 각 노드끼리 연결
  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
  // 연결된 노드들 확인
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = '';
      for (let vertex of nodeConnections) {
        connections += vertex + ' ';
      }
      console.log(node + '-->' + connections);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');

myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

// console.log(myGraph);
myGraph.showConnections();


// #########################################################################################################################################################################################
// ############### 알고리즘 #################################################################################################################################################################
// #########################################################################################################################################################################################
// ############# 재귀(Recursion) ###########################################################################################################################################################
// 자신을 호출하는 것
// 종료 조건이 항상 필요

// ############## 재귀와 반복 차이
// 반복(Iterative)
// -- 장점 : Big O notation이 기껏해야 0(n)
// -- 단점 : 상대적으로 가독성이 떨어짐

// 재귀(Recursive)
// -- 장점 : 상대적으로 가독성이 좋음
// -- 단점 : 스택 오버플로우 가능성 0(2^n), 추가 메모리 사용, 디버깅 어려움

// ############## 팩토리얼 계산 (5! = 5 * 4 * 3 * 2 * 1)
// 재귀적인 방법
const findFactorialRecursive = (number) => {
  // 0(n)
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1); // factorial(5) -> 5 * factorial(4) ->  4 * factorial(3) -> 3 * factorial(2) ...
};
console.log(findFactorialRecursive(5));

// 반복문적인 방법
const findFactorialIteratie = (number) => {
  // 0(n)
  let answer = 1;
  if (number === 2) {
    answer = 2;
  }
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }

  return answer;
};
console.log(findFactorialIteratie(5));

// ############## 피보나치 계산 (0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...)
// 재귀적인 방법
const fibonacciRecursive = (n) => {
  // 0(2^n) --> 사실 좋은 방법이 아님
  if (n < 2) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};
console.log(fibonacciRecursive(5));

// 반복문적인 방법
const fibonacciIterative = (n) => {
  // 0(n)
  let arr = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
};
console.log(fibonacciIterative(5));

// ############# 정렬(Sorting) ###########################################################################################################################################################
// https://www.toptal.com/developers/sorting-algorithms  // Sorting 속도 참고
// 합병정렬 (Merge Sort), 퀵 정렬 (Quick Sort)이 주로 쓰임

// !! 코드 구현법은 외우지말고 종류별로 장단점을 이해할 것 !!

// ############## 사용할 때 추천
// 삽입 정렬 (Insertion Sort) : 입력값이 적을 때, 어느정도 정렬 되있을 떄, 공간 복잡도를 고려할 때, (단점 : 평균적으로 합병 정렬, 퀵 정렬 보다 훨씬 느림)
// 합병 정렬 (Merge Sort) : 최악의 경우를 생각할 때 무난함, (단점 : 공간 복잡도가 높다)
// 퀵 정렬 (Quick Sort) : 공간 복잡도가 낮고 빠름, (단점 : 피벗이 좋지 않은 최악의 경우 O(n^2)이 될 수있음)

// 버블 정렬 (Bubble Sort), 선택 정렬 (Selection Sort) : 비추

// ######################################################################################################################################### 버블 정렬 (Bubble Sort) #######################
// 인접한 두 원소 비교 정렬
// 심플하고 기초적 but 비효율적임, 대규모 정렬에 비추
// O(n^2)

// ##############
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const bubbleSort = (arr) => {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap numbers
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

bubbleSort(numbers);
console.log(numbers);

// ######################################################################################################################################### 선택 정렬 (Selection Sort) #######################
// 가장 작은 (또는 가장 큰) 원소를 찾음 --> 맨 앞 원소와 교체 --> 이미 정렬된 것을 제외하고 처음부터 끝까지 반복
// 심플하고 기초적 but 비효율적, 대규모 정렬에 비추
// O(n^2)

// ##############
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const selectionSort = (arr) => {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    let temp = arr[i];
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    arr[i] = arr[min];
    arr[min] = temp;
  }
};

selectionSort(numbers);
console.log(numbers);

// ######################################################################################################################################### 삽입 정렬 (Insertion Sort) #######################
// 적절한 위치에 "삽입"하여 정렬
// 원소 수가 적거나, 거이 정렬 되있는 경우 매우 빠름
// O(n^2)

// ##############
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const insertionSort = (arr) => {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] < arr[0]) { // index 0과 비교해서 작으면 맨앞에 둠
      arr.unshift(arr.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
          arr.splice(j, 0, arr.splice(i, 1)[0]);
        }
      }
    }
  }
};

insertionSort(numbers);
console.log(numbers);

// ######################################################################################################################################### 합병 정렬 (Merge Sort) #######################
// 반으로 계속 쪼갬 --> 1) 두 배열 끼리 비교 --> 2) 적은 수를 앞에 두고 결과를 합침 --> 1번 2번 반복
// [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0] ------> [99], [44], [6], [2], [1], [5], [63], [87], [283], [4], [0] ------> [44, 99], [1, 2, 6], [5, 63, 87], [0, 4, 283]
//   ------>  [1, 2, 6, 44, 99], [0, 4, 5, 63, 87, 283]  ------> [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]
// 재귀 함수 이용
// 분할 정복(Divide and Conquer) 
// 대규모 정렬에도 효율적 (최악의 경우 고려 시 가장 무난)
// 공간 복잡도를 고려시 주의
// O(n log n)

// ##############
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }

  const length = arr.length;
  const middle = Math.floor(length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
};

const answer = mergeSort(numbers);
console.log(answer);

// ######################################################################################################################################### 퀵 정렬 (Quick Sort) #######################
// 피벗으로 지정 --> 피벗 기준 작은값은 왼쪽에, 큰 값은 오른쪽에 배치 --> 마지막에 합침 (재귀 함수 이용)
// 최악의 경우 O(n^2)  --> 피벗이 안좋으면 피하는게 좋다
// 평균 O(n log n)

// ##############
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

function partition(array, pivot, left, right) {
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);

// ############## 탐색 (Searching) / BFS, DFS ############################################################################################################################################
// ######################################################################################################################################### 선형 탐색 (Linear Search) #####################
// index 0부터 일일이 찾아봄 (큰 데이터 셋에선 비효율적)
// 일반적으로 내장되있는 기능

// ##############
const beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur'];
// indexOf
beasts.indexOf('Godzilla');

// findIndex
beasts.findIndex((item) => {
  return item === 'Godzilla';
});

// find
beasts.find((item) => {
  return item === 'Godzilla';
});

// includes
beasts.includes('Godzilla');

// ######################################################################################################################################### 이진 탐색 (Binary Search) #######################
// 분할 정복(Divide and Conquer)방식 (이진 탐색 트리를 이용함)
// O(log n)

// ###################################################################################################################################### BFS(Breadth First Search) / Traverser ##################
// 너비를 먼저 탐색
// 큐로 구현
// O(n)

// -- 장점 : 최단경로, 루트 노드 근처, 트리가 깊지만 해결책이 많이 없을때
// -- 단점 : 더 많은 메모리 소모
// ############## 예시
//               9
//        4           20
//      1   6      15   170

// BFS - [9, 4, 20, 1, 6, 15, 170]

// ###################################################################################################################################### DFS(Depth First Search) / Traverser ##################
// 왼쪽부터 깊이 먼저 탐색
// 스택이나 재귀 함수로 구현
// O(n)

// -- 장점 : 경로 추적(미로찾기), 메모리 덜 소모, 길 존재 여부, 해결책은 많은데 대부분 깊은 곳에 위치해 있을때, 트리가 너무 넓을 때(메모리 문제 때문에)
// -- 단점 : 느려지기쉬음, Cyclic 그래프에서 무한 루프 가능성, 스택오버플로우 가능성
// ############## 예시 (InOrder, PreOrder, PostOrder)
//               9
//        4           20
//      1   6      15   170

// PreOrder - [9, 4, 1, 6, 20, 15, 170]
// InOrder - [1, 4, 6, 9, 15, 20, 170]
// PostOrder - [1, 6, 4, 15, 170, 20, 9]

// ############################################################################################################################# BFS (반복, 재귀) / DFS (PreOrder, InOrder, PostOrder) 코드 예시 ######
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // 노드 생성
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  // ... 생략 ...

  // BFS (반복문)
  BreadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }

  // BFS (재귀함수 버전)
  BreadthFirstSearchR(queue, list) {
    if (!queue.length) {
      return list;
    }
    const currentNode = queue.shift();
    list.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    return this.BreadthFirstSearchR(queue, list);
  }

  // DFS (PreOrder) 초기 호출
  DFTPreOrder() {
    return traversePreOrder(this.root, []);
  }

  // DFS (InOrder) 초기 호출
  DFTInOrder() {
    return traverseInOrder(this.root, []);
  }

  // DFS (PostOrder) 초기 호출
  DFTPostOrder() {
    return traversePostOrder(this.root, []);
  }
}

// DFS (PreOrder) 재귀함수
const traversePreOrder = (node, list) => {
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
};

// DFS (InOrder) 재귀함수
const traverseInOrder = (node, list) => {
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
};

// DFS (PostOrder) 재귀함수
const traversePostOrder = (node, list) => {
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
};

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.insert(0);
tree.insert(3);
tree.insert(5);
tree.insert(7);
tree.insert(11);
tree.insert(16);
tree.insert(22);
tree.insert(175);

//               9
//        4           20
//      1   6      15   170
//    0  3 5  7  11 16 22  175

console.log('BFS', tree.BreadthFirstSearch()); // [9, 4, 20, 1, 6, 15, 170, 0, 3, 5, 7, 11, 16, 22, 175]
console.log('BFS', tree.BreadthFirstSearchR([tree.root], []));
console.log('DFSin', tree.DFTInOrder()); // [0, 1, 3, 4, 5, 6, 7, 9, 11, 15, 16, 20, 22, 170, 175]
console.log('DFSpre', tree.DFTPreOrder()); // [9, 4, 1, 0, 3, 6, 5, 7, 20, 15, 11, 16, 170, 22, 175]
console.log('DFSpost', tree.DFTPostOrder()); // [0, 3, 1, 5, 7, 6, 4, 11, 16, 15, 22, 175, 170, 20, 9]

// ############### 다이나믹 프로그래밍 (Dynamic Programming, DP) #############################################################################################################################
// 계산 결과를 캐싱(메모이제이션)하여 중복 계산을 피함

// ############## 클로저를 이용한 캐싱
const memoizeAddTo80 = (n) => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('long time');
      const answer = n + 80;
      cache[n] = answer;
      return answer;
    }
  };
};

const memoized = memoizeAddTo80();

console.log(1, memoized(6));
console.log(2, memoized(2));
console.log(2, memoized(2));

// ##############
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
let calculations = 0;

const fibonacci = (n) => {
  // O(2^n) --> DP없이 재귀함수 이용
  calculations++; // 몇번 불렸는지 계산

  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const fibonacciMaster = () => {
  // O(n) --> DP방식으로 재귀함수 이용
  let cache = {};
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
};

const fasterFib = fibonacciMaster();

console.log('Slow', fibonacci(35));
console.log('DP', fasterFib(100));
console.log('we did ' + calculations + ' calculations');
