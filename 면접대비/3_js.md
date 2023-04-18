- `프로그래밍 🔥`
  - 프로그래밍이란?
    - 실행을 요구하는 일종의 커뮤니케이션
    - 0과 1밖에 알지 못하는 기계가 실행할 수 있을 정도로 정확하고 자세한 요구를 설명하고 명령하는 것
    - 해결해야 할 문제를 명확히 이해한 후 적절한 문제 해결 방안을 정의할 필요가 있음
    
  - 컴파일러, 인터프리터 (기계어로 번역하는 번역기)
    - 컴파일러 : 소스 코드를 한꺼번에 기계어로 번역하여 실행 가능한 파일을 만듭니다 
    - 인터프리터 : 소스 코드를 한 줄씩 잃고 실행하여 결과를 출력, 컴파일러보다 느리지만 코드 작성과 수정이 더 쉽다

- `자바스크립트란 🔥`
  - 자바스크립트의 특징
    - 웹 브라우저에서 동작하는 유일한 프로그래밍언어
    - 인터프리터, 객체 기반의 스크립트언어

- `변수 🔥`
  - 변수란?
    - 변수는 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 공간을 식별하기 위해 붙인 이름 
  - 식별자란(identifier)? 🔥
    - 식별자는 어떤 값을 구별해서 식별할 수 있는 고유한 이름
    - 메모리 상에 존재하는 어떤 값을 식별할 수 있는 이름들 (변수, 함수, 클래스 등)
    - 일반적으로 영문,숫자,밑줄로 구성 ex)myVar, total_num ...
  - 변수를 선언한다는 것의 의미
    - 값을 저장하기 위한 메모리 공간을 확보하고, 변수 이름과 확보된 메모리 공간의 주소를 연결해서 값을 저장할 수있게 준비하는 것
  - var
    - 변수를 의미하는 variable의 약자로, 새로운 변수를 선언할 것을 지시하는 키워드 혹은 명령어
    - 변수 선언하면 메모리 공간에는 비어있는 것이 아니라 undefined가 기본적으로 입력됨
  - 호이스팅이란? 🔥🔥🔥🔥
    - 호이스팅이란 변수나 함수 등이 어디에 위치하던지와 상관없이 어디서든지 참조할 수 있게 하는 것
    - 모든 선언문은 런타임 이전 단계에서 끌어올려 먼저 실행되기 때문에, 모든 식별자(변수, 함수, 클래스 등)가 호이스팅이 된다
  - var의 문제점 🔥🔥
    - 변수 중복 선언 허용
    - 함수 레벨 스코프 (if, for, while, try/catch문과 같은 블록 레벨은 지역 스코프로 인정하지않음)
    - 변수 호이스팅 (var는 변수 선언전에도 사용가능하고, let과 const도 호이스팅은 되지만 사용불가)
  - let과 var의 차이 🔥🔥🔥 : let은 ES6에서 도입하였으며 var의 문제점을 보완하였음
    - let은 중복 선언 불가
    - let은 함수 레벨, 블록 레벨 스코프 (함수와 if, for, while, try/catch문 모두 지역 스코프로 인정)
    - let은 변수 호이스팅이 발생하지 않는 것처럼 동작함 (실제로는 호이스팅이 됨)
    
  - TDZ 🔥🔥🔥 : let과 const가 호이스팅은 되지만 선언문 이전에 사용 불가능 한 이유
    - 선언단계(호이스팅되어 스코프 맨위에서 선언) --> 일시적 사각지대(TDZ) --> 초기화 단계(실제 선언문이 있는부분, undefined으로 초기화) --> 할당 단계
    - var는 TDZ가 존재하지 않아 선언 단계가 곧 초기화 단계가 되어 호이스팅되면 undefind가됨
  - const 🔥🔥
    - 선언과 동시에 초기화해야 한다 (undefined X)
    - 재할당 불가
    - 상수로 사용
  - 식별자 네이밍 규칙
    - 영문 대소문자, 숫자, 언더스코어(_), 달러기호($)만 포함
    - 숫자로 시작할 수 없음
    - 공백 X
    - 예약어 X
    - 대소문자를 구분
  - 네이밍 컨벤션
    - 카멜 케이스 (camelCase) : 첫번째 단어는 소문자, 그 이후 각 단어의 첫글자를 대문자로 ex) firstName
    - 스네이크 케이스 (snake_case) : 모든 단어를 소문자로 적고, 단어 사이를 언더스코어(_)로 구분 ex) student_grade
    - 파스칼 케이스 (PascalCase) : 단어의 첫 글자를 대문자로 적는 방식이며 클래스이름 짓는데 주로사용 ex) FirstName
    - 헝가리언 케이스 (typeHungarianCase) : 타입을 접두사로 앞에 붙이는 방식 ex) strName, nCount
  - 리터럴이란?
    - 변수에 할당할 수 있는 고정된 값 (하드코딩할 수 있는 값)

- `데이터 타입 🔥`
  - 데이터 타입의 종류 🔥 : 원시타입 (number, string, boolean, undefined, null, symbol, bigint) / 객체타입 (object, function, array)
  - 심벌 타입이란?
    - 유일하고 수정불가능한 식별자를 만드는 데 사용 (식별자 중복을 방지하기 위한 용도)
    - ex) const mySymbolWithValue = Symbol('Hello');
  - 데이터 타입이 필요한 이유 🔥
    - 효율적으로 메모리 공간의 크기를 결정하기 위해
    - 2진수를 어떻게 해석할지 결정하기 위해
  - 정적 타이핑
    - 데이터 타입을 사전에 선언(명시적 타입 선언)을 해야함
    - 타입스크립트, C, C++, 자바, 코틀린, 고, 러스트
  - 동적 타이핑
    - 재 할당에 의해 변수의 타입은 언제든지 동적으로 변할 수있음
    - 자바스크립트, 파이썬
    
- `타입변환과 단축 평가 🔥`
  - 명시적 타입 변환이란?
    - 개발자가 의도적으로 값의 타입을 변환하는 것을 명시적 타입 변환 또는 타입 캐스팅이라 한다 
  - 명시적 타입 변환 함수의 예시
    - String(숫자) , 숫자.toString() 등
  - 암묵적 타입 변환이란?
    - 개발자의 의도와는 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되는 것을 암묵적 타입 변환 또는 강제 타입 변환이라 한다
    - 명시적으로 타입을 변환하는 것보다 간편하지만, 예상치 못한 결과를 초래할 수도 있음
    - ex) const num = "2" + 3   ----> 여기서 num 숫자형 5 ("2"는 문자형이였음)
  - truthy / falsy 한 값이 뭔가요?
    - boolean값이 아니더라 truthy / falsy 하게 암묵적 타입 변환이 이뤄지는것
    - true : 1, "0", " ", 등
    - false : 0, undefined, "", 등

- undeclared 란? 
  - null : 변수선언 O, 빈 변수 할당 O 
  - undefined : 변수선언 O, 변수 할당 X 
  - undeclared : 변수선언 X, 변수 할당 X (오류)

