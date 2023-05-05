- 리액트는 라이브러리인가요 프레임워크인가요
  - 프레임워크 : 개발시 코드의 품질, 필수코드, 알고리즘, 암호화, 데이터베이스 연동 같은 기능들이 어느정도 구성되어 <a href="">뼈대를 제공</a>하는 것 (<a href="">개발자를 call</a>)
  - 라이브러리 : <a href="">특정 기능에 대한 API를 모은</a> 집합체 (<a href="">개발자가 call</a>)
  - 프레임워크, 라이브러리 차이 : <a href="">flow의 차이</a> (라이브러리는 어플리캐이션의 흐름을 제어하고, 프레임워크의 경우 거꾸로 애플리캐이션이 프레임워크의 흐름대로 사용됨)

- 리액트를 사용하는 이유
  -  <a href="">컴포넌트를 사용</a>해서 역할과 기능에 따라 <a href="">따로 관리 용이</a>하다, 반복되는 부분을 한 코드로 <a href="">재사용 가능</a>하다, 블록쌓기처럼 컴포넌트를 쌓아 빠르고 <a href="">효율적으로 화면을 구성</a>할수 있다.
  -  전체 페이지를 렌더링 하는게 아니라 <a href="">Virtual DOM으로 확인된 수정된 부분만 빠르게 렌더링</a>함
  -  <a href="">SPA</a>로 <a href="">서버에 부담을 줄이고</a>, 더 <a href="">좋은 UX를</a> 느낄 수있음
  -  <a href="">생태계가 넓고</a>, <a href="">다양한 라이브러리</a> 사용 가능
  -  리액트 네이티브로 <a href="">앱 계발도 쉽게</a> 배울 수 있음

- vue와 리액트의 차이점
  - vue (프H 자빠진타 컴생)
    - <a href="">프레임워크</a>
    - <a href="">HTML, JS, CSS 코드 영역을 분리</a>해서 작성함
    - 정해진 방법만 사용하기 때문에 <a href="">자유도가 낮다</a> 그렇지만 리액트보다 <a href="">접근성이 높음</a>
    - 속도가 약간 더 <a href="">빠름</a>
    - <a href="">진입장벽이 낮음</a>
    - <a href="">타입스크립트로 구현이 좀 어려움</a>
    - <a href="">컴포넌트 분리 및 재사용</a> 측면에서 <a href="">효율성이 낮음</a>
    - 리액트보다 <a href="">생태계가 좁음</a>
  - 리액트
    - <a href="">라이브러리</a>
    - <a href="">JSX 형태</a> 코드를 사용함
    - 자바스크립트 코드를 더 사용하여 <a href="">자유도가 높다</a>는 장점이 있으나 그로인해 vue보다 <a href="">접근성이 낮다</a>
    - 속도가 vue보단 <a href="">약간 느림</a>
    - <a href="">진입장벽이 높음</a>
    - <a href="">타입스크립트로 구현이 쉬움</a>
    - <a href="">컴포넌트 분리 및 재사용</a> 측면에서 <a href="">효율성이 높음</a>
    - vue보다 <a href="">생태계가 넓음</a>

- virtual DOM에 대해서 아나요
  - 기본 DOM
    - XML이나 HTML <a href="">문서에 접근하기 위한</a> 일종의 인터페이스
    - <a href="">트리형</a>으로 구조화 되있음
    - 프로그래밍 언어는 <a href="">DOM구조에 접근</a> 할 수있게 하여 <a href="">구조,스타일,내용들을 변경</a>할 수있도록 돕는다.
    - HTTP response > DOM tree > CSSOM tree > render tree > painting 형태로 렌더링을 해주는데, <a href="">DOM 자체의 속도는 느리지 않지만</a>, <a href="">잦은 렌더링으로 퍼포먼스가 떨어질 수있음</a>
  - 가상 DOM
    - 가상 DOM은 실제 DOM이 아닌 <a href="">실제와 같은 사본 DOM</a>으로써, <a href="">하나는 변경 이전 내용</a>을 담고있고 <a href="">하나는 변경 이후에 보여질 내용</a>을 담는다.
    - 변경 전과 후 가상 DOM을 비교하여 <a href="">바뀐 부분만 실제 DOM에 적용</a>한다
    - <a href="">UI를 업데이트 하는 과정에서 생기는 복잡함을 해소</a>하여 쉽게 업데이트 할 수있지만, <a href="">복잡하지 않은 간단한 작업시</a>에는 오히려 가상 DOM을 생성하는 과정이 <a href="">딜레이를 초래</a>할수 있다.

