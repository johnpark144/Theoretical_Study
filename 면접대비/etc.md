- 자바스크립트가 인터프리터 언어 이자 싱글스레드 언어인데 실제 사용시에는 멀티스레드 언어처럼 사용되는데 어떻게 사용되나?
  - 이벤트 루프는 컬백 큐에 있는 것들을 컬 스택이 비워질때 실행되는데 매우 미묘한 차이라 비동기적으로 실행된 것 처럼 보임

- 브라우저 렌더링 과정에서 JS 동작 과정
  - HTML을 파싱 중 script태그를 만남 -> HTML파싱을 중단한 후 JavaScript 파일을 다운 -> JS파일 파싱 후 AST 형태로 메모리에 저장 -> Call Stack으로 관리되고 그 이후 DOM과 CSSOM을 조작할 수 있다 -> 렌더링시 레이아웃(Layout), 페인팅(Paint) 과정을 거쳐 브라우저에 결과물이 출력
  - async/defer 어트리뷰트를 사용하면 HTML파싱과 JS파일 로드를 비동기적으로 사용 할 수있다.

- 변경 사항이 있다고 항상 리플로우-리페인트가 일어나는 건 아니다. 레이아웃에 영향을 주지 않으면 리페인트만 수행하게 된다, 하지만 리플로우가 일어나면 반드시 리페인트가 수행된다.
  - 리플로우(Reflow)가 일어나는 대표적인 속성 : position, width, height, margin, padding, border, border-width, font-size, font-weight, line-height, text-align, overflow
  - 리페인트(Repaint)만 일어나는 대표적인 속성 : background, color, text-decoration, border-style, border-radius

- 이벤트 버블링을 잘 활용하는 방법 : 이벤트 위임을 가능하게 

- 이터러블, 이터레이터 프로토콜에 대해
  - 이터러블 : ES6부터 사용, 반복 가능한 객체 (for..of 반복문을 적용가능), [Symbol.iterator]() 메소드를 가졌고, 이 메소드를 통해 이터레이터(Iterator)를 반환합니다.
  - 이터레이터 : {value : 값, done : true/false} 형태의 이터레이터 객체를 리턴하는 next() 메서드를 가진 객체이고, next() 메서드로 순환가능하며 [Symbol.iterator]() 안에 정의되있음

- require과 import의 차이 (두 키워드를 동시사용 X, import가 더많이 사용되지만 ES6를 변환하는 Babel같은 도구가 없는경우 require을 사용해야 함)
  - require : script태그 안에서와 NodeJS에서 사용되고 있는 CommonJS 키워드, 프로그램의 어느 지점에서나 실행가능
  - import :  ES6(ES2015)에서 새롭게 도입된 키워드,  파일의 시작 부분에서만 실행, 필요한 모듈 부분 만 선택 가능하고 메모리를 더 절약할 수 있다

- 자바스크립트 성능 최적화를 위해 할 수 있는것
  - 변수 사용 최적화: 전역변수 및 불필요한 변수 생성 자제
  - DOM 조작 최소화: DOM 작업을 모아서 하는 게 좋음
  - 이미지 최적화: 이미지 크기를 조정, 이미지 포맷을 JPEG, GIF, PNG 등으로 바꿈, 이미지 스프라이트 기법을 사용
  - 코드 번들링과 압축
  - 이벤트 핸들러 관리: 이벤트 위임을 사용하거나, 이벤트 처리를 최소화해야 합니다.
  - 메모리 누수 방지: DOM 참조와 클로저 사용 등을 주의 깊게 관리해야 합니다.
  - 비동기 프로그래밍: 자바스크립트는 비동기적인 언어이기 때문에, 콜백 함수나 프로미스, async/await 같은 비동기 패턴을 사용하여 페이지 반응성을 높일 수 있습니다.
  - 네트워크 요청 최소화: Ajax 요청을 통합하거나, CDN(Content Delivery Network)을 사용하는 것이 좋습니다.
  - 코드 실행 시간을 줄일 수 있는 방법: for문 대신 forEach, map, filter 같은 고차함수 사용, Memoization 같은 최적화 기술을 사용

- vue와 리액트의 차이점
  - vue : 프레임워크, HTML, JS, CSS 코드 영역을 분리해서 작성함, 정해진 방법만 사용하기 때문에 자유도가 낮다 그렇지만 리액트보다 접근성이 높음, 속도가 약간 더 빠름, 진입장벽이 낮음, 타입스크립트로 구현이 좀 어려움, 컴포넌트 분리 및 재사용 측면에서 효율성이 낮음, 생태계가 리액트보단 떨어짐
  - 리액트 : 라이브러리, JSX 형태 코드를 사용함, 자바스크립트 코드를 더 사용하여 자유도가 높다는 장점이 있으나 그로인해 리액트보다 접근성이 낮다, 속도가 뷰보단 약간 느림, 진입장벽이  높음, 타입스크립트로 구현이 쉬움, 컴포넌트 분리 및 재사용 측면에서 효율성이 높음, 생태계가 vue보다 나음

