- `프로그래밍 🔥`
  - 프로그래밍이란?
    - 실행을 요구하는 일종의 <a href="">커뮤니케이션</a>
    - 0과 1밖에 알지 못하는 기계가 실행할 수 있을 정도로 정확하고 <a href="">자세한 요구를 설명하고 명령</a>하는 것
    - 해결해야 할 문제를 명확히 이해한 후 <a href="">적절한 문제 해결 방안을 정의할 필요</a>가 있음
    
  - 컴파일러, 인터프리터 (기계어로 번역하는 번역기)
    - 컴파일러 : 소스 코드를 <a href="">한꺼번에</a> 기계어로 번역하여 실행 가능한 파일을 만듭니다
    - 인터프리터 : 소스 코드를 <a href="">한 줄씩</a> 잃고 실행하여 결과를 출력, 컴파일러보다 느리지만 <a href="">코드 작성과 수정이 더 쉽다</a>

- `자바스크립트란 🔥`
  - 자바스크립트의 특징
    - <a href="">웹 브라우저에서 동작</a>하는 유일한 프로그래밍언어
    - <a href="">인터프리터</a>, <a href="">객체 기반의 스크립트언어</a>

- `변수 🔥`
  - 변수란?
    - 변수는 하나의 값을 저장하기 위해 <a href="">확보한 메모리 공간 자체</a> 또는 그 <a href="">공간을 식별하기 위해 붙인 이름 </a>
  - 식별자란(identifier)? 🔥
    - 메모리 상에 존재하는 어떤 값을 식별할 수 있는 <a href="">고유한 이름들</a> (변수, 함수, 클래스 등)
    - 일반적으로 <a href="">영문,숫자,밑줄</a>로 구성 ex)myVar, total_num ...
  - 변수를 선언한다는 것의 의미
    - 값을 저장하기 위한 <a href="">메모리 공간을 확보</a>하고, 변수 이름과 확보된 메모리 공간의 주소를 연결해서 <a href="">값을 저장 할 수있게 준비</a>하는 것
  - var
    - 변수를 의미하는 variable의 약자로, 새로운 변수를 선언할 것을 지시하는 키워드 혹은 명령어
    - 변수 선언하면 메모리 공간에는 비어있는 것이 아니라 <a href="">undefined가 기본적으로 입력됨</a>
  - 호이스팅이란? 🔥🔥🔥🔥
    - 호이스팅이란 변수나 함수 등이 어디에 위치하던지와 상관없이 <a href="">어디서든지 참조할 수 있게</a> 하는 것
    - 모든 선언문은 런타임 이전 단계에서 <a href="">끌어올려 먼저 실행</a>되기 때문에, <a href="">모든 식별자(변수, 함수, 클래스 등)가 호이스팅</a>이 된다
  - var의 문제점 🔥🔥
    - 변수 <a href="">중복 선언 허용</a>
    - <a href="">함수 레벨 스코프</a> (<a href="">if, for, while, try/catch문과 같은</a> 블록 레벨은 <a href="">지역 스코프로 인정하지않음</a>)
    - 변수 호이스팅 (<a href="">var는 변수 선언전에도 사용가능</a>하고, <a href="">let과 const도 호이스팅은 되지만 사용불가</a>)
  - let과 var의 차이 🔥🔥🔥 : let은 ES6에서 도입하였으며 var의 문제점을 보완하였음
    - <a href="">let은 중복 선언 불가</a>
    - <a href="">let은 함수 레벨, 블록 레벨 스코프</a> (함수와 <a href="">if, for, while, try/catch문 모두 지역 스코프로 인정</a>)
    - let은 <a href="">변수 호이스팅이 발생하지 않는 것처럼</a> 동작함 (실제로는 호이스팅이 됨)
    
  - TDZ 🔥🔥🔥 : let과 const가 호이스팅은 되지만 선언문 이전에 사용 불가능 한 이유
    - 선언단계(<a href="">호이스팅되어 스코프 맨위에서 선언</a>) --> <a href="">일시적 사각지대(TDZ)</a> --> 초기화 단계(실제 선언문이 있는부분, undefined으로 초기화) --> 할당 단계
    - <a href="">var는</a> TDZ가 존재하지 않아 선언 단계가 곧 초기화 단계가 되어 <a href="">호이스팅되면 undefind가됨</a>
  - const 🔥🔥
    - <a href="">선언과 동시에 초기화</a>해야 한다 (undefined X)
    - <a href="">재할당 불가</a>
    - <a href="">상수</a>로 사용
  - 식별자 네이밍 규칙
    - 영문 <a href="">대소문자, 숫자, 언더스코어(_), 달러기호($)</a>만 포함
    - <a href="">숫자로 시작할 수 없음</a>
    - <a href="">공백 X</a>
    - <a href="">예약어 X</a>
    - <a href="">대소문자를 구분</a>
  - 네이밍 컨벤션
    - <a href="">카멜 케이스</a> (camelCase) : <a href="">첫번째 단어는 소문자</a>, 그 이후 각 단어의 <a href="">첫글자를 대문자로</a> ex) firstName
    - <a href="">스네이크 케이스</a> (snake_case) : 모든 단어를 소문자로 적고, <a href="">단어 사이를 언더스코어(_)로</a> 구분 ex) student_grade
    - <a href="">파스칼 케이스</a> (PascalCase) : 단어의 <a href="">첫 글자를 대문자로</a> 적는 방식이며 <a href="">클래스이름</a> 짓는데 주로사용 ex) FirstName
    - <a href="">헝가리언 케이스</a> (typeHungarianCase) : <a href="">타입을 접두사로</a> 앞에 붙이는 방식 ex) strName, nCount
  - 리터럴이란?
    - 변수에 할당할 수 있는 <a href="">고정된 값</a> (하드코딩할 수 있는 값)

- `데이터 타입 🔥`
  - 데이터 타입의 종류 🔥 : <a href="">원시타입</a> (number, string, boolean, undefined, null, symbol, bigint) / <a href="">객체타입</a> (object, function, array)
  - 심벌 타입이란?
    - <a href="">유일하고 수정불가능한 식별자</a>를 만드는 데 사용 (<a href="">식별자 중복을 방지</a>하기 위한 용도)
    - ex) const mySymbolWithValue = Symbol('Hello');
  - 데이터 타입이 필요한 이유 🔥
    - <a href="">효율적으로 메모리 공간의 크기를 결정</a>하기 위해
    - <a href="">2진수를 어떻게 해석할지 결정</a>하기 위해
  - 정적 타이핑
    - 데이터 타입을 사전에 선언(명시적 타입 선언)을 해야함
    - 타입스크립트, C, C++, 자바, 코틀린, 고, 러스트
  - 동적 타이핑
    - 재 할당에 의해 변수의 타입은 언제든지 동적으로 변할 수있음
    - 자바스크립트, 파이썬
    
- `타입변환과 단축 평가 🔥`
  - 명시적 타입 변환이란?
    - 개발자가 <a href="">의도적으로 값의 타입을 변환</a>하는 것을 <a href="">명시적 타입 변환</a> 또는 <a href="">타입 캐스팅</a>이라 한다 
  - 명시적 타입 변환 함수의 예시
    - String(숫자) , 숫자.toString() 등
  - 암묵적 타입 변환이란?
    - 개발자의 의도와는 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입이 <a href="">자동 변환되는 것</a>을 <a href="">암묵적 타입 변환</a> 또는 <a href="">강제 타입 변환</a>이라 한다
    - 명시적으로 타입을 변환하는 것보다 <a href="">간편하지만</a>, <a href="">예상치 못한 결과</a>를 초래할 수도 있음
    - ex) const num = "2" + 3   ----> 여기서 num 숫자형 5 ("2"는 문자형이였음)
  - truthy / falsy 한 값이 뭔가요?
    - boolean값이 아니더라 truthy / falsy 하게 암묵적 타입 변환이 이뤄지는것
    - true : 1, "0", " ", 등
    - false : 0, undefined, "", 등