- React에서 함수 컴포넌트와 클래스 컴포넌트의 차이 🔥
  - 클래스
    - <a href="">객체지향 프로그래밍 구조</a>이며 초기화 하기위해 생성자(constructor) 함수를 필요로 함
    - 함수 컴포넌트에 비해서 <a href="">코드가 길어지고</a>, <a href="">사이즈가 커질 수 있어서</a>, <a href="">느려질 수 있음</a>
    - <a href="">state 기능</a> 및 <a href="">라이프 사이클 기능</a>(componentDidMount, shouldComponentUpdate, componentDidUpdate, componentWillUnmount 등)을 사용할 수 있으며 임의 메서드를 정의할 수 있음
    - <a href="">render 함수로 JSX를 반환 해야함</a>
  - 함수
    - <a href="">Hooks를 사용</a>하여 생성자 함수를 통해 state를 초기화 안해도 사용가능
    - 클래스 컴포넌트에 비해 <a href="">선언하기가 더 편하고</a>, <a href="">사이즈가 적고</a>, <a href="">빠르다</a>
    - <a href="">커스텀 훅</a>을 생성하여 동작 시킬 수있다
 
- 리액트에서 함수형 컴포넌트라고 부르지 않고 함수 컴포넌트라고 부르는 이유가 무엇인가요🔥
  - 초창기에는 함수형 컴포넌트라 불렸지만 <a href="">함수형 프로그래밍과 이름이 비슷</a>하여 혼란스러울 수 있기 때문에 최근에 <a href="">함수 컴포넌트로 이름이 바뀜</a>
  - <a href="">함수형 프로그래밍은 순수 함수를 지향</a>하는데, <a href="">함수 컴포넌트는 훅으로 인해</a> 많은 사이드 이펙트를 일으켜 <a href="">함수형 프로그래밍과는 거리가 멀다</a>

- props와 state의 차이🔥
  - props
    - <a href="">부모 컴포넌트에 있는 state</a>가 <a href="">자식 컴포넌트에 속성으로</a> 설정되면, 자식 컴포넌트 내에서는 <a href="">읽기전용 props</a>가됨, <a href="">값을 바꾸려면 부모에서</a> 바꿔야함
  - state
    - <a href="">컴포넌트 내부에서 바뀔수 있는 값</a>

- Props가 컴포넌트간에 전달받는 것이라고 했는데 자식에서 부모로도 전달할 수 있는가 🔥
  - 원칙은 부모에서 자식으로만 가능
  - 자식에서 부모로 데이터 전송 방법 = <a href="">함수 이용</a> (<a href="">부모는 함수를 전달</a>하고, <a href="">자식은 파라미터로 값을 전달</a>)

- FLUX에 대해서 아나요? 🔥🔥
  - MVC 패턴
    - <a href="">Model과 View간에 쌍방향 데이터 흐름</a> (Action -> Controller => [Model <-> View])
    - <a href="">간단한 어플리케이션</a>의 경우 <a href="">쉽게 데이터 흐름을 파악</a> 할 수있으나, <a href="">기능들이 추가 될 수록 데이터 흐름이 복잡</a>해짐 
  - FLUX 패턴 (리덕스)
    - <a href="">단방향 데이터 흐름 (Action -> Dispacher -> Store -> View -> Action ...)</a>
    - 디스패처가 스토어를 업데이트하고 변경된 스토어에 대해 뷰를 렌더링, 뷰는 스토어에 직접 접근 할수 없고 디스패처로 다시 액션을 보내고 스토어를 업데이트한 뒤 다시 뷰를 리렌더링함
    - <a href="">단방향이어서 융통성은 없지만 기능이 추가되도 데이터 흐름을 파악하기 쉬움</a>
  - MVVM모델에 대해서
    - <a href="">View는 데이터 바인딩을 이용하여 ViewModel를 항상 구독</a>하고있고, ViewModel은 Model에 데이터 요청과 응답을 받음 <a href="">(Action -> View -> ViewModel <-> Model) </a>
    - ViewModel은 1개, View는 N개 (<a href="">1대다 관계</a>)
    - MVC와 다르게 <a href="">데이터 바인딩을 사용</a>하여 <a href="">View와 ViewModel 사이의 의존성을 없앤</a> 디자인 패턴이고, 이로인해 <a href="">로직이 복잡해져도</a> MVC보다 <a href="">유지보수가 쉽다</a>는 장점이있음.
    - MVVM은 <a href="">Angular, Vue.js, 플러터</a> 등 프레임워크에서 주로 쓰임