- `배열 🔥`
  - 자바스크립트의 배열과 자료구조의 배열
    - 자바스크립트 : 어떤 타입이든 섞어서 사용가능, 배열 길이 조정가능, 메소드 지원, 희소 배열(sparse array)
    - 자료구조 : 하나의 타입만 가능, 초기선언 배열 길이 유지해야함, 메소드 지원하지 않음, 밀집 배열(dense array)

  - 배열의 메서드
    - 원본 배열을 직접 변경하는 메서드 : push, pop, unshift, shift, splice, join, reverse, fill
    - 새로운 배열을 생성하여 반환하는 메서드 : isArray, indexOf, concat, slice, includes

  - 고차 함수란?
    - 함수를 매개변수로 전달받거나, 함수를 반환하는 함수
    - 원본 배열로 사용 로직을 위한 조건문과 반복문을 제거하는 복잡성을 해결하고 변수의 사용을 억제하여 쉽게 새로운 결과값을 창조하는데 유용
    - sort, forEach, map, filter, reduce, some, every, find

  - forEach와 map의 차이
    - 공통점은 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출, 파라미터 순(1 배열의 요소값, 2 인덱스, 3 배열 자기 자신(this))
    - forEach는 단순히 반복문을 대체하기 위한 고차 함수이며, 항상 undefind를 반환
    - map은 새로운 배열을 반환하는 고차 함수

- `객체 리터럴 🔥`
  - 자바스크립트에서 객체란?
    - 함수, 배열, 객체, 정규표현식 등이 객체에 속함
    - 원시 타입은 하나의 값이지만, 객체 타입은 다양한 타입의 값으로 구성한 복합적인 자료구조
  - 함수와 메서드의 차이점
    - 메서드는 객체에 묶여있는 함수를 의미
  - 객체를 생성하는 방법
    - 객체 리터럴 : const person = { name: 'John', age: 30, city: 'New York' };
    - Object 생성자 함수 : const person = new Object(); person.name = "John"; person.age = 30;
    - 생성자 함수 : function Person(name, age, city) { this.name = name; this.age = age;}; const person = new Person('John', 30);
    - Object.create 메서드 : const person = Object.create(null); person.name = 'John'; person.age = 30;
    - 클래스(ES6)
  - 전역 객체
    - 코드가 실행되기(런타임) 이전 단계에 자바스크립트 엔진에 의해 생성되는 어떤 환경에서도 접근 가능한 특수한 객체
    - 프로그램 전체에서 공유되는 기본적인 기능들을 제공
    - 브라우저에서는 window 객체, Node.js에서는 global 객체와 같은 호스트 객체들도 전역 객체 중 하나

- `원시 값과 객체 비교 🔥`
  - 동적 타이핑을 지원하는 자바스크립트에서 데이터의 타입을 크게 2개로 나누는 이유
    - 원시타입의 값은 변경 불가능한 값이고, 객체(참조)타입의 값은 변경 가능한 값이다
    - 원시값을 변수에 담으면 실제 값이 저장되고, 객체를 변수에 담으면 메모리주소가 저장된다
    - 원시값이 저장된 변수를 다른 변수에 할당하면 이를 값에 의한 전달이라함, 객체가 담긴 변수를 다른변수에 할당하면 이를 참조에 의한 전달이라함.
  - 값에 의한 전달
    - 원시타입의 실제 값을 전달하는것
  - 참조에 의한 전달
    - 객체타입의 주소(참조) 값을 전달하는것

- 얕은 복사와 깊은 복사
  - 얕은 복사(Shallow Copy)
    - 객체를 참조하는 메모리 주소만을 복사하는 방법, 한쪽에서 해당 객체를 변경하면 다른 한쪽에서도 그대로 반영
  - 깊은 복사(Deep Copy)
    - 객체를 완전히 새로운 메모리 공간에 복사하는 방법, 객체를 변경해도 다른 한쪽에서는 영향을 받지 않음

- `함수 🔥`
  - 함수를 정의하는 방법
    - 함수 선언문 
    ```
    function add(x,y){
      return x+y;
    }
    ```
    - 함수 표현식
    ```
    var add = function(x,y){
      return x + y;
    }
    ```
    - 생성자 함수
    ```
    var add = new Function('x','y', 'return x+y');
    ```
    - 화살표 함수
    ```
    var add = (x,y) => x+y;
    ```
  - 함수 선언문과 함수 표현식의 차이
    - 함수 선언문은 함수 호이스팅에 의해 런타임 전에 맨위로 끌어 올려져 호출 부분이 함수보다 위에 있어도 작동함 (var에의한 변수 호이스팅은 undefined가되지만 함수 호이스팅은 문제없이 호출가능하게 한다)
    - 함수 표현식은 함수 호출 부분이 함수보다 밑에 위치해 있어야 한다 그 이유는 변수에 함수가 담긴것이어서 호이스팅이 되도 var는 undefined가 되고 let,const는 TDZ가 존재하기 때문
  - 즉시 실행 함수(IIFE: Immediately Invoked Function Expression)에 대해
    - 함수 자체는 자신이 작성한 코드를 지역 스코프로 지정 할수있어서 협업시 다른 개발자가 만든 식별자가 내 것과 같거나 하는 코드 충돌을 피하기 위해 쓰임
  - 일반 함수 애로우 함수 차이 : 애로우 함수가 가독성에 좋아 주로 사용하는 것이 좋음
    - 일반함수 : this가 동적으로 결정, 생성자 함수 사용 O, 반드시 명시적으로 return 키워드를 사용하여 값을 반환, 파라미터 없이 arguments 변수 사용 O, 
    - 에로우함수 : this가 상위스코프의 this로 정적으로 결정, 생성자 함수 사용 X, 한 줄짜리 표현식을 반환할 경우 괄호 없이 작성하면 암묵적으로 값을 반환, 파라미터 없이 arguments 변수 사용 X

- `스코프 🔥`
  - 스코프란? 🔥🔥🔥
    - 식별자(변수)가 유효한 범위
  - 스코프의 종류 🔥🔥
    - 지역변수를 위한 지역 스코프와 전역변수를 위한 전역 스코프
  - 렉시컬 스코프(정적 스코프)란? 🔥
    - 함수를 어디서 '호출'했는지가 아닌 어디서 '정의'했는지에 따라 함수의 상위 스코프를 결정하는 것
  - 전역 변수로 변수를 선언하면 생기는 문제점
    - 암묵적 결합 : 변수의 유효범위 즉 스코프가 클수록 가독성은 나빠지고 의도치 않게 상태가 변경 될 수 있는 위험도가 높아짐
    - 메모리 낭비 : 전역 변수로 계속 남아있어서 메모리 사용량이 늘어날 수 있음
    - 의존성 증가: 전역 변수를 사용한 함수는 해당 변수에 의존성을 가지기 때문에 코드 유지 보수나 리팩토링이 어려움
    - 네임스페이스 오염 : 다른 라이브러리나 모듈에서 사용되는 변수 이름과 충돌 할 가능성이 