- undeclared 란? 
  - null : 변수선언 O, 빈 변수 할당 O 
  - undefined : 변수선언 O, 변수 할당 X 
  - <a href="">undeclared</a> : <a href="">변수선언 X, 변수 할당 X (오류)</a>

- `배열 🔥`
  - 자바스크립트의 배열과 자료구조의 배열
    - 자바스크립트 : <a href="">어떤 타입이든</a> 섞어서 사용가능, <a href="">배열 길이 조정</a>가능, <a href="">메소드 지원</a>, <a href="">희소 배열</a>(sparse array)
    - 자료구조 : <a href="">하나의 타입만</a> 가능, <a href="">초기선언 배열 길이 유지</a>해야함, <a href="">메소드 지원하지 않음</a>, <a href="">밀집 배열</a>(dense array)

  - 배열의 메서드
    - 원본 배열을 <a href="">직접 변경</a>하는 메서드 : <a href="">push, pop, unshift, shift, splice, join, reverse, fill</a>
    - <a href="">새로운 배열을 생성</a>하여 반환하는 메서드 : <a href="">isArray, indexOf, concat, slice, includes</a>

  - 고차 함수란?
    - <a href="">함수를 매개변수로 전달</a>받거나, <a href="">함수를 반환하는 함수</a>
    - 원본 배열로 사용 로직을 위한 <a href="">조건문과 반복문을 제거하는 복잡성을 해결</a>하고 <a href="">변수의 사용을 억제하여 쉽게 새로운 결과값을 창조</a>하는데 유용
    - <a href="">sort, forEach, map, filter, reduce, some, every, find</a>

  - forEach와 map의 차이
    - 공통점은 자신을 호출한 <a href="">배열의 모든 요소를 순회</a>하면서 <a href="">인수로 전달받은 콜백 함수를 반복 호출</a>, 파라미터 순(1 배열의 요소값, 2 인덱스, 3 배열 자기 자신(this))
    - <a href="">forEach</a>는 단순히 <a href="">반복문을 대체하기 위한</a> 고차 함수이며, 항상 undefind를 반환
    - <a href="">map</a>은 <a href="">새로운 배열을 반환</a>하는 고차 함수

- `객체 리터럴 🔥`
  - 자바스크립트에서 객체란?
    - <a href="">함수, 배열, 객체, 정규표현식</a> 등이 객체에 속함
    - 원시 타입은 하나의 값이지만, 객체 타입은 <a href="">다양한 타입의 값으로 구성한 복합적인 자료구조</a>
  - 함수와 메서드의 차이점
    - 메서드는 <a href="">객체에 묶여있는 함수</a>를 의미
  - 객체를 생성하는 방법
    - <a href="">객체 리터럴</a> : const person = { name: 'John', age: 30, city: 'New York' };
    - <a href="">Object 생성자 함수</a> : const person = new Object(); person.name = "John"; person.age = 30;
    - <a href="">생성자 함수</a> : function Person(name, age, city) { this.name = name; this.age = age;}; const person = new Person('John', 30);
    - <a href="">Object.create 메서드</a> : const person = Object.create(null); person.name = 'John'; person.age = 30;
    - <a href="">클래스</a>(ES6)
  - 전역 객체
    - 코드가 실행되기(런타임) 이전 단계에 자바스크립트 엔진에 의해 생성되는 <a href="">어떤 환경에서도 접근 가능한 특수한 객체</a>
    - 프로그램 전체에서 공유되는 <a href="">기본적인 기능들을 제공</a>
    - 브라우저에서는 window 객체, Node.js에서는 global 객체와 같은 <a href="">호스트 객체들도 전역 객체 중 하나</a>

- `원시 값과 객체 비교 🔥`
  - 동적 타이핑을 지원하는 자바스크립트에서 데이터의 타입을 크게 2개로 나누는 이유
    - 원시타입의 값은 변경 불가능한 값이고, 객체(참조)타입의 값은 변경 가능한 값이다
    - 원시값을 변수에 담으면 실제 값이 저장되고, 객체를 변수에 담으면 메모리주소가 저장된다
    - <a href="">원시값이 저장된 변수를</a> 다른 변수에 <a href="">할당하면</a> 이를 <a href="">값에 의한 전달</a>이라함, <a href="">객체가 담긴 변수를</a> 다른변수에 <a href="">할당하면</a> 이를 <a href="">참조에 의한 전달</a>이라함.
  - 값에 의한 전달
    - 원시타입의 실제 값을 전달하는것
  - 참조에 의한 전달
    - 객체타입의 <a href="">주소(참조) 값을</a> 전달하는것

- 얕은 복사와 깊은 복사
  - 얕은 복사(Shallow Copy)
    - 객체를 참조하는 <a href="">메모리 주소만을 복사</a>하는 방법, 한쪽에서 해당 객체를 변경하면 다른 한쪽에서도 <a href="">그대로 반영</a>
  - 깊은 복사(Deep Copy)
    - 객체를 완전히 <a href="">새로운 메모리 공간에 복사</a>하는 방법, 객체를 변경해도 다른 한쪽에서는 <a href="">영향을 받지 않음</a>

- `함수 🔥`
  - 함수를 정의하는 방법
    - <a href="">함수 선언문 </a>
    ```
    function add(x,y){
      return x+y;
    }
    ```
    - <a href="">함수 표현식</a>
    ```
    var add = function(x,y){
      return x + y;
    }
    ```
    - <a href="">생성자 함수</a>
    ```
    var add = new Function('x','y', 'return x+y');
    ```
    - <a href="">화살표 함수</a>
    ```
    var add = (x,y) => x+y;
    ```
  - 함수 선언문과 함수 표현식의 차이
    - <a href="">함수 선언문은</a> 함수 호이스팅에 의해 런타임 전에 맨위로 끌어 올려져 <a href="">호출 부분이 함수보다 위에 있어도 작동함</a> (var에의한 변수 호이스팅은 undefined가되지만 함수 호이스팅은 문제없이 호출가능하게 한다)
    - <a href="">함수 표현식은</a> 함수 호출 부분이 함수보다 <a href="">밑에 위치해 있어야 한다</a> 그 이유는 변수에 함수가 담긴것이어서 호이스팅이 되도 <a href="">var는 undefined</a>가 되고 <a href="">let,const는 TDZ가 존재</a>하기 때문
  - 즉시 실행 함수(IIFE: Immediately Invoked Function Expression)에 대해
    - 함수 자체는 자신이 작성한 코드를 <a href="">지역 스코프로 지정</a> 할수있어서 협업시 다른 개발자가 만든 식별자가 내 것과 같거나 하는 <a href="">코드 충돌을 피하기 위해</a> 쓰임
  - 일반 함수 애로우 함수 차이 : 애로우 함수가 가독성에 좋아 주로 사용하는 것이 좋음
    - 일반함수 : <a href="">this가 동적으로 결정</a>, <a href="">생성자 함수 사용 O</a>, 반드시 <a href="">명시적으로 return 키워드</a>를 사용하여 값을 반환, 파라미터 없이 <a href="">arguments 변수 사용 O</a>, 
    - 에로우함수 : <a href="">this가 상위스코프의 this로 정적으로 결정</a>, <a href="">생성자 함수 사용 X</a>, <a href="">한 줄짜리 표현식을 반환할 경우 괄호 없이</a> 작성하면 암묵적으로 <a href="">값을 반환</a>, 파라미터 없이 <a href="">arguments 변수 사용 X</a>