- 리덕스에 대해서 아나요? 🔥
  - <a href="">상태관리 라이브러리 중 가장 많이</a> 사용되는 라이브러리
  - Store라는 변수로 전역 상태관리를 하여 props를 주고 받지 않아도 됨

- 리덕스의 기본 3 원칙은? 🔥
  - 어플리케이션 <a href="">상태는 모두 한곳에서</a> 집중관리 (<a href="">단일 저장소</a>)
  - 상태는 <a href="">읽기전용</a>이며, <a href="">Action을 통해서만 교체</a> 가능 (<a href="">예측가능, 디버깅 용이</a>)
  - 부수효과 없는 <a href="">순수 함수</a>(Reducer)로 작성되어, 사실 상태를 변경하는게 아니라 <a href="">새로운 상태 객체를 반환함</a>

- context API와 리덕스의 차이
  - context API 
    - <a href="">초창기 세팅이 쉬움</a>
    - 어플리케이션이 커질때 <a href="">관리가 점점 어려움</a>
    - 상태 관리 도구는 아니고 <a href="">전역 상태 공유</a> 기능만 있음
  - 리덕스
    - <a href="">초창기 세팅이 어려움</a>
    - 어플리케이션이 커질때 <a href="">관리가 용이함</a>
    - <a href="">상태 관리 도구</a>임

- Redux-saga와 Redux-thunk의 차이 (둘다 비동기 자료를 상태관리 하기위함)
  - Redux-saga
    - <a href="">Generator</a>를 사용
    - <a href="">러닝커브가 있다</a>
    - 다양한 상황에 쓸 수 있는 만큼 제공되는 <a href="">기능도 많다</a>
    - <a href="">비동기 작업을 할 때 기존 요청을 취소</a>하거나, <a href="">요청 실패시 재요청도 가능</a>하다
    - <a href="">규모가 있는 애플리케이션에 적합</a>
  - Redux-thunk
    -  <a href="">간단하고 쉽게</a> 사용할 수 있는 미들웨어
    - try-catch 문으로 감싸 에러를 처리하기 때문에 코드가 길어질 수 있다
    - <a href="">action에서 많은 일을 한다</a>
    - <a href="">규모가 작은 애플리케이션에 적합</a>

- React 및 리듀서 내부에서 state의 불변성을 유지하라는 말이 있는데 이에 대해 설명해달라 🔥
  - 객체는 복사하면 참조 값이 전달되어, <a href="">동일한 참조 값을 가진 객체중 하나라도 변경되면 모든 객체가 변경</a>된다.
  - <a href="">assign</a>메서드나 <a href="">스프레드 연산자</a> 는 객체의 <a href="">한 단계만 깊은복사</a> 그 이상은 <a href="">얕은복사</a>한다.
  - <a href="">immer 라이브러리</a>와 <a href="">lodash의 clone deep</a>과 <a href="">JSON.parse(JSON.stringify())</a> 등 으로 <a href="">완전한 깊은복사</a>를 할 수있다.
  - <a href="">원본이 변경되면</a> 이로인해 <a href="">부수효과에 의해 불필요한 리렌더링</a> 및 <a href="">의도한 동작과 다르게 동작</a> 할 수있다.

- 리액트 사용시에 부수효과로 인해 생기는 문제점이 있다면 🔥
  - <a href="">부수 효과를 일으키는</a> 함수 (<a href="">불순 함수</a>) 예시 : <a href="">http 요청</a>을 보내는 함수, <a href="">prompt나 confirm등이 포함</a>되있는 함수, <a href="">파라미터를 직접 변경</a>하는 함수 등
  - 부수 효과를 일으키지 않는 함수 (<a href="">순수 함수</a>) : 항상 동일하게 예상된 값이 나오는 함수
  - 문제점 : <a href="">상태관리 어려워짐</a>, <a href="">비동기 작업 처리 복잡해짐</a>, <a href="">불필요한 렌더링 및 성능저하</a>, <a href="">테스트 하기 어려움</a>