- `생성자 함수에 의한 객체 생성 🔥`
  - 생성자 함수란?
    - new 연산자와 함께 호출하여 객체를 생성하여 필요한 프로퍼티나 메서드를 정의 할 수 있는 함수
    - 주로 this 키워드를 이용하여 새로운 객체를 생성
    - 일반 함수와 구문적으로 동일하지만 앞에 대문자로 시작하는 이름을 가짐
    - 인스턴스는 생성자 함수에 의헤 생성된 객체를 말함
    - 자바스크립트는  Object, String, Number, Boolean, Function, Array, Date, RegExp, Promise 등의 빌트인 생성자 함수를 제공
  - 객체 리터럴로 만들 때와의 차이, 생성자 함수쓰는 이유
    - 객체 리터럴 방식 : 단 하나의 객체만 생성 (동일한 프로퍼티를 갖는 여러개의 객체를 생성할때 비효율적)
    - 생성자 함수 방식 : 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성 (붕어빵 빵틀 같은역할)
  - 생성자 함수가 객체(인스턴스)를 생성하는 과정
    - 생성자 함수 선언 --> 인스턴스 생성 --> 인스턴스 초기화 --> 인스턴스 반환
    ```
    // 1. 생성자 함수 선언
    function Circle(radius) {
      // 3. 인스턴스 초기화
      this.radius = radius;
      this.getDiameter = function () {
        return 2 * this.radius;
      };
      // 4. 생성자 함수를 호출할 때 넣은 인수를 this 바인딩을 통해 프로퍼티에 할당한 뒤, 인스턴스를 반환한다
    }
    // 2. 인스턴스 생성
    const circle1 = new Circle(5); // 반지름이 5인 Circle 객체를 생성
    ```
 
- `함수와 일급 객체 🔥`
  - 일급 객체란?
    - 함수가 하나의 값처럼 다루어질 수 있는 객체
  - 함수가 일급 객체라면, 일급 객체로 뭘 할 수 있나요?
    - 함수 이름 없이 생성가능 (무명의 리터럴)
    - 변수나, 자료구조(객체,배열)에 저장가능
    - 매개변수와 리턴값으로 사용될 수 있음 (고차함수)
  - 함수형 프로그래밍이란? 🔥🔥
    - 외부 상태에 영향받거나 주지않는 순수 함수를 통해 부수효과를 최대한 억제하여 오류를 피하고 프로그램의 안전성을 높이려는 프로그래밍
  - 순수 함수와 일반 함수 차이 🔥🔥
    - 순수 함수는 입력이 같으면 항상 같은 출력을 반환하고, 외부 상태를 의존하지 않는 부작용이 없는 함수
    - 일반 함수는 항상 같은 출력을 반환하지 않을 수 있으며, 외부 상태에 영향받을 수 있음

- `프로토타입 🔥`
  - 객체지향 프로그래밍(OOP, Object Oriented Programing) 🔥
    - 절차지향적이 아닌 독립적 단위, 즉 객체의 집합으로 프로그램을 표현하려는 프로그래밍
  - 객체지향 프로그래밍의 특징 🔥
    - 추상화 (Abstraciton) : 객체의 다양한 속성 중 프로그램에 필요한 속성만 간추려 표현한 것 (클래스가 어떻게 동작하는지 다 알 필요는 없고 사용자는 사용법만 알면됨)
    - 캡슐화 (Encapsulation) : 데이터를 다루는 방법과 목적에 따라 결합, 변수와 함수를 하나로 묶음
    - 상속 (Inheritance) : 포괄적으로 쓰이는 부모부분을 여러 자식들이 물려받아 동일하게 사용하게 
    - 다형성 (Polymorphism) : 부모클레스에서 물려받은 가상 함수를 자식 클래스 내에서 오버라이딩 되어 사용되는 것
  - 자바스크립트는 객체지향 프로그래밍 언어인가요?
    - 객체지향 프로그래밍 + 함수형 프로그래밍
    - 자바스크립트는 클래스 기반 객체지향 (ES6), 프로토타입 기반 객체지향 (ES5 이전) 둘다 지원
  - 프로토타입이란?
    - 객체 간에 상속을 구현하기 위해 사용되는 객체이고, 그 객체를 참조하는 숨겨논 링크를 제공함
    - 마치 유전자와 같음

    ```
    // 클래스 형식
    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
      sayHello() {
        console.log(`Hello, my name is ${this.name}.`);
      }
    }
    
    const person1 = new Person('John', 30);
    person1.sayHello(); // "Hello, my name is John."

    // 프로토타입 형식 (함수)
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }
    
      Person.prototype.sayHello = function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
    
    const person1 = new Person('John', 30);
    person1.sayHello(); // "Hello, my name is John."
    ```
    
- `strict mode 🔥`
  - strict mode란?
    - 오타나 문법 지식의 미비로 인한 실수를 줄여 안정적인 코드를 생산하기 위해 ES5에서 추가된 모드
    - 오류 발생 할 가능성이 높거나, 자바스크립트 엔진의 최적화 작업에 문제를 일으킬 수 있는 코드에 대해 명시적인 에러를 발생시킴
  - strict mode로 예방할 수 있는 것
    - 전역변수의 묵시적 선언 예방
    - 삭제하면 안되는 변수, 함수, 매개변수가 삭제 되려할 떄 예방
    - 매개변수 이름의 중복 예방

- `빌트인 객체 🔥`
  - 빌트인 객체란, 종류는?
    - 자바스크립트에서 기본적으로 제공하는 객체 (전역 객체랑 다름)
    - Math나 String 등 같은 객체는 빌트인 객체에 해당 (window 객체나 global 객체는 호스트 객체이다)
  - 자바스크립트의 객체 
    - 표준 빌트인 객체(네이티브 객체) : ECMAScript(ES) 사양에 정의된 표준 객체
    - 호스트 객체 : ECMAScript(ES) 사양에 정의되있진 않지만 실행 환경(브라우저나 Node.js)에서 추가로 제공하는 객체
    - 사용자 정의 객체 : 사용자가 직접 정의한 객체
  - 래퍼 객체(wrapper object)에 대해
    - 원시 타입(문자형,숫자형,불린형)을 마치 객체 타입처럼 사용하는 과정 속에서 생기는 임시 객체
    - 객체처럼 마침표 연산자 (.) 로 접근 및 메서드 호출 가능      ex) let str = "hello";  str.length;  --> str는 문자형인데 래퍼 객체가 생겨서 객체처럼 연산자 (.)를 사용했음
    - 프로퍼티에 접근 및 메서드 호출 한 후 다시 원시값으로 되돌린다

- `this 🔥`
  - this란? 🔥
    - 자신이 생성할 인스턴스를 가리키는 자기 참조 변수
    - this 바인딩은 함수 호출 방식에 의해 동적으로 결정된다.
  - this 바인딩이란? 🔥
    - this가 가리킬 객체와 바인딩하는 것
  - this는 동적으로 바인딩이 된다고 하는데 바인딩되는 객체가 어떻게 다른지?
    - 암시적 바인딩 : 함수를 호출 한 객체와 바인딩 되는 것
    - 명시적 바인딩 : call(), apply(), bind() 함수로 지정해서 바인딩 해주는 것

- `실행 컨텍스트(excute context)와 콜스택 🔥`
  - 실행 컨텍스트에 대해 🔥🔥
    - 코드를 실행하는 데 필요한 환경을 제공하는 객체, 식별자 결정을 더욱 효율적으로 하기 위한 수단
    - 렉시컬 환경은 실행 컨텍스트를 구성하는 하나의 컴포넌트로, 실행 컨텍스트는 호출 스택(Call Stack)에 쌓이며 L.I.F.O(Last In First Out) 방식대로 실행됩니다. 이 때, 호출된 함수의 렉시컬 환경은 해당 함수의 스코프(Scope)를 결정하게 됩니다.