- `스코프 🔥`
  - 스코프란? 🔥🔥🔥
    - <a href="">식별자(변수)가 유효한 범위</a>
  - 스코프의 종류 🔥🔥
    - 지역변수를 위한 <a href="">지역 스코프</a>와 전역변수를 위한 <a href="">전역 스코프</a>
  - 렉시컬 스코프(정적 스코프)란? 🔥
    - 함수를 어디서 '호출'했는지가 아닌 <a href="">어디서 '정의'</a>했는지에 따라 함수의 <a href="">상위 스코프를 결정</a>하는 것
  - 전역 변수로 변수를 선언하면 생기는 문제점
    - <a href="">암묵적 결합</a> : 변수의 유효범위 즉 <a href="">스코프가 클수록 가독성은 나빠지고 의도치 않게 상태가 변경</a> 될 수 있는 위험도가 높아짐
    - <a href="">메모리 낭비</a> : 전역 변수로 <a href="">계속 남아있어서 메모리 사용량이 늘어날 수 있음</a>
    - <a href="">의존성 증가</a>: 전역 변수를 사용한 함수는 해당 변수에 의존성을 가지기 때문에 <a href="">코드 유지 보수나 리팩토링이 어려움</a>
    - <a href="">네임스페이스 오염</a> : 다른 라이브러리나 모듈에서 사용되는 변수 이름과 <a href="">충돌 할 가능성</a>이 있음

- `생성자 함수에 의한 객체 생성 🔥`
  - 생성자 함수란?
    - <a href="">new 연산자와 함께 호출하여 객체를 생성</a>하는 함수
    - <a href="">this 키워드</a>가 사용되어 인스턴스의 <a href="">프로퍼티나 메서드를 정의</a> 할 수 있도록 한다.
    - <a href="">인스턴스는 생성자 함수에 의헤 생성된 객체</a>를 말함
    - <a href="">일반 함수와 구문적으로 동일</a>하지만 <a href="">앞에 대문자로 시작하는 이름</a>을 가짐
    - 자바스크립트는  <a href="">Object, String, Number, Boolean, Function, Array, Date, RegExp, Promise</a> 등의 빌트인 생성자 함수를 제공
  - 객체 리터럴로 만들 때와의 차이, 생성자 함수쓰는 이유
    - 객체 리터럴 방식 : <a href="">단 하나의 객체</a>만 생성 (동일한 프로퍼티를 갖는 여러개의 객체를 생성할때 비효율적)
    - 생성자 함수 방식 : 프로퍼티 구조가 동일한 객체 <a href="">여러 개를 간편하게</a> 생성 (붕어빵 빵틀 같은역할)
  - 생성자 함수가 객체(인스턴스)를 생성하는 과정
    - <a href="">생성자 함수 선언</a> --> <a href="">인스턴스 생성</a> --> <a href="">인스턴스 초기화</a> --> <a href="">인스턴스 반환</a>
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
#####################################################################################
 
- `함수와 일급 객체 🔥`
  - 일급 객체란?
    - <a href="">하나의 값처럼</a> 다루어질 수 있는 객체
    - 자바스크립트 함수가 일급객체로 사용됨
  - 함수가 일급 객체라면, 일급 객체로 뭘 할 수 있나요?
    - 함수 <a href="">이름 없이</a> 생성가능 (무명의 리터럴)
    - <a href="">변수나, 자료구조(객체,배열)에</a> 저장가능
    - <a href="">매개변수</a>와 <a href="">리턴값</a>으로 사용될 수 있음 (<a href="">고차함수</a>)
  - 함수형 프로그래밍이란? 🔥🔥
    - 외부 상태에 영향받거나 주지않는 <a href="">순수 함수를 통해</a> 부수효과를 최대한 억제하여 오류를 피하고 프로그램의 <a href="">안전성을 높이려는</a> 프로그래밍
  - 순수 함수와 일반 함수 차이 🔥🔥
    - 순수 함수는 입력이 같으면 항상 <a href="">같은 출력</a>을 반환하고, <a href="">외부 상태를 의존하지 않는</a> 부작용이 없는 함수
    - 일반 함수는 항상 같은 출력을 반환하지 않을 수 있으며, 외부 상태에 영향받을 수 있음

- `프로토타입 🔥`
  - 객체지향 프로그래밍(OOP, Object Oriented Programing) 🔥
    - <a href="">절차지향적이 아닌</a> 독립적 단위, 즉 <a href="">객체의 집합으로 프로그램을 표현</a>하려는 프로그래밍
  - 객체지향 프로그래밍의 특징 🔥
    - <a href="">캡슐화 (Encapsulation)</a> : 데이터를 다루는 <a href="">방법과 목적에 따라 결합</a>, 변수와 함수를 하나로 묶음
    - <a href="">상속 (Inheritance)</a> : 포괄적으로 쓰이는 부모부분을 여러 자식들이 물려받아 동일하게 사용하게 함
    - <a href="">추상화 (Abstraciton)</a> : 객체의 다양한 속성 중 프로그램에 <a href="">필요한 속성만</a> 간추려 표현한 것 (클래스가 어떻게 동작하는지 다 알 필요는 없고 <a href="">사용자는 사용법만 알면됨</a>)
    - <a href="">다형성 (Polymorphism)</a> : 부모클레스에서 물려받은 가상 함수를 자식 클래스 내에서 <a href="">오버라이딩</a> 되어 <a href="">코드를 재사용</a>하는 것
  - 자바스크립트는 객체지향 프로그래밍 언어인가요?
    - <a href="">객체지향</a> 프로그래밍 + <a href="">함수형</a> 프로그래밍
    - 자바스크립트는 <a href="">클래스 기반 객체지향</a> (ES6), <a href="">프로토타입 기반 객체지향</a> (ES5 이전) 둘다 지원
  - 프로토타입이란?
    - 객체 간에 <a href="">상속을 구현하기 위해</a> 사용되는 객체이고, 그 객체를 참조하는 <a href="">숨겨논 링크</a>를 제공함
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

    // 프로토타입 형식 (생성자 함수)
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
    - <a href="">오타나 문법 지식의 미비로 인한 실수</a>를 줄여 <a href="">안정적인 코드를 생산</a>하기 위해 ES5에서 추가된 모드
    - <a href="">오류 발생 할 가능성이 높거나</a>, 자바스크립트 엔진의 최적화 작업에 <a href="">문제를 일으킬 수 있는 코드</a>에 대해 명시적인 에러를 발생시킴
  - strict mode로 예방할 수 있는 것
    - 전역변수의 <a href="">묵시적 선언 예방</a>
    - 삭제하면 안되는 변수, 함수, 매개변수가 <a href="">삭제 되려할 떄 예방</a>
    - 매개변수 이름의 <a href="">중복 예방</a>