- 컴포넌트의 라이프 사이클 메서드 🔥
  - <a href="">컴포넌트가 생성될 때부터 소멸될 때까지</a>의 과정을 의미
  - 라이프 사이클 : <a href="">마운트, 업데이트, 언마운트</a>
  - 업데이트가 되는 경우 : <a href="">Props나 state의 변화</a>, <a href="">부모 컴포넌트가 리렌더링</a>, <a href="">this.forceUpdate로 강제로 렌더링</a>
  - 메서드 종류 (총 9가지)
    - 마운트 : <a href="">componentDidMount</a>나 useEffect
    - 업데이트 : <a href="">componentDidUpdate</a>나 useEffect
    - 언마운트 : <a href="">componentWillUnmount</a>나 <a href="">useEffect의 뒷정리(cleanup) 함수</a>

- Hooks의 종류 🔥
  - useState
  - useEffect : 
    - 렌더링될 때마다 특정 작업을 수행하도록 (<a href="">componontDidMount + componentDidUpdate</a>)
    - useEffect에서 <a href="">뒷정리(cleanup) 함수를 반환</a>해 주면 컴포넌트가 <a href="">언마운트 될시에 실행</a>된다.
  - useReducer
    - <a href="">useState보다 더 다양한 컴포넌트 상황</a>에 따라 <a href="">다양한 상태를 다른 값으로 업데이트</a> 해주고 싶을 때 사용
    - useState Bank라 보면됨
  - useRef
      - useRef는 <a href="">.current 프로퍼티에 변경가능한 값</a>을 담고있으며, 프로퍼티가 변경되도 <a href="">리렌더링을 유발하지 않는다.</a>
      - 주로 <a href="">리렌더링 없이 값만 내부에서 변경</a>시키거나, <a href="">DOM에 접근</a>하기 위해 사용
  - useMemo
    - <a href="">처음 반환된 값을 메모이제이션</a>하여 메모이제이션 된 값을 계속 사용하고, 두번째 인수 <a href="">의존성 배열안에 값이 변경될때만 다시 변경된 값을 반환</a>한다
    - 값이 객체타입이어도 <a href="">변경되지 않은 주소 값을 메모이제이션</a>해서 <a href="">주소값이 바껴 재 렌더링 되는 현상이 일어나는 것을 방지</a>한다
  - useCallback
    - <a href="">처음 반환된 함수를 메모이제이션</a>하여 메모이제이션 된 함수를 계속 사용하고, 두번째 인수 <a href="">의존성 배열안에 값이 변경될때만 다시 변경된 함수를 반환</a>한다
    - 함수가 객체타입이지만 <a href="">변경되지 않은 주소 값을 메모이제이션</a>해서 <a href="">주소값이 바껴 재 렌더링 되는 현상이 일어나는 것을 방지</a>한다
  - 커스텀 Hooks

- useMemo와 useCallback의 차이를 아나요 🔥
  - useMemo : 메모이제이션 된 값을 반환
  - useCallback : 메모이제이션 된 함수를 반환
  - 불필요한 리렌더링은 성능 저하의 원인이 되지만, <a href="">memoization은 메모리를 잡아먹기 때문에</a> 이 두 hooks는 <a href="">잦은 렌더링이 발생</a>하거나 <a href="">복잡한 로직</a>이 수행될 때만 사용
 
-  React.memo란?
  - <a href="">고차 컴포넌트로</a>, <a href="">컴포넌트의 결과 값을 메모이제이션</a>하여 동일한 속성으로 여러번 호출될 땐 기억하고 있는 컴포넌트 값을 출력하고, <a href="">컴포넌트의 props가 변경될 때만 리렌더링</a>이 되도록 최적화한다.
  - <a href="">객체타입은</a> 주소값이 항상 변경되기 때문에 <a href="">useMemo나 useCallback을 같이 사용</a>하여 속성을 전달해줘야 한다.

- 리액트에서 setState는 비동기 동작인가요 동기 동작인가요?
  - <a href="">setState는 비동기 적</a>으로 동작
  - 해당 함수 내에서 <a href="">동기적으로 실행되는 함수가 모두 실행된 뒤에</a> 마지막에 <a href="">setState를 처리</a>
  ```
  const onClickButton = () => {
    console.log("before", count); // ----> 동기함수 (1) <--- 실행순서
    setCount(count + 1); // ---->  비동기함수 (2) count+1, (4) setCount
    console.log("after", count); // ---->  동기함수 (3)
  };
  ```