- `클로저 🔥`
  - 클로저란? 🔥🔥🔥
    - 함수가 선언될 당시의 환경을 계속 기억하는 함수
    - 참조하는 식별자를 실행 컨텍스트가 종료되어도 렉시컬 환경을 통해 참조하고, 값을 변경할 수 있게 하는 체인 관계 구조
  - 클로저 장점 🔥🔥
    - 상태가 의도치 않게 변경되지 않도록 상태를 안전하게 은닉하고 특정 함수에게만 상태변경을 허용
  - 클로저를 어떻게 생성 하는지 🔥
    - 내부 함수가 외부 함수의 스코프에서 실행
    - 내부 함수가 외부 함수의 리턴 값으로 사용
    - 내부 함수가 외부 함수의 식별자를 참조할떄
  - 클로저가 되는 유일한 경우 (경우3)
    - 경우1) 상위 스코프 식별자 참조 없이, 외부 함수 내에 내부(중첩) 함수가 외부 함수의 리턴 값으로 사용될 때 -----> 참조 하지도 않은 식별자를 기억하는건 메모리 낭비 (클로저X)
    - 경우2) 내부(중첩) 함수를 리턴 함 없이 내부 함수가 외부 함수의 스코프에서 실행 -----> 외부 함수보다 항상 일찍 소멸되어  (클로저X)
    - 경우3) 상위 스코프의 식별자를 참조하고, 내부(중첩) 함수가 반환되는 경우
    ```
    function foo() {
      const x = 1;
      const y = 2;

      // 클로저
      function bar() {
        debugger;
        console.log(x); // 상위 스코프의 식별자 참조
      }
      return bar; // 더 오래 유지 시킴
    }

    const bar = foo();
    ```

- `클래스 🔥`
  - 클래스가 있기전엔 어떻게 객체지향울 구현했는지
    - 자바스크립트는 프로토타입 기반 객체지향 언어로서, 사실 클래스가 필요 없음
    - 생성자 함수와 프로토타입을 통해 객체지향 언어의 상속을 구현
    - 클래스 기반 객체지향 프로그래밍에 익숙한 프로그래머들을 위해 ES6부터 클래스 개념을 도입
  - 생성자 함수와 클래스의 차이
    - 생성자 함수 : new 연산자 없이 호출하면 일반함수로 사용, 상속을 지원하는 키워드 없음, 함수 표현식으로 정의한 생성자 함수는 변수 호이스팅이 발생, 암묵적으로 strict mode가 지정되지 않는다.
    - 클래스 : new 연산자 없이 호출하면 에러발생, 상속을 지원하는 extends와 super 키워드를 제공, TDZ가 존재하여 호이스팅이 발생하지 않은 것처럼 동작하지만 함수선언문 클래스는 함수 호이스팅이 발생, 클래스 내에 코드들은 암묵적으로 strict mode가 되고 그것을 해제할 수 없다.
  - 클래스 정의
    - 클래스 선언문(함수 호이스팅 발생), 클래스 표현식(변수 호이스팅 발생) 방식으로 정의
    - constructor(생성자), 프로토타입 메서드, 정적 메서드와 같은 클래스 몸체에 정의할 수 있는 메서드가 있다
    ```
    class Person {
      // constructor: 생성자
      constructor(name) {
        // 인스턴스 생성 및 초기화
        this.name = name; // name 프로퍼티는 public하다.
      }

      // 프로토타입 메서드
      sayHi() {
        console.log(`Hi! My name is ${this.name}`);
      }

      // 정적 메서드 (static을 붙여 정의한다)
      static sayHello() {
        console.log("Hello!");
      }
    }

    // 인스턴스 생성
    const me = new Person("Lee");

    // ① 인스턴스의 프로퍼티 참조
    console.log(me.name); // Lee
    // ② 프로토타입 메서드 호출
    me.sayHi(); // Hi! My name is Lee
    // ③ 정적 메서드 호출 (호출 시에 인스턴스가 아닌 클래스의 메서드로 동작한다.)
    Person.sayHello(); // Hello!
    ```
  - 프로토타입 메서드와 정적 메서드의 차이
    - 프로토타입 메서드 : 인스턴스로 호출 (생성자 함수를 거쳐서)하기 때문에 인스턴스를 프로퍼티로 참조 가능함
    - 정적 메서드 : 클래스로 호출되어 고정된 메소드만 출력하기 때문에 인스턴스를 프로퍼티로 참조 불가능
  - 클래스의 상속
    - extends 키워드, super 키워드를 이용하여 구현
    ```
    // ###### 수퍼클래스
    class Rectangle {
      constructor(width, height) { // 2. 인스턴스 생성과 this 바인딩
        this.width = width;
        this.height = height;
      }
      // 3. 인스턴스 초기화
      getArea() {
        return this.width * this.height;
      }
      toString() {
        return `width = ${this.width}, height = ${this.height}`;
      }
    }

    // ###### 서브클래스
    class ColorRectangle extends Rectangle {   // extends 키워드를 통해 수퍼클래스를 상속받음
      constructor(width, height, color) { 
        super(width, height); // 1. super 호출
        this.color = color; // 4. 서브클래스 constructor로 복귀 후 나머지 this 바인딩
      }
       // 5. 인스턴스 초기화
      toString() {  // 메서드 오버라이딩
        return super.toString() + `, color = ${this.color}`;
      }
    }

    const colorRectangle = new ColorRectangle(2, 4, "red");  // 6. 인스턴스 반환
    console.log(colorRectangle); // ColorRectangle {width: 2, height: 4, color: "red"}

    // 상속을 통해 getArea 메서드를 호출
    console.log(colorRectangle.getArea()); // 8
    // 오버라이딩된 toString 메서드를 호출
    console.log(colorRectangle.toString()); // width = 2, height = 4, color = red
    ```
    위 코드의 흐름
    1. 서브클래스의 super 호출
    2. 수퍼클래스의 인스턴스 생성과 this 바인딩
    3. 수퍼클래스의 인스턴스 초기화
    4. 서브클래스 constructor로의 복귀후 나머지 this 바인딩
    5. 서브클래스의 인스턴스 초기화
    6. 인스턴스 반환

    - 오버라이딩 : 상위클래스 메서드를 하위 클래스가 재정의
    - 오버로딩 : 함수의 이름은 동일하지만 매개변수의 타입 또는 개수가 다른 메서드를 구현하고 매개변수에 의해 메서드를 구별하여 호출하는 방식, 자바스크립트는 오버로딩을 지원하지 않지만 arguments 객체를 사용하여 구현가능

- `스프레드 문법 🔥`
  - spread 문법이란?
    - 스프레드 문법(=전개 문법) ...은 하나로 뭉쳐 있는 여러 값들의 집합을 펼쳐서 개별적인 값들의 목록으로 만든다.
    - 이전에는 concat과 splice로 구현했을 부분들을 간결하고 가독성 좋게 해결함
    - ES6에서 도입
  - 어떤 상황에서 사용?
    - 함수 호출문의 인수 목록
    - 배열 및 객체 리터럴 내부
    - 문자열을 쪼갤 때