- `빌트인 객체 🔥`
  - 빌트인 객체란, 종류는?
    - 자바스크립트에서 <a href="">기본적으로 제공</a>하는 객체 (전역 객체로 쓰이지만 뜻이 다름)
    - <a href="">Math나 String 등</a> 같은 객체는 빌트인 객체에 해당 (window 객체나 global 객체는 호스트 객체이다)
  - 자바스크립트의 객체 
    - <a href="">표준 빌트인 객체</a>(네이티브 객체) : <a href="">ECMAScript(ES) 사양에 정의된 표준 객체</a>
    - <a href="">호스트 객체</a> : ECMAScript(ES) 사양에 정의되있진 않지만 <a href="">실행 환경(브라우저나 Node.js)에서 추가로 제공</a>하는 객체
    - <a href="">사용자 정의 객체</a> : 사용자가 직접 정의한 객체
  - 래퍼 객체(wrapper object)에 대해
    - <a href="">원시 타입(문자형,숫자형,불린형)을 마치 객체 타입처럼</a> 사용하는 과정 속에서 생기는 <a href="">임시 객체</a>
    - 객체처럼 <a href="">마침표 연산자 (.) 로 접근</a> 및 메서드 호출 가능      ex) let str = "hello";  str.length;  --> str는 문자형인데 래퍼 객체가 생겨서 객체처럼 연산자 (.)를 사용했음
    - 프로퍼티에 접근 및 메서드 호출 한 후 <a href="">다시 원시값으로</a> 되돌린다

- `this 🔥`
  - this란? 🔥
    - <a href="">자신이 생성할 인스턴스</a>를 가리키는 <a href="">자기 참조 변수</a>
    - this 바인딩은 함수 호출 방식에 의해 <a href="">동적으로 결정</a>된다.
  - this 바인딩이란? 🔥
    - <a href="">this가 가리킬 객체</a>와 바인딩하는 것
  - this는 동적으로 바인딩이 된다고 하는데 바인딩되는 객체가 어떻게 다른지?
    - <a href="">암시적 바인딩</a> : <a href="">함수를 호출 한 객체</a>와 바인딩 되는 것
    - <a href="">명시적 바인딩</a> : <a href="">call(), apply(), bind()</a> 함수로 <a href="">지정해서</a> 바인딩 해주는 것

- `실행 컨텍스트(excute context)와 콜스택 🔥`
  - 실행 컨텍스트에 대해 🔥🔥
    - 코드를 실행하는 데 필요한 <a href="">환경을 제공하는 객체</a>, 식별자 결정을 더욱 효율적으로 하기 위한 수단
    - 렉시컬 환경은 실행 컨텍스트를 구성하는 하나의 컴포넌트로, 실행 컨텍스트는 <a href="">호출 스택(Call Stack)</a>에 쌓이며 <a href="">L.I.F.O(Last In First Out) 방식</a>대로 실행됩니다. 이 때, 호출된 함수의 <a href="">렉시컬 환경은 해당 함수의 스코프(Scope)를 결정</a>하게 됩니다.

- `클로저 🔥`
  - 클로저란? 🔥🔥🔥
    - <a href="">함수가 선언될 당시의 환경을 계속 기억</a>하는 함수
    - <a href="">참조하는 식별자를 실행 컨텍스트가 종료되어도 렉시컬 환경을 통해 참조하고, 값을 변경</a>할 수 있게 하는 <a href="">체인 관계 구조</a>
  - 클로저 장점 🔥🔥
    - 상태가 의도치 않게 변경되지 않도록 <a href="">상태를 안전하게 은닉</a>하고 <a href="">특정 함수에게만 상태변경을 허용</a>
  - 클로저를 어떻게 생성 하는지 🔥
    - 내부 함수가 외부 함수의 <a href="">스코프 내에서</a> 실행
    - 내부 함수가 외부 함수의 <a href="">리턴 값으로</a> 사용
    - 내부 함수가 외부 함수의 <a href="">식별자를 참조</a>할때
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
    - 자바스크립트는 원래 프로토타입 기반 객체지향 언어로서, 사실 클래스가 필요 없음
    - 이전에는 <a href="">생성자 함수와 프로토타입을 통해</a> 객체지향 언어의 상속을 구현
    - <a href="">클래스 기반 객체지향 프로그래밍에 익숙한 프로그래머들을 위해 ES6부터</a> 클래스 개념을 도입
  - 생성자 함수와 클래스의 차이
    - 생성자 함수 : <a href="">new 연산자 없이 호출하면 일반함수</a>로 사용, <a href="">상속을 지원하는 키워드 없음</a>, 함수 표현식으로 정의한 생성자 함수는 변수 호이스팅이 발생, <a href="">암묵적으로 strict mode가 지정되지 않는다</a>.
    - 클래스 : <a href="">new 연산자 없이 호출하면 에러</a>발생, 상속을 지원하는<a href=""> extends와 super 키워드</a>를 제공, TDZ가 존재하여 호이스팅이 발생하지 않은 것처럼 동작하지만 함수선언문 클래스는 함수 호이스팅이 발생, 클래스 내에 코드들은 <a href="">암묵적으로 strict mode가 되고 그것을 해제할 수 없다</a>.
  - 클래스 정의
    - <a href="">클래스 선언문</a>(함수 호이스팅 발생), <a href="">클래스 표현식</a>(변수 호이스팅 발생) 방식으로 정의
    - <a href="">constructor(생성자), 프로토타입 메서드, 정적 메서드</a>와 같은 클래스 몸체에 정의할 수 있는 메서드가 있다
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
    - 프로토타입 메서드 : 인스턴스로 호출 (생성자 함수를 거쳐서)하기 때문에 <a href="">인스턴스를 프로퍼티로 참조 가능함</a>
    - 정적 메서드 : <a href="">클래스로 호출</a>되어 <a href="">고정된 메소드만</a> 출력하기 때문에 <a href="">인스턴스를 프로퍼티로 참조 불가능</a>
  - 클래스의 상속
    - <a href="">extends</a> 키워드, <a href="">super</a> 키워드를 이용하여 구현
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
    - 오버로딩 : 객체지향 프로그래밍에서 <a href="">같은 이름의 함수를 여러 개 정의</a>하고 <a href="">매개변수의 유형과 개수에 따라 다르게 호출</a>할 수 있도록 하는 기능, 자바스크립트는 오버로딩을 지원하지 않지만 <a href="">arguments 객체를 사용하여 구현가능</a>

#####################################################################################

- `스프레드 문법 🔥`
  - spread 문법이란?
    - 스프레드 문법(=전개 문법) ...은 하나로 뭉쳐 있는 <a href="">여러 값들의 집합을 펼쳐서</a> 개별적인 값들의 목록으로 만든다.
    - 이전에는 <a href="">concat과 splice</a>로 구현했을 부분들을 <a href="">간결하고 가독성 좋게</a> 해결함
    - ES6에서 도입
  - 어떤 상황에서 사용?
    - 함수 호출문의 <a href="">인수</a> 목록 (rest 문법)
    - <a href="">배열 및 객체</a> 리터럴 내부
    - <a href="">문자열을 쪼갤 때</a>