- setState가 비동기 동작을 취했을 때 얻을 수 있는 이점은 무엇인가요?
  - <a href="">리렌더링 횟수를 줄여</a> 성능 향상에 도움 (실행컨텍스트에 <a href="">동기적으로 실행되는 함수들을 모두 동작한 후</a>, <a href="">큐에 존재하는 setState(비동기적인 함수)를 이벤트 루프에 의해 불려져서 실행</a>


#############################################################################################

- useLayoutEffect는 무엇인가요?
  - <a href="">동기적으로 실행</a>되므로 <a href="">불필요한 렌더링을 방지</a>하여 성능 최적화에 유용
  - useEffect와 useLayoutEffect의 차이
    - useEffect : 렌더링 될때 브라우저가 <a href="">페인팅 하고 난 후</a>에 실행됨(<a href="">비동기적</a>), 주로 <a href="">데이터 가져오기</a>, <a href="">API 호출</a> 등과 같이, <a href="">화면을 먼저 보여지는게 더 효율적인 경우</a> 사용
    - useLayoutEffect : 렌더링 될때 브라우저가 <a href="">페인팅 하기 전</a>에 실행(<a href="">동기적</a>), 주로 화면 요소의 <a href="">레이아웃 리셋</a> 등과 같이, <a href="">DOM 조작이 렌더링 결과에 바로 반영되어야 하는 경우</a> 사용
    ```
    import { useEffect, useState } from "react";
    
    export default  function App() {
      const [name, setName] = useState("");

      useEffect(() => {
        setName("영환");
      }, []);

      return (
        <>
          <div className="App">{`내 이름은 ${name} 입니다.`}</div>  // -> useEffect를 사용해서 빈칸이 먼저 보이고 이름이보임 이 경우 useLayoutEffect가 더 적합
        </>
      );
    }
    ```
 
- 리액트의 성능개선 방법에 대해서 설명해주세요
  - <a href="">렌더링 최적화</a>
    - <a href="">useMemo, useCallback</a>
    - <a href="">React.memo</a>
  - <a href="">코드 스플리팅</a>
    - <a href="">React.lazy()</a> 함수와 <a href="">Suspense</a> 컴포넌트
    - <a href="">Next.js</a> 프레임워크 사용
  - <a href="">메모리 누수 방지</a>
    - 함수 컴포넌트에선 <a href="">useEffect의 리턴</a>과 클래스 컴포넌트에서는 <a href="">componentWillUnmount()</a>를 이용하여 <a href="">컴포넌트가 언마운트시</a> 불필요한 이벤트 리스너, 타이머 등의 <a href="">자원 해제</a>를 수행
  - 그 외
    - <a href="">key값으로 index를 사용하지 않는다</a>
    - <a href="">useTransition과 useDeferredValue</a>로 <a href="">성능저하를 일으키는 부분은 나중에 처리</a>
    - <a href="">이미지 최적화</a>

- 컴포넌트에서 이벤트를 실행시키기 위해서는 어떻게 핸들링해야 하나요
  - 이벤트로 사용할 함수를 넣음 (직접 넣어 줄 때는 화살표 함수 문법을 사용)

- SPA가 뭔가요?
  - <a href="">한 개의 페이지</a>로 이루어진 애플리케이션을 의미
  - 한 페이지로 <a href="">필요한 부분만 자바스크립트를 사용하여 업<a href="">데이트</a> 해주고, 서버 API를 호출하여 필요한 데이터만 새로 불러와 사용할 수도 있습니다
  - 리액트는 <a href="">리액트 라우터, NextJS</a> 등으로 라우팅을 구현
  - SPA의 단점은 <a href="">SEO에 취약</a>하다(검색엔진에 노출되기 힘듬)

- SSR이 뭔가요?
  - <a href="">서버로부터 완전히 만들어진 html파일</a>을 받아와 페이지 <a href="">전체를 렌더링</a> 하는 방식
  - <a href="">SEO에 최적화</a> (검색엔진들이 html태그들을 분석하는데 <a href="">CSR는 빈 html</a>이고 <a href="">SSR은 만들어진 html</a>임)
  - <a href="">첫 페이지 로딩속도가 빠르다</a>
  - <a href="">서버 측에서 모든 뷰를 준비하면(MPA)</a> 과부하로 성능상의 문제가 발생할 수 있어서 <a href="">느려지기 쉬우며<a href="">, 페이지 마다 이동시 <a href="">깜박이는 현상</a>이 발생됨.
  - <a href="">처음 화면이 보이기 시작해도(TTV) 상호작용(TTI)되기 전까지 기다려야함</a> (JS파일 다운시간)

- SEO가 뭔가요?
  - <a href="">검색엔진 최적화</a> : 서버에 있는 <a href="">HTML 파일을 분석</a>하여서, 검색어를 찾을때 데이터를 크롤링하여 웹사이트에 포함 되있으면 그 웹페이지를 보여주게 함
  - <a href="">Meta태그, 타이틀태그, 시멘틱태그, 이미지alt</a> 등이 존재하는 html파일을 <a href="">서버사이드에서 렌더링</a>해주면 SEO에 도움이되고, <a href="">https</a>를 사용하여 안전한 사이트임을 인증하는 것도 도움됨

- TTV, TTI
  - <a href="">TTV</a> : Time To View (<a href="">볼 수 있는 시점</a>)
  - <a href="">TTI</a> : Time To Interact (<a href="">인터랙션 할 수 있는 시점</a>)
  - <a href="">CSR</a>의 경우 <a href="">TTV와 TTI가 같음</a> [접속 -> <a href="">빈 html파일</a> 받아옴 -> JS파일 받아옴 -> <a href="">JS 작동시(TTI) 동적으로 html생성(TTV)</a>]
  - <a href="">SSR</a>의 경우 <a href="">TTV가 먼저 TTI가 그 다음</a> [접속 -> <a href="">완성된 html파일 받아옴(TTV)</a> 그러나 클릭해도 아무처리 안됨 -> JS파일 받아옴 -> <a href="">JS 작동(TTI)</a>]
  - 개발시 주의 점
    - <a href="">CSR</a>의 경우 어떻게 하면 효율적으로 많이 분할하여 <a href="">첫 번째로</a> 사용자가 보기 위해서 필요한 정말 <a href="">필수적인 html 요소만</a> 보낼 수 있을지 고민
    - <a href="">SSR</a>의 경우 <a href="">인터렉션(TTI)하는 이 시간의 단차를 줄이기 위해서</a> 어떤 노력을 할 수 있을지 고민, <a href="">어떻게 매끄럽게 UX/UI를 제공</a>할 수 있을지 고민
  
- SSG란?
  - 미리 <a href="">컴파일된 정적인 HTML</a>을 생성하여 서버에 배포하는 방식 (미리 다 만들어져있는 페이지)
  - <a href="">업데이트가 자주 일어나지 않는 사이트</a>에 적합
  - 장점 : <a href="">빠른 로딩 속도</a>, <a href="">SEO</a>, <a href="">보안</a> (서버X, 데이터베이스X)
  - 단점 : 정적 파일들을 수정 및 추가하려면 <a href="">새로운 빌드</a> 해야함

- 하이드레이션에 대해 알고 있나요
  - SSR 혹은 SSG로 만들어진 정적인 HTML과 State를 수분이 없다 표현하고, 이로부터 <a href="">동적인 상태로 변화하는 것</a>이 수분을 보충하는 과정과 같아서 <a href="">하이드레이션</a>이 일어난다고 표현함.
  - <a href="">render()</a>는 빈 HTML로 <a href="">UI를 생성</a>하거나 변경사항을 업데이트하는것, <a href="">hydration()</a>은 이미 만들어진 HTML에 리액트 트리에 맞게 <a href="">이벤트를 보충</a>하는 것

- Next를 쓴 이유가 있나요
  - <a href="">사전 렌더링</a> 및 <a href="">서버사이드 렌더링</a> (<a href="">빠른 초기 로딩 속도</a>, <a href="">SEO</a>)
  - <a href="">Hot Code Reloading</a>, <a href="">HMR</a>(Hot Module Replacement) 지원 (<a href="">코드 수정 후 즉각적인 변경 사항 확인</a>)
  - <a href="">자동 코드 스플리팅</a> (코드분할하여 따로 렌더링)
  - <a href="">설정이 필요없음</a> (기본 <a href="">웹팩과 바벨</a>을 사용, 원하는 <a href="">플러그인 추가</a> 가능)
  - <a href="">타입스크립트</a> 내장
  - <a href="">파일기반 네비게이션</a> (리액트 라우터 없이, <a href="">폴더로 라우팅</a>)
  - <a href="">정적 파일 제공<a href=""> (<a href="">public 디렉토리</a>를 통해)

- Next를 구성하는 기본 설정 파일에 대해서 알고 있나요?
  - nextjs 13 기준 (app 폴더)
    - <a href="">layout.jsx</a> : 공통으로 들어갈 레이아웃
    - <a href="">head.jsx</a> : html의 head 부분
    - <a href="">page.jsx</a> : 라우팅될 부분의 body부분
    - <a href="">loading.jsx</a>
    - <a href="">not-found.jsx</a>
    - <a href="">error.jsx</a>
    - <a href="">Template.jsx</a> : layout과 유사
  - nextjs 12 기준 (pages 폴더)
    - <a href="">_app.jsx</a> : 공통 페이지
    - <a href="">_document.jsx</a> : Html, Head, body 태그를 보강하는데 사용
    - <a href="">_error.jsx</a>
    - <a href="">404.jsx</a>

- 사전 렌더링을 위해 사용해 본 것 있나요
  - <a href="">사전렌더링</a> -> 그 이후 동적인 데이터를 패치하는 경우 <a href="">CSR사용</a>
  - nextjs 13 기준 (<a href="">fetch의 두번째 인수</a> 이용)
    - SSR : <a href="">{ cache: "no-cache" }</a>
    - SSG : <a href="">{ cache: "force-cache" }</a>
    - ISR : <a href="">{ next: { revalidate: 60 } }</a>  // 숫자는 시간(초)
  - nextjs 12 기준 (함수 이용)
    - SSR : <a href="">getServerSideProps</a>
    - SSG : <a href="">getStaticProps</a>
    - SSG + 동적라우팅 : <a href="">getStaticPath</a>

- Suspense
  - `suspense가 뭔가요?`
    - 컴포넌트가 읽어들이고 있는 <a href="">데이터가 아직 준비되지 않아</a> "로딩중"과 같은 <a href="">대체 메시지를 띄우게</a> 하는 방법
  - `suspense로 가능한 것은 어떤 것들이 있나요?`
    - <a href="">데이터를 불러오는 라이브러리들과 같이 사용</a>되어 로딩 상태관리
    - <a href="">React.lazy()와 함께 사용</a>하여 로딩 상태관리
    - <a href="">둘 이상의 스레드 또는 프로세스가 공유된 자원에 접근할 때</a>, 실행 순서와 타이밍 등에 따라 결과 값이 달라지게 하는 <a href="">경쟁 상태(Race Condition)를 피할 수 있도록</a> 돕습니다

- key props를 사용하는 이유
  - 리액트가 <a href="">엘리먼트를 구분</a>하기 위해
  - <a href="">업데이트 성능을 최적화</a>하기 위해

- package.json에서 dependencies와 devDependencies의 차이점
  - <a href="">dependencies</a> : 애플리케이션의 실행에 필요한 <a href="">필수 패키지</a> ex) Express.js, React, Lodash, Axios 등
  - <a href="">devDependencies</a> : <a href="">개발 단계에서만</a> 필요한 패키지(<a href="">테스트 도구, 번들링 도구</a>) ex) Webpack, Jest, RTL 등