- `구조 분해 할당 🔥`
  - 구조 분해 할당이란?
    - 배열과 같은 이터러블 또는 객체를 비구조화, 구조 파괴하여 1개 이상의 변수에 개별적으로 할당하는 것
    - 객체 리터럴에서 필요한 값만 추출하여 변수에 할당할 때 유용
    - ES6에서 도입됨
  - 구조 분해 할당의 종류
    - 배열 구조분해 할당
    ```
    const arr = [1, 2, 3];
    const [one, two, three] = arr;  // 식별자 이름은 상관없이 할당 기준은 배열의 인덱스가되어 순서대로 할당
    console.log(one, two, three); // 1 2 3
    ```
    - 객체 구조분해 할당

- `브라우저 렌더링 과정 🔥`
  - 주소창에 Google.com을 입력하면?
    - 대기열, 캐싱, DNS, 라우팅, ARP(IP에 해당하는 Mac주소 찾음), 초기연결을 거쳐 서버로 부터 컨텐츠 다운(response), 브라우저 렌더링 발생 (캡슐화, 비캡슐화 과정을 거침)
  - 브라우저의 렌더링 과정 🔥
    - 서버에 요청 (주소창 입력 혹은 클릭을 통해 접근 <대기열, 캐싱 과정> -> URI를 DNS를 통해 IP 주소로 변환 -> 해당 IP를 가진 서버에 GET 요청)
    - 응답으로 받은 HTML 데이터를 파싱
    - HTML 마크업을 바탕으로 DOM 트리를 생성
    - CSS 마크업을 바탕으로 CSSOM 트리를 생성 (DOM 트리를 생성중 Style 태그가 나올시)
    - SCRIPT 마크업을 바탕으로 AST (추상적 구문 트리) 생성 후 실행 (DOM 트리를 생성중 SCRIPT 태그가 나올시)
    - DOM트리와 CSSOM트리를 결합하여 렌더 트리를 형성
    - 렌더 트리에서 레이아웃을 설정 (HTML 요소의 레이아웃(위치 및 크기)를 계산)
    - 개별 노드를 화면에 페인트 (레이아웃을 바탕으로 브라우저 화면에 픽셀을 렌더링)
  - 브라우저의 렌더링 과정에서 자바스크립트는 어떻게 동작 🔥
    - 렌더링 엔진은 HTML을 한 줄씩 순차적으로 파싱하며 DOM을 생성하다가 script 태그나, 자바스크립트 코드를 담은 script 태그를 만나면 DOM 생성을 일시 중단함.
    - 자바스크립트 코드를 파싱하기 위해 자바스크립트 엔진에 제어권을 넘기고, 자바스크립트 파싱과 실행이 종료되면, 렌더링 엔진으로 다시 제어권을 넘겨 HTML 파싱이 중단된 지점부터 다시 DOM 생성을 재개
    - 자바스크립트 엔진은 자바스크립트 코드를 파싱하여 CPU가 이해할 수 있는 저수준 언어(low-level language)로 변환하고 실행하는 역할을 함
    - 자바스크립트 엔진은 자바스크립트를 해석하여 AST(Abstract Syntax Tree: 추상적 구문 트리)를 생성
    - 그 후 자바스크립트 코드로 인해 변경된 DOM과 CSSOM은 다시 렌더 트리로 결합되고 재렌더링 되는 리플로우와 리페인트를 겪는다
  - 변경 사항이 있다고 항상 리플로우-리페인트가 일어나는 건 아니다. 레이아웃에 영향을 주지 않으면 리페인트만 수행하게 된다, 하지만 리플로우가 일어나면 반드시 리페인트가 수행된다.
    - 리플로우(Reflow)가 일어나는 대표적인 속성 : position, width, height, margin, padding, border, border-width, font-size, font-weight, line-height, text-align, overflow
    - 리페인트(Repaint)만 일어나는 대표적인 속성 : background, color, text-decoration, border-style, border-radius
  - `<script></script>` 태그를 `<body></body>` 태그 밑에 둬야하는 이유
    - script 안에서 id나 class를 가져와 동적인 일들을 하려 할때, 그 id나 class가 들어있을 HTML 요소를 아직 파싱하지 않았기 때문에 에러가 발생
    - HTML을 읽는 과정에서 자바스크립트 로드와 파싱을 위한 중단시점이 생기고, 그로인해 Display에 표시되는 것이 지연
  - script 태그의 async / defer 속성
    ```
    <script async src="index.js"></script>
    <script defer src="index.js"></script>
    ```
    - async / defer 속성은 HTML 파싱과 외부 자바스크립트 파일의 로드가 비동기적으로 동시에 진행되게 한다(로드만 동시, 동시실행X). 이로써 HTML 파싱이 완료되는 시간을 줄일 수 있다
    - src 어트리뷰트를 통해 외부 자바스크립트 파일을 로드하는 경우에만 사용
    - async 어트리뷰트 : HTML 파싱이 끝나지 않더라도 스크립트 로드가 완료되는 즉시 스크립트가 실행
    - defer 어트리뷰트 : HTML 파싱이 모두 끝난 뒤 스크립트가 실행된다.
- `DOM 🔥`
  - DOM이란?
    - HTML 문서의 계층적 구조와 정보를 표현하며 이를 제어할 수 있는 API, 즉 프로퍼티와 메서드를 제공하는 트리 자료구조이다
  - DOM의 구성?
    - 문서 노드 (document) : DOM 트리의 최상위에 존재하는 루트 노드 (<!DOCTYPE>)
    - 요소 노드 (element) : 문서의 구조를 표현 (html, head, meta, link, body, li, etc...)
    - 어트리뷰트 노드 (attribute) : HTML 요소의 어트리뷰트를 가리키는 객체 (charset="UTF", id="apple", etc...)
    - 텍스트 노드 (text) : 문서의 정보를 표현
    