- `구조 분해 할당 🔥`
  - 구조 분해 할당이란?
    - 배열과 같은 이터러블 또는 <a href="">객체를 비구조화</a>, 구조 파괴하여 <a href="">1개 이상의 변수에 개별적으로 할당</a>하는 것
    - <a href="">배열이나 객체</a> 리터럴에서 <a href="">필요한 값만 추출하여 변수에 할당</a>할 때 유용
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
    - <a href="">대기열</a>, <a href="">캐싱</a>, <a href="">DNS</a>, <a href="">라우팅</a>, <a href="">ARP</a>(IP에 해당하는 Mac주소 찾음), 초기연결을 거쳐 <a href="">서버로 부터 컨텐츠 다운</a>(response), <a href="">브라우저 렌더링</a> 발생 (캡슐화, 비캡슐화 과정을 거침)
  - 브라우저의 렌더링 과정 🔥
    - <a href="">서버에 요청</a> (주소창 입력 혹은 클릭을 통해 접근 <대기열, 캐싱 과정> -> URI를 DNS를 통해 IP 주소로 변환 -> 해당 IP를 가진 서버에 GET 요청)
    - 응답으로 받은 HTML <a href="">데이터를 파싱</a>
    - HTML 마크업을 바탕으로 <a href="">DOM 트리를 생성</a>
    - CSS 마크업을 바탕으로 <a href="">CSSOM 트리를 생성</a> (DOM 트리를 생성중 Style 태그가 나올시)
    - SCRIPT 마크업을 바탕으로 <a href="">AST (추상적 구문 트리) 생성</a> 후 실행 (DOM 트리를 생성중 SCRIPT 태그가 나올시)
    - DOM트리와 CSSOM트리를 결합하여 <a href="">렌더 트리를 형성</a>
    - 렌더 트리에서 <a href="">레이아웃을 설정</a> (HTML 요소의 레이아웃(위치 및 크기)를 계산)
    - 개별 노드를 화면에 <a href="">페인트</a> (레이아웃을 바탕으로 브라우저 화면에 픽셀을 렌더링)
  - 브라우저의 렌더링 과정에서 자바스크립트는 어떻게 동작 🔥
    - 렌더링 엔진은 HTML을 한 줄씩 순차적으로 <a href="">파싱하며 DOM을 생성</a>하다가 script 태그나, 자바스크립트 코드를 담은 <a href="">script 태그를 만나면 DOM 생성을 일시 중단</a>함.
    - 자바스크립트 코드를 파싱하기 위해 자바스크립트 엔진에 제어권을 넘기고, <a href="">자바스크립트 파싱과 실행이 종료되면</a>, 렌더링 엔진으로 다시 제어권을 넘겨 <a href="">HTML 파싱이 중단된 지점부터 다시 DOM 생성</a>을 재개
    - <a href="">자바스크립트 엔진은</a> 자바스크립트 코드를 파싱하여 CPU가 이해할 수 있는 <a href="">저수준 언어(low-level language)로 변환하고 실행</a>하는 역할을 함
    - 자바스크립트 엔진은 자바스크립트를 해석하여 <a href="">AST(Abstract Syntax Tree: 추상적 구문 트리)를 생성</a>
    - 그 후 <a href="">자바스크립트 코드로 인해 변경된 DOM과 CSSOM은 다시 렌더 트리로 재 결합</a>되고 재렌더링 되는 <a href="">리플로우와 리페인트</a>를 겪는다
  - 변경 사항이 있다고 항상 리플로우-리페인트가 일어나는 건 아니다. <a href="">레이아웃에 영향을 주지 않으면 리페인트만 수행</a>하게 된다, 하지만 <a href="">리플로우가 일어나면 반드시 리페인트가 수행</a>된다.
    - 리플로우(Reflow)가 일어나는 대표적인 속성 : position, width, height, margin, padding, border, border-width, font-size, font-weight, line-height, text-align, overflow --> <a href="">위치나 크기</a>변경
    - 리페인트(Repaint)만 일어나는 대표적인 속성 : background, color, text-decoration, border-style, border-radius --> <a href="">색이나 모양</a>변경
  - `<script></script>` 태그를 `<body></body>` 태그 밑에 둬야하는 이유
    - <a href="">script 안에서 id나 class를 가져와</a> 동적인 일들을 하려 할때, 그 id나 class가 들어있을 <a href="">HTML 요소를 아직 파싱하지 않았기 때문에 에러</a>가 발생
    - HTML을 읽는 과정에서 <a href="">자바스크립트 로드와 파싱을 위한 중단시점이 생기고</a>, 그로인해 <a href="">Display에 표시되는 것이 지연</a>
  - script 태그의 async / defer 속성
    ```
    <script async src="index.js"></script>
    <script defer src="index.js"></script>
    ```
    - async / defer 속성은 <a href="">HTML 파싱과 외부 자바스크립트 파일</a>의 로드가 <a href="">비동기적으로 동시에</a> 진행되게 한다(로드만 동시, 동시실행X). 이로써 <a href="">HTML 파싱이 완료되는 시간을 줄일 수 있다</a>
    - src 어트리뷰트를 통해 외부 자바스크립트 파일을 로드하는 경우에만 사용
    - async 어트리뷰트 : HTML 파싱이 끝나지 않더라도 <a href="">스크립트 로드가 완료되는 즉시</a> 스크립트가 실행
    - defer 어트리뷰트 : <a href="">HTML 파싱이 모두 끝난 뒤</a> 스크립트가 실행된다.
- `DOM 🔥`
  - DOM이란?
    - HTML 문서의 계층적 <a href="">구조와 정보를 표현</a>하며 <a href="">이를 제어할 수 있는 API</a>, 즉 <a href="">프로퍼티와 메서드를 제공</a>하는 <a href="">트리 자료구조</a>이다
  - DOM의 구성?
    - <a href="">문서 노드</a> (document) : DOM 트리의 최상위에 존재하는 루트 노드 (<!DOCTYPE>)
    - <a href="">요소 노드</a> (element) : 문서의 구조를 표현 (html, head, meta, link, body, li, etc...)
    - <a href="">어트리뷰트 노드</a> (attribute) : HTML 요소의 어트리뷰트를 가리키는 객체 (charset="UTF", id="apple", etc...)
    - <a href="">텍스트 노드</a> (text) : 문서의 정보를 표현
    
- `이벤트 🔥`
  - 마우스 이벤트 타입, click 대신 쓸 수있는 이벤트 (<a href="">전치사들어있으면 버블링</a>)
    - click, dbclick, mousedown, mouseup, mousemove, mouseenter, mouseover(버블링 o), mouseleave, mouseout(버블링 o)
  - 그 외에 이벤트
    - 키보드 : keydown, keyup
    - 포커스 : focus, focusin(버블링 o), blur, foucusout(버블링 o)
    - 값 변경 : input, change
    - 뷰 이벤트 : resize, scroll
    - DOM 뮤테이션 이벤트: DOMContentLoaded (DOM생성 완료)
    - 리소스 이벤트 : load, unload, abort, error
  - 이벤트 핸들러를 등록하는 방식
    - 이벤트 핸들러 <a href="">어트리뷰트</a> 방식 (<a href="">HTML</a> 태그안에 어트리뷰트로 이벤트 함수 지정)
    - 이벤트 핸들러 <a href="">프로퍼티</a> 방식 (<a href="">DOM</a>에 접근한뒤, .연산자로 이벤트 지정하고, 리터럴 방식으로 이벤트 함수 지정 )
    - <a href="">addEventListener 메서드</a> 방식 (script에서 DOM에 접근한뒤, addEventListener로 이벤트 및 이벤트함수 지정)
  - 이벤트 전파(propagation)란?
    - 모든 DOM 요소 노드에서 발생한 이벤트는 <a href="">DOM 트리를 통해 전파</a>
    - <a href="">캡처링</a> 단계 : 이벤트가 상위 요소에서 <a href="">하위 요소 방향</a>으로 전파
    - <a href="">버블링</a> 단계: 이벤트가 하위 요소에서 <a href="">상위 요소 방향</a>으로 전파 (<a href="">이벤트 버블링을 잘 활용하는 방법 : 이벤트 위임을 가능하게</a> )
    - <a href="">addEventListener 메서드의 세번째 인수(argument)</a>에 <a href="">true</a>를 넣어준다면 <a href="">캡처링</a>, <a href="">디폴트인 false인경우 버블링</a> 방식으로 전파
  - 이벤트 위임(delegation)이란? 🔥
    - <a href="">연속되는 태그에</a> 대해서 <a href="">공통적으로 이벤트를 줘야할 때</a> 우리가 이벤트 핸들러를 바인딩할 해당 요소의 <a href="">부모 요소에게 이를 위임</a>하여 이벤트를 진행하는 것
    - <a href="">이벤트 위임없이 각 자식요소마다</a> onclick 또는 addEventListener 메서드를 사용해 이벤트를 주면 <a href="">메모리를 잡아먹어 성능을 안좋게</a> 할 수있고, <a href="">코드도 더러워짐</a>
    - <a href="">e.currentTarget은 부모요소(이벤트 핸들러) 타겟</a>에 접근 (<a href="">this</a>로도 가능), e.target은 현재 이벤트가 발생한 타겟
  - e.preventDefault
    - 요소 태그의 <a href="">기본 동작을 중단</a> ex) a 태그나, checkbox 같은 것은 자바스크립트 없이 기본 동작이 있는데 이벤트가 발생하는 동안에는 그 동작이 발생하지 않도록 함
  - e.stopPropagation
    - <a href="">이벤트 전파를 중지</a>시키는 메서드 (보통 버블링되어 상위 태그로 올라가지 않고 해당 태그 이벤트만 발생하도록)

