자바스크립트가 인터프리터 언어 이자 싱글스레드 언어인데 실제 사용시에는 멀티스레드 언어처럼 사용되는데 어떻게 사용되나?
  - 이벤트 루프는 컬백 큐에 있는 것들을 컬 스택이 비워질때 실행되는데 매우 미묘한 차이라 비동기적으로 실행된 것 처럼 보임

브라우저 렌더링 과정에서 JS 동작 과정
  - HTML을 파싱 중 script태그를 만남 -> HTML파싱을 중단한 후 JavaScript 파일을 다운 -> JS파일 파싱 후 AST 형태로 메모리에 저장 -> Call Stack으로 관리되고 그 이후 DOM과 CSSOM을 조작할 수 있다 -> 렌더링시 레이아웃(Layout), 페인팅(Paint) 과정을 거쳐 브라우저에 결과물이 출력
  - async/defer 어트리뷰트를 사용하면 HTML파싱과 JS파일 로드를 비동기적으로 사용 할 수있다.

변경 사항이 있다고 항상 리플로우-리페인트가 일어나는 건 아니다. 레이아웃에 영향을 주지 않으면 리페인트만 수행하게 된다, 하지만 리플로우가 일어나면 반드시 리페인트가 수행된다.
- 리플로우(Reflow)가 일어나는 대표적인 속성 : position, width, height, margin, padding, border, border-width, font-size, font-weight, line-height, text-align, overflow
- 리페인트(Repaint)만 일어나는 대표적인 속성 : background, color, text-decoration, border-style, border-radius

이벤트 버블링을 잘 활용하는 방법 : 이벤트 위임을 가능하게 

이터러블, 이터레이터 프로토콜에 대해
- 이터러블 : ES6부터 사용, 반복 가능한 객체 (for..of 반복문을 적용가능), [Symbol.iterator]() 메소드를 가졌고, 이 메소드를 통해 이터레이터(Iterator)를 반환합니다.
- 이터레이터 : {value : 값, done : true/false} 형태의 이터레이터 객체를 리턴하는 next() 메서드를 가진 객체이고, next() 메서드로 순환가능하며 [Symbol.iterator]() 안에 정의되있음

require과 import의 차이
- require : NodeJS에서 사용되고 있는 CommonJS 키워드, 프로그램의 어느 지점에서나 실행
- import :  ES6(ES2015)에서 새롭게 도입된 키워드,  파일의 시작 부분에서만 실행

자바스크립트 성능 최적화를 위해 할 수 있는것

vue와 리액트의 차이점

무작위 데이터에 대해 테스트 하는

애로우 함수를 언제 쓰는지?

MVVM모델에 대해서

이진트리에 대해

깊은 복사와 얕은 복사

requestAnimationFrame이란

key props를 사용하는 이유

생명주기메서드에 대해

리액트 관련 패키지중 좋다고 생각되는것

리액트 18버전 업데이트된 내용

context API와 리덕스의 차이

리덕스 사가와 리덕스 성크의 차이

Webpack, Babel, Polyfill

bundle의 사이즈를 줄이려면

크로스 브라우징에 대해

웹소켓에 대해

cascading에 대해

css에니메이션과 js에니메이션의 차이

package.json에서 dependencies와 devDependencies의 차이점

JSX란?

ESLint에 대해

ES6 문법에 추가된 것들을 아는대로 설명하세요
- String Literal, 객체 비구조화, 객체 리터럴, for .. of, Spread Operator, Rest Parameter, Arrow Function, Default Params, let & const, import & export, Map & Set 

Box model에 대해

undeclared 란? 

"attribute"와 "property"의 차이점

Map()과 Set()의 설명 및 차이점

좋은 코드

시스템 고도화를 위해 할 수 있는것

클로저와 가비지 컬렉션의 관계

XMLHttpRequest와 fetch 함수의 차이

WebGL에 대해서

HTML5의 가장 큰 특징

브라우저마다 렌더링되는 결과(HTML 또는 CSS)가 조금씩 다른 이유

mutable한 값과 immutable한 값의 저장 방식의 차이




--------------------------------

2. 인성면접🤔
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