- `이벤트 🔥`
  - 마우스 이벤트 타입, click 대신 쓸 수있는 이벤트
    - click, dbclick, mousedown, mouseup, mousemove, mouseenter, mouseover(버블링 o), mouseleave, mouseout(버블링 o)
  - 그 외에 이벤트
    - 키보드 : keydown, keyup
    - 포커스 : focus, focusin(버블링 o), blur, foucusout(버블링 o)
    - 값 변경 : input, change
    - 뷰 이벤트 : resize, scroll
    - DOM 뮤테이션 이벤트: DOMContentLoaded (DOM생성 완료)
    - 리소스 이벤트 : load, unload, abort, error
  - 이벤트 핸들러를 등록하는 방식
    - 이벤트 핸들러 어트리뷰트 방식 (태그안에 어트리뷰트로 이벤트 함수 지정)
    - 이벤트 핸들러 프로퍼티 방식 (script에서 DOM에 접근한뒤, .연산자로 이벤트 지정하고, 리터럴 방식으로 이벤트 함수 지정 )
    - addEventListener 메서드 방식 (script에서 DOM에 접근한뒤, addEventListener로 이벤트 및 이벤트함수 지정)
  - 이벤트 전파(propagation)란?
    - 모든 DOM 요소 노드에서 발생한 이벤트는 DOM 트리를 통해 전파
    - 캡처링 단계 : 이벤트가 상위 요소에서 하위 요소 방향으로 전파
    - 버블링 단계: 이벤트가 하위 요소에서 상위 요소 방향으로 전파 (이벤트 버블링을 잘 활용하는 방법 : 이벤트 위임을 가능하게 )
    - addEventListener 메서드의 세번째 인수(argument)에 true를 넣어준다면 캡처링, 디폴트인 false인경우 버블링 방식으로 전파
  - 이벤트 위임(delegation)이란? 🔥
    - 연속되는 태그에 대해서 공통적으로 이벤트를 줘야할 때 우리가 이벤트 핸들러를 바인딩할 해당 요소의 부모 요소에게 이를 위임하여 이벤트를 진행하는 것
    - 이벤트 위임없이 각 자식요소마다 onclick 또는 addEventListener 메서드를 사용해 이벤트를 주면 메모리를 잡아먹어 성능을 안좋게 할 수있고, 코드도 더러워짐
    - e.currentTarget은 부모요소(이벤트 핸들러) 타겟에 접근 (this로도 가능), e.target은 현재 이벤트가 발생한 타겟
  - e.preventDefault
    - 요소 태그의 기본 동작을 중단 ex) a 태그나, checkbox 같은 것은 자바스크립트 없이 기본 동작이 있는데 이벤트가 발생하는 동안에는 그 동작이 발생하지 않도록 함
  - e.stopPropagation
    - 이벤트 전파를 중지시키는 메서드 (보통 버블링되어 상위 태그로 올라가지 않고 해당 태그 이벤트만 발생하도록)

- `타이머 🔥`
  - 호출 스케쥴링이란?
    - 타이머 함수를 사용하여 명시적으로 호출하지 않고 일정 시간이 경기된 이후에 호출되도록 함수 호출을 예약하는 것
  - 타이머 함수에는 어떤 것들이 있나?
    - setTimeout/ clearTimeout
    - setInterval/ clearInterval
  - 이벤트가 과도하게 호출되어 성능에 문제를 일으킬 경우 할 수있는일?
    - scroll, resize, mousemove 같은 이벤트는 짧은 시간에 연속해서 발생하고, 이로인한 이벤트 핸들러는 과도하게 호출되어 성능에 문제를 일으킬 수 있다.
    - 이때 주로 디바운스와 쓰로틀울 이용하여 과도한 호출을 막거나 조절 할 수 있다.
  - 디바운스에 대해 (일정 시간 경과 후에)
    - 이벤트가 연속해서 발생하면 이벤트 핸들러를 호출하지 않다가 일정 시간 경과 후에 이벤트 핸들러가 한 번만 호출되도록 한다
  - 쓰로틀에 대해 (일정 시간 간격으로)
    - 이벤트가 연속해서 발생하더라도 일정 시간 간격으로 이벤트 핸들러가 최대 한 번만 호출되도록 한다

- `비동기 프로그래밍 🔥`
  - 동기와 비동기의 차이 🔥🔥
    - 동기식 : 태스크 순서대로 처리해서 실행순서 보장되지만, 태스크가 종료될 떄까지 이후 태스크들이 블로킹되는 단점이있음
    - 비동기식 : 태스크 실행순서가 보장되지 않지만, 태스크가 종료되지 않아도 태스크들이 블로킹되지 않음 
    - 대표적으로 setTimeout/ setInterval, HTTP 요청, 이벤트 핸들러가 비동기식임
  - 콜 스택(call stack)과 힙(heap)
    - 콜 스택 : 실행 컨텍스트 부분, 함수 호출시 순차적으로 콜 스택에 push되고 실행 완료 후에는 pop되어 L.I.F.O(Last In First Out) 구조를 띔, 콜 스택에서 제거되기 전까지는 다른 어떤 태스크도 실행되지 않는다.(싱글스레드 언어: 한번에 코드 한줄만, 동기적)
    - 힙 : 객체가 저장되는 메모리 공간이다, 콜 스택의 요소인 실행 컨텍스트는 힙에 저장된 객체를 참조함, 메모리 공간의 크기를 런타임에 결정되서 구조화 되어있지 않다.
  - 태스크 큐와 이벤트 루프에 대해 🔥🔥🔥
    - 태스크 큐: 비동기 함수의 콜백 함수 또는 이벤트 핸들러가 대기실에 있다가 실행되려 할때 일시보관되는 영역이다, 먼저 push된 것이 먼저 shift되어 F.I.F.O(First In First Out) 구조를 띔,
    - 이벤트 루프: 콜 스택이 비어있는 경우에 태스크 큐에 대기 중인 함수를 콜 스택으로 이동시킨다
  - 마이크로태스크 큐에 대해 🔥🔥
    - 프로미스의 후속 처리 메서드(then, catch, finally)의 콜백 함수는 태스크 큐 가 아니라 마이크로태스크 큐에 저장
  - 태스크 큐와 마이크로태스크 먼저 실행 되는 것 🔥🔥
    - 마이크로태스크 큐는 태스크 큐보다 우선순위가 높다

  - 자바스크립트가 인터프리터 언어 이자, 싱글스레드 언어인데 실제 사용시에는 멀티스레드 언어처럼 사용되는데 어떻게 사용되나?
    - 이벤트 루프는 컬백 큐에 있는 것들을 컬 스택이 비워질때 실행되는데 매우 미묘한 차이라 비동기적으로 실행된 것 처럼 보임

- `Ajax 🔥`
  - Ajax란?
    - 자바스크립트를 사용하여 브라우저가 서버에게 비동기 방식으로 데이터를 요청하고, 서버가 응답한 데이터를 수신하여 웹페이지를 동적으로 갱신하는 프로그래밍 방식
    - 브라우저에서 제공하는 호스트 객체 Web API인 XMLHttpRequest 객체를 기반으로 동작하고, XMLHttpRequest는 HTTP 비동기 통신을 위한 메서드와 프로퍼티를 제공
  - Ajax와 기존 방식의 차이
    - 필요한 데이터만 서버로부터 전송받기 때문에 불필요한 데이터 통신이 발생하지 않음
    - 변경할 필요가 없는 부분은 다시 렌더링하지 않으므로 화면 깜박이는 현상이 발생하지 않음
    - 비동기적으로 동작하기 때문에 블로킹이 발생하지 않음
  - JSON이란?
    - 클라이언트와 서버 간의 HTTP 통신을 위한 텍스트 데이터 포맷
    - 대부분의 프로그래밍 언어에서 사용가능
    - 키와 값으로 구성된 순수한 텍스트
  - JSON이 제공하는 정적 프로토타입 메서드에 대해
    - JSON.stringify() : 객체(클라이언트) -> JSON 포맷의 문자열(서버) [직렬화]
    - JSON.parse() : JSON 포맷의 문자열(서버) -> 객체(클라이언트) [역직렬화]
  - Ajax로 HTTP 요청을 보내기 위한 방법
    - XMLHttpRequest, fetch
  - XMLHttpRequest와 fetch 메서드의 차이 🔥
    - fetch는 XMLHttpRequest보다 사용법이 간단하고, 가독성에 좋고 프로미스를 위해 후속 처리 메서드 (.then() .catch() . finally()) 등을 사용하여 코드를 작성할 수있다.