- `타이머 🔥`
  - 호출 스케쥴링이란?
    - 타이머 함수를 사용하여 명시적으로 호출하지 않고 일정 시간이 경기된 이후에 호출되도록 <a href="">함수 호출을 예약</a>하는 것
  - 타이머 함수에는 어떤 것들이 있나?
    - <a href="">setTimeout</a>/ clearTimeout
    - <a href="">setInterval</a>/ clearInterval
  - 이벤트가 과도하게 호출되어 성능에 문제를 일으킬 경우 할 수있는일?
    - scroll, resize, mousemove 같은 이벤트는 짧은 시간에 연속해서 발생하고, 이로인한 이벤트 핸들러는 <a href="">과도하게 호출</a>되어 <a href="">성능에 문제</a>를 일으킬 수 있다.
    - 이때 주로 <a href="">디바운스와 쓰로틀</a>울 이용하여 과도한 호출을 막거나 조절 할 수 있다.
  - 디바운스에 대해 (일정 시간 경과 후에)
    - 이벤트가 연속해서 발생하면 이벤트 핸들러를 호출하지 않다가 <a href="">마지막 호출 후 일정 시간 경과 후에도 다른 호출이 없을경우</a> 이벤트 핸들러가 마지막꺼 한 번만 호출되도록 한다
  - 쓰로틀에 대해 (일정 시간 간격으로)
    - 이벤트가 연속해서 발생하더라도 <a href="">일정 시간 간격으로</a> 이벤트 핸들러가 최대 한 번만 호출되도록 한다

- `비동기 프로그래밍 🔥`
  - 동기와 비동기의 차이 🔥🔥
    - 동기식 : 태스크 순서대로 처리해서 <a href="">실행순서 보장</a>되지만, 태스크가 종료될 떄까지 이후 <a href="">태스크들이 블로킹</a>되는 단점이있음
    - 비동기식 : 태스크 <a href="">실행순서가 보장되지 않지만</a>, 태스크가 종료되지 않아도 <a href="">태스크들이 블로킹되지 않음</a> 
    - 대표적으로 <a href="">setTimeout/ setInterval</a>, <a href="">HTTP 요청</a>, <a href="">이벤트 핸들러</a>가 비동기식임
  - 콜 스택(call stack)과 힙(heap)
    - 콜 스택 : <a href="">실행 컨텍스트 부분</a>, 함수 호출시 순차적으로 콜 스택에 push되고 실행 완료 후에는 pop되어 <a href="">L.I.F.O(Last In First Out) 구조</a>를 띔, <a href="">콜 스택에서 제거되기 전까지는 다른 어떤 태스크도 실행되지 않는다</a>.(<a href="">싱글스레드</a> 언어: 한번에 코드 한줄만, 동기적)
    - 힙 : 객체가 저장되는 <a href="">메모리 공간</a>이다, 콜 스택의 요소인 실행 컨텍스트는 힙에 저장된 객체를 참조함, <a href="">메모리 공간의 크기를 런타임에 결정되서 구조화 되어있지 않다</a>.
  - 태스크 큐와 이벤트 루프에 대해 🔥🔥🔥
    - 태스크 큐: <a href="">비동기 함수의 콜백 함수</a> 또는 <a href="">이벤트 핸들러</a>가 대기실에 있다가 실행되려 할때 <a href="">일시보관되는 영역</a>이다, 먼저 push된 것이 먼저 shift되어 <a href="">F.I.F.O(First In First Out) 구조</a>를 띔,
    - 이벤트 루프: <a href="">콜 스택이 비어있는 경우</a>에 <a href="">태스크 큐에 대기 중인 함수를 콜 스택으로</a> 이동시킨다
  - 마이크로태스크 큐에 대해 🔥🔥
    - <a href="">프로미스의 후속 처리 메서드(then, catch, finally)의 콜백 함수</a>는 태스크 큐 가 아니라 <a href="">마이크로태스크 큐</a>에 저장
  - 태스크 큐와 마이크로태스크 먼저 실행 되는 것 🔥🔥
    - <a href="">마이크로태스크 큐</a>는 태스크 큐보다 우선순위가 높다

  - 자바스크립트가 인터프리터 언어 이자, 싱글스레드 언어인데 실제 사용시에는 멀티스레드 언어처럼 사용되는데 어떻게 사용되나?
    - 이벤트 루프는 컬백 큐에 있는 것들을 <a href="">컬 스택이 비워질때 실행</a>되는데 매우 <a href="">미묘한 차이라 비동기적으로 실행된 것 처럼 보임</a>

- `Ajax 🔥`
  - Ajax란?
    - 자바스크립트를 사용하여 브라우저가 서버에게 <a href="">비동기 방식으로 데이터를 요청</a>하고, 서버가 응답한 <a href="">데이터를 수신하여 웹페이지를 동적으로 갱신</a>하는 프로그래밍 방식
    - 브라우저에서 제공하는 호스트 객체 Web API인 XMLHttpRequest 객체를 기반으로 동작하고, XMLHttpRequest는 HTTP 비동기 통신을 위한 메서드와 프로퍼티를 제공
  - Ajax와 기존 방식의 차이
    - <a href="">필요한 데이터만</a> 서버로부터 전송받기 때문에 <a href="">불필요한 데이터 통신이 발생하지 않음</a>
    - <a href="">변경할 필요가 없는 부분은 다시 렌더링하지 않으므로</a> 화면 깜박이는 현상이 발생하지 않음
    - 비동기적으로 동작하기 때문에 <a href="">블로킹이 발생하지 않음</a>
  - JSON이란?
    - 클라이언트와 서버 간의 <a href="">HTTP 통신을 위한 텍스트 데이터 포맷</a>
    - 대부분의 프로그래밍 언어에서 사용가능
    - <a href="">키와 값으로 구성</a>된 순수한 텍스트
  - JSON이 제공하는 정적 프로토타입 메서드에 대해
    - <a href="">JSON.stringify()</a> : 객체(클라이언트) -> JSON 포맷의 <a href="">문자열</a>(서버) [<a href="">직렬화</a>]
    - <a href="">JSON.parse()</a> : JSON 포맷의 문자열(서버) -> <a href="">객체</a>(클라이언트) [<a href="">역직렬화</a>]
  - Ajax로 HTTP 요청을 보내기 위한 방법
    - XMLHttpRequest, fetch
  - XMLHttpRequest와 fetch 메서드의 차이 🔥
    - <a href="">fetch는</a> XMLHttpRequest보다 <a href="">사용법이 간단</a>하고, <a href="">가독성에 좋고</a> 프로미스를 위해 <a href="">후속 처리 메서드 (.then() .catch() . finally())</a> 등을 사용하여 코드를 작성할 수있다.