- 일반 함수 애로우 함수 차이 : 애로우 함수가 가독성에 좋아 주로 사용하는 것이 좋음
  - 일반함수 : this가 동적으로 결정, 생성자 함수 사용 O, arguments 변수 전달 O
  - 에로우함수 : this가 상위스코프의 this로 정적으로 결정, 생성자 함수 사용 X, arguments 변수 전달 X

- MVVM모델에 대해서
  - MVC와 다르게 데이터 바인딩을 사용하여 View와 Model 사이의 의존성을 없앤 디자인 패턴이고, 이로인해 로직이 복잡해져도 MVC보다 유지보수가 쉽다는 장점이있음.

- 얕은 복사와 깊은 복사
  - 얕은 복사(Shallow Copy) : 객체를 참조하는 메모리 주소만을 복사하는 방법, 한쪽에서 해당 객체를 변경하면 다른 한쪽에서도 그대로 반영
  - 깊은 복사(Deep Copy) : 객체를 완전히 새로운 메모리 공간에 복사하는 방법, 객체를 변경해도 다른 한쪽에서는 영향을 받지 않음

- requestAnimationFrame이란
  - requestAnimationFrame을 사용하면 JavaScript 효과적인 애니메이션 구현
  - 콜백을 인자로 받으며, 콜백의 호출 주기는 디스플레이 주사율에 따라 결정
  - cancelAnimationFrame을 사용하면 애니메이션 중단이 가능

- key props를 사용하는 이유
  - 리액트가 엘리먼트를 구분하기 위해
  - 업데이트 성능을 최적화하기 위해

- 생명주기메서드란 : 컴포넌트가 생성될 때부터 소멸될 때까지의 과정을 의미
  - Mounting (생성) : componentDidMount()나, useEffect
  - Updating (갱신) : componentDidUpdate()나, useEffect
  - Unmounting (소멸) : componentWillUnmount(), useEffect의 뒷정리(cleanup) 함수

- context API와 리덕스의 차이
  - context API : 초창기 세팅이 쉬움, 어플리케이션이 커질때 관리가 점점 어려움, 상태 관리 도구는 아니고 전역 상태 공유 기능만 있음
  - 리덕스 : 초창기 세팅이 어려움, 어플리케이션이 커질때 관리가 용이함, 상태 관리 도구임

- Redux-saga와 Redux-thunk의 차이
  - Redux-saga : Generator를 사용, 다양한 상황에 쓸 수 있는 만큼 제공되는 기능도 많고 러닝커브가 있다, 비동기 작업을 할 때 기존 요청을 취소하거나 요청 실패시 재요청도 가능하다, 규모가 있는 애플리케이션에 적합
  - Redux-thunk : 간단하고 쉽게 사용할 수 있는 미들웨어, try-catch 문으로 감싸 에러를 처리하기 때문에 코드가 길어질 수 있다, action에서 너무 많은 일을 한다, 규모가 작은 애플리케이션에 적합

- Babel, Webpack, Polyfill
  - Babel : ES6 이상의 문법들에 대하여 ES5 문법의 자바스크립트로 변환
  - Webpack : 여러 개의 자바스크립트 파일들과 같은 리소스를 하나의 번들로 묶어주는 역할 (빌드)
  - Polyfill : Promise와 같은 ES5에도 존재하지 않아 Babel로 변환할 수 없는 최신 자바스크립트 코드도 브라우저가 이해할 수 있게 지원하는 코드다 (누락된 새로운 기능을 메꿔주는 역할)

- 크로스 브라우징에 대해
  - 가능한 모든 브라우저에서 깨지지 않고 의도한 대로 올바르게 나오게 하는 작업 (호환성)
  - 작업이 필요한 이유 : 브라우저 마다 랜더링 엔진이 달라서 작동되지 않는 HTML5, CSS, Javascript 코드가 존재함
  - 크로스 브라우징을 위해 고려할 수 있는 것
    - 웹 표준 준수
    - CSS Reset : 각 브라우저에는 margin, padding, line-height 등 각각 기본 스타일이 설정되어 있는데 그들을 초기화하여 공통화 시킴
    - 프리픽스 사용 : CSS 프리픽스를 사용하면 브라우저별로 각기 다른 CSS 속성값을 적용 (크롬,사파리:-webkit- / 파이어폭스:-moz- / 오페라:-o-)
    - 자바스크립트 라이브러리 사용
    - 폴리필(Polyfill) 사용
    - 테스트 및 디버깅
    - 점유율이 높은 브라우저부터 맞추는 것

- bundle의 사이즈를 줄이려면
  - Tree-shaking : 사용하지 않는 코드를 자동으로 제거하는 기술 (전체를 Import 하지 않고 사용하는 기능만 {} 부분적으로 Import )
  - Code Splitting
  - 이미지 최적화
  - 라이브러리 최적화 : 라이브러리의 버전을 최신 버전으로 업데이트하거나, 필요한 부분만 가져와서 사용
  - Gzip 압축

- 웹소켓에 대해
  - 양방향 통신을 지원하는 네트워크 프로토콜
  - 실시간 통신이 가능
  - 웹소켓이 나오기전엔 단방향 통신만 지원하는 HTTP 프로토콜로 일정시간마다 request하고 response받는 Polling의 방식을 사용하였다.
  - 게임, 채팅, 실시간 주식거래 등에 용유용