- `REST API 🔥`
  - REST API란?
    - REST는 HTTP를 기반으로 클라이언트가 서버의 리소스에 접근하는 방식을 규정한 아키텍처고, REST API는 REST를 기반으로 서비스 API를 구현한 것을 의미
  - REST API의 구성
    - 자원(resource) : URI로 데이터에 접근가능
    - 행위(verb) : HTTP 요청 메서드(GET, POST, PUT, DELETE)
    - 표현(representations) : URL만으로도 어떤 자원이 제공되고있는지 표현되야 함 
  - REST API를 설계하는데 중요한 것
    - URI는 리소스를 표현하는데 집중
    - 행위에 대한 정의는 HTTP 요청 메서드를 통해 
    - 어떤 자원이 제공되고있는지 잘 표현되도록 하고, 동사보단 명사를 사용
  - HTTP 요청 메서드에 대해
    - GET, POST, PUT(전체수정), PATCH(일부수정), DELETE
  - HTTP 상태 코드 🔥
    - 200 (OK) : 요청성공
    - 201 (Created) : 요청성공 및 새로운 리소스 생성
    - 400 (Bad Request) : 잘못된 문법으로 서버요청을 이해 할 수 없음
    - 401 (Unathorized) : 클라이언트가 인증되지 않았거나, 유효한 인증 정보가 부족
    - 403 (Forbidden) :  접근할 권리를 가지고 있지 않음
    - 404 (Not Found) : 리소스를 찾을 수 없음
    - 500 (Server Error) : 서버문제

- `Promise 🔥`
  - 콜백이란? 🔥
    - 다른 함수의 매개변수로 함수를 전달하고, 어떠한 이벤트가 발생한 후 매개변수로 전달한 함수가 다시 호출되는 것을 의미
    - 비동기 방식의 함수라고 할 수 있음
  - 프로미스란? 🔥
    - 콜백 헬과 같은 문제들을 해결하기 위해 ES6에 고안된 비동기식 처리 패턴
  - 프로미스 생성 방법
    ```
    const promise = new Promise((resolve, reject) => {
      if (조건) {
        resolve('result');  // 비동기 처리 성공
      } else { 
        reject('failure reason');  // 비동기 처리 실패
      }
    });
    
    promise
      .then(val => {
        console.log(val);
      })
      .catch(err => {
        console.log(err);
      });
    ```
  - 프로미스의 상태 🔥
    - pending : 비동기 처리 수행 전
    - fulfilled : 비동기 처리 성공 (settled 상태) --> resolve 함수 호출
    - rejected : 비동기 처리 실패 (settled 상태) --> reject 함수 호출
  - 프로미스 빌트인 객체가 제공하는 정적 메서드 🔥
    - Promise.resolve/ Promise.reject
    다음 두 예제는 동일하게 동작
    ```
    // 정적 메서드 사용
    const promise = Promise.resolve([1, 2, 3]);
    promise.then(console.log); // [1, 2, 3]
    ```
    
    ```
    // 생성자 함수를 통해 프로토타입 메서드 사용
    const promise = new Promise((resolve) => resolve([1, 2, 3]));
    promise.then(console.log); // [1, 2, 3]
    ```
    - Promise.all : 여러 개의 비동기 처리를 직렬처리 하면 더 오래걸릴 것을 한번에 병렬처리할 때 사용, 인수로 전달받은 배열의 모든 프로미스가 fulfilled 상태가 되면 종료, 하나라도 rejected되면 즉시 종료
    ```
    const requestData1 = () =>
      new Promise((resolve) => setTimeout(() => resolve(1), 3000));
    const requestData2 = () =>
      new Promise((resolve) => setTimeout(() => resolve(2), 2000));
    const requestData3 = () =>
      new Promise((resolve) => setTimeout(() => resolve(3), 1000));

    Promise.all([requestData1(), requestData2(), requestData3()])
      .then(console.log) // [ 1, 2, 3 ] ⇒ 약 3초 정도 소요  // 참고로 프로미스 리턴값과 콜백의 인자가 같으면 인자를 생략해 줘도 됨
      .catch(console.error);
    ```
    - Promise.race : 가장 먼저 fulfilled 상태가 된 프로미스의 resolve한 처리 결과를 반환
    ```
    Promise.race([
      new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
      new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
      new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
    ])
      .then(console.log) // 3  
      .catch(console.log);
    ```
    - Promise.allSettled : 전달받은 프로미스가 모두 settled 상태(fulfilled / rejected 상태)가 되면 오류 상관없 처리 결과를 배열로 반환한다.
    ```
    Promise.allSettled([
      new Promise((resolve) => setTimeout(() => resolve(1), 2000)),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Error!")), 1000)
      ),
    ]).then(console.log);
    /*
    [
      {status: "fulfilled", value: 1},
      {status: "rejected", reason: Error: Error! at <anonymous>:3:54}
    ]
    */
    ```
    
- 이터러블, 이터레이터 프로토콜에 대해
  - 이터러블 : ES6부터 사용, 반복 가능한 객체 (for..of 반복문을 적용가능), [Symbol.iterator]() 메소드를 가졌고, 이 메소드를 통해 이터레이터(Iterator)를 반환합니다.
  - 이터레이터 : {value : 값, done : true/false} 형태의 이터레이터 객체를 리턴하는 next() 메서드를 가진 객체이고, next() 메서드로 순환가능하며 [Symbol.iterator]() 안에 정의되있음
    
- `제너레이터와 async await 🔥`
  - 제너레이터란? 일반 함수와의 차이는?
    - 코드 블록의 실행을 일시 중지 했다가 필요한 시점에 재개할 수 있는 특수한 함수, ES6에서 도입
    - 함수 호출자에게 함수 실행의 제어권을 양도 할 수있다.
    - 함수 호출자와 함수의 상태를 주고받을 수 있다.
    - 제너레이터 객체를 반환한다
  - 제너레이터의 구조
    - yield 키워드와 next 메서드를 통해 실행을 일시 중지했다가 필요한 시점에 다시 재개할 수 있다.
    - next 메서드를 실행한 경우, 제너레이터 함수 내에 yield 키워드 뒤에 오는 결과를 함수 호출자에 value로 전달하여, {value , done: false} 객체형식으로 반환한다
    - next 메서드의 인자에 어떤 값을 입력한경우, yield에 전달이 되어 input의 역할을 할 수있다.
    ```
    // 제너레이터 함수
    function* genFunc() {
      yield 1;
      yield 2;
      const y3 = yield 3; // next 메소드 인자 값이 전달됨
      return y3;
    }

    // 제너레이터 함수를 호출하면 제너레이터 객체를 반환한다.
    // 이터러블이면서 동시에 이터레이터인 제너레이터 객체는 next 메서드를 갖는다.
    const generator = genFunc();
    console.log(generator.next()); // {value: 1, done: false}
    console.log(generator.next()); // {value: 2, done: false}
    console.log(generator.next('입력')); // {value: 3, done: false}
    console.log(generator.next()); // {value: '입력', done: true}
    console.log(generator.next()); // {value: undefined, done: true}
    ```
  - async/await 란? 기존의 Promise와의 차이는? 🔥
    - 프로미스의 후속 처리 메서드 없이 마치 동기 처리처럼 프로미스가 처리 결과를 반환하도록 구현
  - Promise와 async/await의 차이점 한 줄 요약 🔥
    - 에러 핸들링 : Promise를 활용할 시에는 .catch() 문을 통해, async/await 은 try / catch를 통해 에러를 처리
    - 코드 가독성 : 일반 Promise는 후속처리 메서드인 .then()을 남발하게지만, async/await는 후속처리 메서드 없이 일반 동기 처리처럼 처리 결과를 반환하도록 구현해서 가독성이 좋음