- `REST API 🔥`
  - REST API란?
    - REST는 HTTP를 기반으로 클라이언트가 <a href="">서버의 리소스에 접근하는 방식을 규정한 아키텍처</a>고, REST API는 REST를 기반으로 서비스 API를 구현한 것을 의미
  - REST API의 구성
    - <a href="">자원</a>(resource) : URI로 <a href="">데이터에 접근</a>가능
    - <a href="">행위</a>(verb) : HTTP <a href="">요청 메서드</a>(GET, POST, PUT, DELETE)
    - <a href="">표현</a>(representations) : <a href="">URL만으로도 어떤 자원이 제공되고있는지 표현</a>되야 함 
  - REST API를 설계하는데 중요한 것
    - <a href="">URI는 리소스를 표현하는데 집중</a>
    - <a href="">행위</a>에 대한 정의는 <a href="">HTTP 요청 메서드를 통해</a> 
    - <a href="">어떤 자원</a>이 제공되고있는지 <a href="">잘 표현</a>되도록 하고, <a href="">동사보단 명사를 사용</a>
  - HTTP 요청 메서드에 대해
    - GET, POST, PUT(전체수정), PATCH(일부수정), DELETE
  - HTTP 상태 코드 🔥
    - 200 (OK) : 요청성공
    - <a href="">201 (Created)</a> : 요청성공 및 새로운 리소스 <a href="">생성</a>
    - <a href="">400 (Bad Request)</a> : <a href="">잘못된 문법</a>으로 서버요청을 이해 할 수 없음
    - <a href="">401 (Unathorized)</a> : 클라이언트가 인증되지 않았거나, <a href="">유효한 인증 정보가 부족</a>
    - <a href="">403 (Forbidden)</a> :  <a href="">접근할 권리가 없음</a>
    - 404 (Not Found) : 리소스를 찾을 수 없음
    - 500 (Server Error) : 서버문제

#####################################################################################

- `Promise 🔥`
  - 콜백이란? 🔥
    - 다른 함수의 <a href="">매개변수로 함수를 전달</a>하고, 어떠한 이벤트가 발생한 후 <a href="">매개변수로 전달한 함수가 다시 호출</a>되는 것을 의미
    - <a href="">비동기 방식의 함수</a>라고 할 수 있음
  - 프로미스란? 🔥
    - <a href="">콜백 헬과 같은 문제들을 해결</a>하기 위해 ES6에 고안된 <a href="">비동기식 처리 패턴</a>
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
    - <a href="">pending</a> : 비동기 처리 <a href="">수행 전</a>
    - <a href="">fulfilled</a> : 비동기 처리 <a href="">성공</a> (settled 상태) --> <a href="">resolve 함수 호출</a>
    - <a href="">rejected</a> : 비동기 처리 <a href="">실패</a> (settled 상태) --> <a href="">reject 함수 호출</a>
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
    - Promise.all : 여러 개의 <a href="">비동기 처리를</a> 직렬처리 하면 더 오래걸릴 것을 한번에 <a href="">병렬처리할 때</a> 사용, 인수로 전달받은 배열의 <a href="">모든 프로미스가 fulfilled 상태가 되면 종료</a>, <a href="">하나라도 rejected되면 즉시 종료</a>
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
    - Promise.race : <a href="">가장 먼저 fulfilled 상태</a>가 된 프로미스의 <a href="">resolve한 처리 결과를 반환</a>
    ```
    Promise.race([
      new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
      new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
      new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
    ])
      .then(console.log) // 3  
      .catch(console.log);
    ```
    - Promise.allSettled : 전달받은 프로미스가 <a href="">모두 settled 상태</a>(fulfilled / rejected 상태)가 되면 <a href="">오류 상관없이 처리 결과를 배열로 반환</a>한다.
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
  - 이터러블 : ES6부터 사용, <a href="">반복 가능한 객체</a> (for..of 반복문을 적용가능), <a href="">[Symbol.iterator]() 메소드</a>를 가졌고, <a href="">이 메소드를 통해 이터레이터(Iterator)를 반환</a>합니다.
  - 이터레이터 : <a href="">{value : 값, done : true/false} 형태</a>의 이터레이터 객체를 리턴하는 <a href="">next() 메서드를 가진 객체</a>이고, next() 메서드로 순환가능하며 <a href="">[Symbol.iterator]() 안에 정의</a>되있음
    
- `제너레이터와 async await 🔥`
  - 제너레이터란? 일반 함수와의 차이는?
    - 코드 블록의 <a href="">실행을 일시 중지 했다가 필요한 시점에 재개 할 수 있는 특수한 함수</a>, ES6에서 도입
    - <a href="">함수 호출자에게 함수 실행의 제어권을 양도</a> 할 수있다.
    - 함수 호출자와 <a href="">함수의 상태를 주고받을 수 있다.</a>
    - 제너레이터 객체를 반환한다
  - 제너레이터의 구조
    - <a href="">yield 키워드와 next 메서드를 통해</a> 실행을 <a href="">일시 중지했다가</a> 필요한 시점에 <a href="">다시 재개</a>할 수 있다.
    - <a href="">next 메서드를 실행한 경우</a>, 제너레이터 함수 내에 <a href="">yield 키워드 뒤에 오는 결과를 함수 호출자에 value로 전달</a>하여, <a href="">{value , done: false}</a> 객체형식으로 반환한다
    - <a href="">next 메서드의 인자에 어떤 값을 입력한경우</a>, <a href="">yield에 전달이 되어 input의 역할</a>을 할 수있다.
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
    - 프로미스의 <a href="">후속 처리 메서드 없이</a> 마치 <a href="">동기 처리처럼</a> 프로미스가 처리 결과를 반환하도록 구현
  - Promise와 async/await의 차이점 한 줄 요약 🔥
    - 에러 핸들링 : <a href="">Promise를 활용할 시에는 .catch() 문</a>을 통해, <a href="">async/await 은 try / catch</a>를 통해 에러를 처리
    - 코드 가독성 : 일반 <a href="">Promise는 후속처리 메서드인 .then()</a>을 남발하게지만, <a href="">async/await는 후속처리 메서드 없이</a> 일반 동기 처리처럼 처리 결과를 반환하도록 구현해서 <a href="">가독성이 좋음</a>