- JSX란?
  - <a href="">Javascript에 XML을 확장</a>한 <a href="">html과 유사</a>한 문법
  - Html과 다른점
    - 모든태그는 <a href="">닫는 태그</a>를 가져야한다(self-closing tag 대신 사가능)
    - <a href="">{ }</a>로 <a href="">자바스크립트 표현식</a> 작성가능
    - <a href="">스타일 적용시</a> 어트리뷰트에 하이픈(-)대신 <a href="">카멜 표기법</a>으로 작성
    - <a href="">class대신 className사용</a> 등

- "attribute"와 "property"의 차이점
  - attribute : <a href="">정적</a>인 <a href="">Html 안에 속성</a>  ex) class
  - property : <a href="">동적</a>인 <a href="">DOM tree 안에 속성</a> (html의 attribute를 DOM 내에서 대신해서 표현) ex) className
  ```
  <input value="텍스트를 입력하세요">
  
  //  input 박스에 "고양이" 이라는 단어를 입력한다면?
  // Attribute value = 텍스트를 입력하세요 // (정적)
  // Property value = 고양이 // (동적)
  ```

- 스토리북에 대해서 
  - 개별 <a href="">컴포넌트의 기능과 상태를 다양한 시나리오로 테스트</a>하고, <a href="">문서화하여 관리할 수 있는 환경</a>을 제공