- `에러 🔥`
  - 에러처리하는 이유 🔥
    - 발생한 에러에 대해 대처하지 않고 방치한다면 프로그램 강제 종료되기 때문
  - 에러를 처리하는 방법
    - try catch finally : 일반 에러 처리
    - throw 문 : 에러를 의도적으로 발생시킴
    - Error 객체 : 에러를 상세히 설명하는 에러 메시지를 인수로 전달가능
  - Error 객체
    - Error : 일반 에러
    - SyntaxError : 문법 에러
    - ReferenceError : 참조 불가능 식별자 에러
    - TypeError : 유효하지 않은 데이터 타입 에러
    - RangeError : 숫자값의 허용 범위 에러
    - URIError : encodeURI 또는 decodeURI 함수에 부적절한 인수를 전달 (URI에 문제가 있을 떄)

- `모듈 🔥`
  - 모듈이란?
    - 애플리케이션을 구성하는 개별적 요소로서 재사용 가능한 코드 조각
    - 기능을 기준으로 파일 단위로 분리하고, 자신만의 파일 스코프(모듈 스코프)를 가질 수 있어야 한다.
    - 모듈은 기본적으로 비공개 상태이지만, export로 공개가 필요한 자산에 한정하여 공개가 가능하고, 공개(export)된 자산은 import로 다른 모듈 스코프 내로 불러들여 재사용할 수 있다
    - CommonJS 와 AMD(asynchronous module definition)가 ES6이전에 많이 사용됨, CommonJS는 주로 서버 사이드 개발에서 여전히 많이 사용됩니다.
    - CommonJS는 예시
    ```
    // greeting.js
    const sayHello = (name) => {
      console.log(`Hello, ${name}!`);
    }
    module.exports = { sayHello };

    // index.js
    const greet = require('./greeting');
    greet.sayHello('Genie');     // Hello, Genie!
    ```
  - require과 import의 차이 (두 키워드를 동시사용 X, import가 더많이 사용되지만 ES6를 변환하는 Babel같은 도구가 없는경우 require을 사용해야 함)
    - require : script태그 안에서와 NodeJS에서 여전히 사용되고 있는 CommonJS 키워드, 프로그램의 어느 지점에서나 실행가능
    - import :  ES6(ES2015)에서 새롭게 도입된 키워드,  파일의 시작 부분에서만 실행, 필요한 모듈 부분 만 선택 가능하고 메모리를 더 절약할 수 있다

- 자바스크립트 성능 최적화를 위해 할 수 있는것
  - 변수 사용 최적화
    - 전역변수 및 불필요한 변수 생성 자제
  - DOM 조작 최소화
    - DOM 작업은 모아서 하는 게 좋음
  - 이미지 최적화
    - 이미지 크기를 조정
    - 이미지 포맷을 JPEG, GIF, PNG 등으로 바꿈
    - 이미지 스프라이트 기법을 사용
  - 코드 번들링과 압축
  - 이벤트 핸들러 관리
    - 이벤트 위임을 사용
    - 이벤트 처리를 최소화
  - 메모리 누수 방지
    - DOM 참조와 클로저 사용를 자세히 관리
    - 리액트에선 컴포넌트가 언마운트시 자원해체
  - 비동기 프로그래밍
    - 콜백 함수나 프로미스, async/await 같은 비동기 패턴을 사용하여 페이지 반응성을 높임
  - 네트워크 요청 최소화
    - Ajax 요청 통합
    - CDN(Content Delivery Network)을 사용
  - 코드 실행 시간을 줄일 수 있는 방법
    - for문 대신 forEach, map, filter 같은 고차함수 사용
    - Memoization 같은 최적화 기술을 사용

- 클로저와 가비지 컬렉션의 관계
  - 가비지 컬렉션 : 더이상 참조되지 않는 객체를 인지하고, 불필요한 메모리를 자동으로 해제시킴
  - 클로저는 기능을 다한뒤에도 여전히 참조하는 것으로 인식하여 메모리 누수 문제가 발생함.
  - 클로저를 담고있는 객체를 다른 값으로 초기화 시키면, 더 이상 root에서 참조되지 않는 클로저를 가비지 컬렉터가 메모리 해제

- css애니메이션과 JS애니메이션 차이
  - Css애니메이션
    - transition/animation 속성 사용
    - GPU 가속기능 지원하여 속도가 빠름
    - 코드가 상대적으로 간결함
    - 반응형에 유리
    - 간단하게 처리하는 애니메이션인경우 사용
  - JS애니메이션
    - setInterval()/requestAnimationFrame()을 사용
    - CPU를 사용해서 상대적으로 느림
    - 코드가 상대적으로 복잡함
    - 크로스 브라우징 측면에서 유리
    - css로 처리하기에 복잡하고 무거운 애니메이션인경우 사용

- requestAnimationFrame이란
  - requestAnimationFrame을 사용하면 JavaScript 효과적인 애니메이션 구현
  - 콜백을 인자로 받으며, 콜백의 호출 주기는 디스플레이 주사율에 따라 결정
  - cancelAnimationFrame을 사용하면 애니메이션 중단이 가능

- ES6 문법에 추가된 것들을 아는대로 설명하세요
  - String Literal, 객체 비구조화, 객체 리터럴, for .. of, Spread Operator, Rest Parameter, Arrow Function, Default Params, let & const, import & export, Map & Set 

- Map()과 Set()의 설명 및 차이점
  - Map()
    - 이터러블한 객체
    - 키부분이 어떤 타입이어도 상관없음 (일반객체는 문자형, 심볼형만)
    - map.set(key,value)
    - map.get(key)
    - map.has(key)
    - map.size() : length가 아닌 size로 크기 확인
    - map.delete(key)
    - map.clear()
  - Set() 
    - 배열과 비슷한 이터러블한 객체
    - 배열처럼 value로만 이뤄져있지만, 값이 키와 동일하게 설정되어있다
    - 값은 중복될 수 없으며, 중복될 경우 추가 입력되지 않음
    - set.add(value) : push가 아닌 add로 추가
    - set.has(value)
    - set.size() : length가 아닌 size로 크기 확인
    - set.delete(value) : splice를 사용하지 않고 delete(value) 메소드를 사용해 중간 값을 잘라낼 수 있다
    - set.clear()

- WebGL이란 : Web Grapthics Library의 약자로 웹상에서 2D 및 3D 그래픽을 렌더링하기 위한 로우 레벨 JavaScript API