- cascading에 대해 : CSS에서 Cascading은 스타일 규칙들이 어떤 우선순위로 적용될지를 결정하는 방식을 말함
  - 중요도 : 1) 태그내 style 2) style 태그 3) style 태그 안 @import 4) link태그로 연결된 css파일 5) link태그로 연결된 css파일 안 @import
  - 명시도 :  1) !important 2) id  3) class 4) 태그
  - 코드순서 : 늦게 선언된 스타일 우선 적용

- css에니메이션과 JS에니메이션 차이
  - Css에니메이션 : transition/animation 속성 사용, GPU 가속기능 지원하여 속도가 빠름, 코드가 상대적으로 간결함, 반응형에 유리, 간단하게 처리하는 애니메이션인경우 사용
  - JS에니메이션 : setInterval()/requestAnimationFrame()을 사용, CPU를 사용해서 상대적으로 느림, 코드가 상대적으로 복잡함, 크로스 브라우징 측면에서 유리, css로 처리하기에 복잡하고 무거운 애니메이션인경우 사용

- package.json에서 dependencies와 devDependencies의 차이점
  - dependencies : 애플리케이션의 실행에 필요한 필수 패키지 ex) Express.js, React, Lodash, Axios 등
  - devDependencies : 개발 단계에서만 필요한 패키지(테스트 도구, 번들링 도구) ex) Webpack, Jest, RTL 등

- JSX란?
  - Javascript에 XML을 확장한 html과 유사한 문법
  - Html과 다른점
    - 모든태그는 닫는 태그를 가져야한다(self-closing tag 대신 사가능)
    - { }로 자바스크립트 표현식 작성가능
    - 스타일 적용시 어트리뷰트에 하이픈(-)대신 카멜 표기법으로 작성
    - class대신 className사용 등

- "attribute"와 "property"의 차이점
  - attribute : 정적인 Html 안에 속성  ex) class
  - property : 동적인 DOM tree 안에 속성 (html의 attribute를 DOM 내에서 대신해서 표현) ex) className
  ```
  <input value="텍스트를 입력하세요">
  
  //  input 박스에 "고양이" 이라는 단어를 입력한다면?
  // Attribute value = 텍스트를 입력하세요 // (정적)
  // Property value = 고양이 // (동적)
  ```

- ESLint, prettier에 대해
  - ESLint : 코드의 문법 오류를 발견하는 것을 중점, 가독성 및 코드 퀄리티를 높인다
  - prettier : 코드의 일관성 유지하는 것을 중점, 가독성을 높임

- ES6 문법에 추가된 것들을 아는대로 설명하세요
  - String Literal, 객체 비구조화, 객체 리터럴, for .. of, Spread Operator, Rest Parameter, Arrow Function, Default Params, let & const, import & export, Map & Set 

- Box model에 대해
  - 모든 HTML 엘리먼트가 가진 3개의 층의 사각형 구조의 형태 (1 Margin > 2 Border > 3 Padding > Content)

- undeclared 란? 
  - null : 변수선언 O, 빈 변수 할당 O 
  - undefined : 변수선언 O, 변수 할당 X 
  - undeclared : 변수선언 X, 변수 할당 X (오류)

- Map()과 Set()의 설명 및 차이점

- 좋은 코드

- 시스템 고도화를 위해 할 수 있는것

- 클로저와 가비지 컬렉션의 관계

- XMLHttpRequest와 fetch 함수의 차이

- WebGL에 대해서

- HTML5의 가장 큰 특징

- 브라우저마다 렌더링되는 결과(HTML 또는 CSS)가 조금씩 다른 이유

- mutable한 값과 immutable한 값의 저장 방식의 차이

-------------------------------
2. 개인 생각

리액트 관련 패키지중 좋다고 생각되는것
(Redux, React Query, Styled-components, Framer Motion

--------------------------------

3. 인성면접🤔
자기소개 부탁드립니다.

왜 개발자가 되고 싶은가요?(전업했다면 그 이유), 개발자는 어떤 직업이라고 생각하나요?

우리 회사를 지원하게 된 이유는

본인이 생각하는 본인의 성격 장단점은 무엇인가요?

본인이 다른 지원자들과 비교했을 때 이 점만은 제일 낫다고 생각하는 점

왜 굳이 프론트엔드를 선택했나요? 프론트엔드란 어떤 분야인가요?

개발자로서 중요하게 생각하는 점이 있다면 무엇인가요?

개발은 평생 공부해야하는 분야인데 어떤 식으로 학습을 하고 있나요?

본인만의 학습법이 있다면?

개발자로서 목표가 무엇인가요? 혹은 본인의 인생의 목표가 무엇인가요?

최근 공부해보고 싶은 기술이 있다면 무엇이 있을까요?

프론트엔드는 기술이 빠르게 변화하는 데 두려워하진 않나요?

프로젝트를 진행하면서 어려웠던 점과 어떻게 극복했는지 말해주세요.

마지막으로 회사에 궁금한 점 혹은 하고 싶은 말