- `에러 🔥`
  - 에러처리하는 이유 🔥
    - 발생한 <a href="">에러에 대해 대처하지 않고 방치한다면 프로그램이 강제 종료</a>되기 때문
  - 에러를 처리하는 방법
    - <a href="">try catch finally</a> : 일반 <a href="">에러 처리</a>
    - <a href="">throw 문</a> : 에러를 <a href="">의도적으로 발생시킴</a>
    - <a href="">Error 객체</a> : 에러를 상세히 설명하는 <a href="">에러 메시지를 인수로 전달가능</a>
  - Error 객체
    - Error : 일반 에러
    - <a href="">SyntaxError</a> : <a href="">문법</a> 에러
    - <a href="">ReferenceError</a> : 참조 불가능 <a href="">식별자</a> 에러
    - <a href="">TypeError</a> : 유효하지 않은 <a href="">데이터 타입</a> 에러
    - <a href="">RangeError</a> : <a href="">숫자값의 허용 범위</a> 에러
    - URIError : encodeURI 또는 decodeURI 함수에 부적절한 인수를 전달 (URI에 문제가 있을 떄)

- `모듈 🔥`
  - 모듈이란?
    - 애플리케이션을 구성하는 개별적 요소로서 <a href="">재사용 가능한 코드 조각</a>
    - <a href="">기능을 기준으로 파일 단위로 분리</a>하고, <a href="">자신만의 파일 스코프(모듈 스코프)를 가질 수 있어야</a> 한다.
    - 모듈은 기본적으로 <a href="">비공개 상태</a>이지만, <a href="">export로 공개가 필요한 자산에 한정하여 공개가 가능</a>하고, 공개(export)된 자산은 <a href="">import로 다른 모듈 스코프 내로 불러들여 재사용</a>할 수 있다
    - CommonJS 와 AMD(asynchronous module definition)가 ES6이전에 많이 사용됨, <a href="">CommonJS는 주로 서버 사이드 개발에서 여전히 많이 사용</a>됩니다.
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
  - require과 import의 차이 (두 키워드를 동시사용 X, import가 더많이 사용되지만 ES6를 변환하는 <a href="">Babel같은 도구가 없는경우 require을 사용</a>해야 함)
    - require : <a href="">s
NodeJS에서 여전히 사용</a>되고 있는 <a href="">CommonJS 키워드</a>, 프로그램의 <a href="">어느 지점에서나 실행가능</a>
    - import : ES6(ES2015)에서 새롭게 도입된 키워드,  파일의 <a href="">시작 부분에서만 실행</a>, 필요한 모듈 부분 만 선택 가능하고 <a href="">메모리를 더 절약</a>할 수 있다

- 자바스크립트 성능 최적화를 위해 할 수 있는것 -> 메 이번 변비 코돔이네
  - 메모리 누수 방지
    - DOM 참조와 <a href="">클로저 사용을 자세히 관리</a>
    - 리액트에선 컴포넌트가 <a href="">언마운트시 자원해체</a>
  - 이미지 최적화
    - 이미지 크기를 조정
    - 이미지 포맷을 JPEG, GIF, PNG 등으로 바꿈
    - 이미지 스프라이트 기법을 사용
    - 벡터이미지 사용
  - 번들링과 압축
  - 변수 사용 최적화
    - <a href="">전역변수 및 불필요한 변수 생성 자제</a>
  - 비동기 프로그래밍
    - 콜백 함수나 프로미스, async/await 같은 <a href="">비동기 패턴을 사용하여 페이지 반응성을 높임</a>
  - 코드 실행 시간을 줄이기
    - for문 대신 forEach, map, filter 같은 <a href="">고차함수 사용</a>
    - <a href="">Memoization</a> 같은 최적화 기술을 사용
  - DOM 조작 최소화
    - <a href="">DOM 작업은 모아서</a> 하는 게 좋음
  - 이벤트 핸들러 관리
    - <a href="">이벤트 위임</a>을 사용
    - <a href="">이벤트 처리를 최소화</a>
  - 네트워크 요청 최소화
    - <a href="">Ajax 요청 통합</a>
    - <a href="">CDN</a>(Content Delivery Network)을 사용  

- 클로저와 가비지 컬렉션의 관계
  - 가비지 컬렉션 : 더이상 <a href="">참조되지 않는 객체를 인지</a>하고, <a href="">불필요한 메모리를 자동으로 해제</a>시킴
  - <a href="">클로저는 기능을 다한뒤에도 여전히 참조</a>하는 것으로 인식하여 <a href="">메모리 누수 문제가 발생함</a>.
  - 클로저를 담고있는 객체를 <a href="">null과 같은 다른 값으로 초기화</a> 시키면, 더 이상 root에서 참조되지 않는 클로저를 <a href="">가비지 컬렉터가 메모리 해제</a>

- css애니메이션과 JS애니메이션 차이
  - Css애니메이션
    - <a href="">transition/animation</a> 속성 사용
    - <a href="">GPU 가속기능 지원</a>하여 <a href="">속도가 빠름</a>
    - 코드가 상대적으로 <a href="">간결함</a>
    - <a href="">반응형에 유리</a>
    - <a href="">간단하게 처리하는 애니메이션</a>인경우 사용
  - JS애니메이션
    - <a href="">setInterval()/requestAnimationFrame()</a>을 사용
    - <a href="">CPU를 사용</a>해서 <a href="">상대적으로 느림</a>
    - 코드가 상대적으로 <a href="">복잡함</a>
    - <a href="">크로스 브라우징 측면에서 유리</a>
    - css로 처리하기에 복잡하고 <a href="">무거운 애니메이션</a>인경우 사용

- requestAnimationFrame이란
  - requestAnimationFrame을 사용하면 <a href="">JavaScript 애니메이션</a> 구현
  - <a href="">콜백을 인자로</a> 받으며, <a href="">콜백의 호출 주기는 디스플레이 주사율에 따라</a> 결정
  - <a href="">cancelAnimationFrame</a>을 사용하면 <a href="">애니메이션 중단</a>이 가능

- ES6 문법에 추가된 것들을 아는대로 설명하세요
  - String Literal, 객체 비구조화(구조분해할당), 객체 리터럴, for .. of, Spread Operator, Rest Parameter, Arrow Function, Default Params, let & const, import & export, Map & Set 

- Map()과 Set()의 설명 및 차이점
  - Map()
    - 이터러블한 <a href="">객체</a>
    - <a href="">키부분이 어떤 타입이어도 상관없음</a> (<a href="">일반객체는 문자형, 심볼형만</a>)
    - map.<a href="">set(key,value)</a> : <a href="">키와 값 추가</a>
    - map.get(key) : <a href="">키에 맞는 값 확인</a>
    - map.has(key) : <a href="">키가 존재하는지</a>
    - map.<a href="">size()</a> : <a href="">length가 아닌 size로 크기 확인</a>
    - map.delete(key) : 키에 맞는값 <a href="">삭제</a>
    - map.clear() : 객체 <a href="">비우기</a>
  - Set()
    - <a href="">배열</a>과 비슷한 이터러블한 객체
    - 배열처럼 value로만 이뤄져있지만, <a href="">값이 키와 동일하게 설정</a>되어있다
    - <a href="">값은 중복될 수 없으며</a>, <a href="">중복될 경우 추가 입력되지 않음</a>
    - set.<a href="">add(value)</a> : <a href="">push가 아닌 add로 추가</a>
    - set.has(value) : <a href="">값이 존재하는지</a>
    - set.<a href="">size()</a> : <a href="">length가 아닌 size로 크기 확인</a>
    - set.delete(value) : splice를 사용하지 않고 <a href="">delete(value) 메소드를 사용해 중간 값을 잘라낼 수 있다</a>
    - set.clear()

- WebGL이란 : <a href="">Web Grapthics Library</a>의 약자로 웹상에서 <a href="">2D 및 3D 그래픽을 렌더링</a>하기 위한 로우 레벨 <a href="">JavaScript API</a>
