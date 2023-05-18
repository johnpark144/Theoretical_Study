### **HTML**
- `DOCTYPE 🔥`
  - DOCTYPE에 대해
    - HTML 뒤에 오는 태그들이 <a href="">HTML5의 문법에 따라 작성</a>되었음을 <a href="">브라우저에 알림</a> (문서형식을 정의)
  - meta 태그에 대해?
    - HTML <a href="">문서 설명, 키워드, 저자 등</a> 정보를 담고있는 head 안에 있는 태그
    - 그로인해 <a href="">검색 엔진이 파악</a> 할 수 있도록 돕는다
    - 모바일 기기에서 웹 사이트를 보기 좋게 <a href="">viewport</a> 같은 것을 설정 할 수있다
  - meta 태그의 요소
    ```
    // 예시
    <meta charset="utf-8" />
    <meta name="author" content="Chris Mills" />
    ```
    - charset : <a href="">문서에서 허용하는 문자 집합</a> (utf-8은 전세계적인 character 집합이므로 어떤 문자라도 취급)
    - http-equiv :  해당 <a href="">문서를 어떻게 처리</a>해야 하는지
    - name : 메타 요소가 <a href="">어떤 정보의 형태</a>를 갖고 있는지
    - content : 실제 메타 데이터의 <a href="">컨텐츠</a>
    
  - 검색 엔진 최적화기하기 (Search Engine Optimization 또는 SEO)
    - <a href="">meta태그</a> 이용
    ```
    <head>
      <meta charset="UTF-8">
      <meta name="description" content="페이지 설명이 들어갑니다.">
      <meta name="keywords" content="검색어1, 검색어2, 검색어3">
      <meta name="author" content="작성자 이름">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="refresh" content="5;url=http://www.naver.com">
      <title>페이지 제목</title>
    </head>
    ```
    - <a href="">타이틀 태그</a>
    - <a href="">시멘틱 태그</a>
    - <a href="">이미지 alt</a>속성 이용
    - <a href="">HTTPS</a> 사용 권장
    - 기타 등등
- `웹 표준 및 웹 접근성 🔥`
  - 웹 표준이란? 
    - 어떠한 브라우저에서 보더라도 <a href="">동일하게</a> 보여지도록 <a href="">W3C(World Wide Web Consortium) 기구 표준</a>에 맞추는 것 (최신 웹표준 : HTML5, CSS3)
    - 다양한 웹 환경 속에서도 대응 가능 하여 <a href="">웹 접근성 향상</a>
    - <a href="">장애인, 고령자들도</a> 이용하기 쉽게 이용

  - HTML5의 특징 -> (멀모세로 웹캔위시)
    - <a href="">멀티미디어</a> 지원 (audio태그, video태그)
    - <a href="">모든 디바이스</a> 웹페이지 호환
    - <a href="">세션 스토리지</a>와 <a href="">로컬 스토리지</a>
    - <a href="">웹소켓</a>
    - <a href="">캔버스</a>(2d,3d)
    - 지리적인 <a href="">위치 정보</a>
    - <a href="">시맨틱 태그</a>

  - 웹 접근성이란?
    - <a href="">모든 사람 (비장애인, 장애인, 노인 등 )이 불편함 없이</a> 웹 사이트를 자유롭게 이용할 수 있게 하는 권리

  - 웹 접근성에 맞는 마크업(태그) 예시
    - 이미지에 텍스트로 된 설명 첨부, <a href="">이미지에 alt</a>, <a href="">IR기법</a>을 사용하여 대체텍스트를 제공
    - 동영상은 <a href="">대본이나 자막을 제공</a>하고, <a href="">자동재생 금지</a>
    - <a href="">a 태그에</a> 정보를 적절히 제공하기 위해 <a href="">title 속성</a>을 이용
    - <a href="">input태그에는 적절한 label</a>이 제공
    - <a href="">table에는 caption, summary, thead, tbody, th</a> 등을 사용
    - 컨텐츠는 <a href="">위에서 아래로 읽을 수 있는</a> 선형구조

  - 시멘틱 태그
    - HTML로 만든 문서에 추가적으로 의미를 부여, 서로 관계가 있는 정보를 파악하고 <a href="">콘텐츠가 어떤 맥락 안에 있는지 알기 쉽게</a> 함
    - <a href="">SEO에 도움</a>되기도 함
    - <a href="">header, nav, aside, section, article, footer</a>

  - Button 태그의 Default type
    - 타입을 명시하지 않으면 <a href="">디폴트가 submit</a>이기 때문에 <a href="">버튼태그는 꼭 타입 명시</a>하자.
    - 타입 : <a href="">reset은 폼안에 작성된 내용을 초기화</a>시킴
  - Section 태그와 article 태그의 차이
    - Section : 애플리케이션의 <a href="">요소 또는 문서를 분리</a>하는 역할
    - article : <a href="">문서, 게시글, 뉴스 기사</a> 등의 <a href="">독립적인 콘텐츠를 의미</a>하고 <a href="">더 구체적</a>이다

- 줄바꿈 일어나는 태그
  - <a href="">heading태그, hr, div</a> 등
  - `<pre>` 스페이스
  - `<blockquote>` 인용문임을 알림
- 줄바꿈 일어나지 않는 태그
  - <a href="">span </a>
  - `<strong>` 글자를 굵게 표시 (중요)
  - `<b>` 글자를 굵게 표시 (중요한지 관계없이)
  - `<em>` 글자를 기울여 표시 (강조)
  - `<i>` 글자를 기울여 표시 (단순)
  
- `그 외 🔥`
  - 이미지 크기가 클 경우 렌더링 속도가 느려질텐데 이를 개선하기 위한 방법
    - 이미지 <a href="">포맷을 변경</a>하여 용량을 줄임 ex) PNG -> JPEG
    - 이미지 <a href="">용량 줄이는 사이트</a>이용
    - <a href="">이미지 스프라이트</a>를 활용 (여러 개의 이미지를 하나의 이미지로 합쳐서 관리)
    - <a href="">벡터 이미지(SVG)</a>를 활용
  - UI란?
     - 유저 인터페이스로써 웹사이트의 <a href="">시각적요소</a>를 의미하며, 다양한 사용자가 사용할 수 있도록 <a href="">보편성을 지녀야</a>하고 전체적으로 사용에 있어 큰 불편함이 없어야 한다.
  - Box model에 대해
    - 모든 <a href="">HTML 엘리먼트가 가진 3개의 층의 사각형 구조</a>의 형태 <a href="">(1 Margin > 2 Border > 3 Padding > Content)</a>

- `SVG란 ? 🔥`
  - SVG에 대해
    - SVG 이미지는 <a href="">마크업</a>으로 쓰이므로 <a href="">작성된 이미지를 바로 수정 가능</a>
     - XML 포맷으로 파일이 작성되므로 <a href="">JS나 CSS로 조작</a>이 가능하다.
    - <a href="">벡터를 기반</a>으로 그려져서 <a href="">사이즈가 깨지지 않는다.</a> (따라서 어떤 해상도에서 사용하든 동일)
    - 단점은 <a href="">이미지가 복잡할수록 그래픽처리가 어렵다</a>
  - SVG 내부 도형에 대해?
    - <a href="">rect, circle, polyline, path</a>
<br />

### **CSS**
- `display 🔥`
  - block
    - 항상 <a href="">새로운 라인에</a> 요소가 시작
    - width 값을 부여해주면 <a href="">그 너비만큼 영역을 차지</a>
  - inline
    - <a href="">같은라인에</a> 배치
    - <a href="">width, height, margin-top, margin-bottom 등이 적용되지 않고</a>, content 너비만큼의 영역을 차지
    - margin, padding은 좌우만 먹힘
  - inline-block
    - <a href="">같은라인에</a> 배치
    - <a href="">width와 height 값으로 영역의 크기를 차지</a>
  - none
    - 보이지도 않고 <a href="">해당 공간도 존재하지 않게</a> 됨
    - (그와 반대로 <a href="">visibility: hidden은 보이지는 않지만 공간은 존재</a>)

- `position 🔥`
  - static
    - <a href="">기본값</a>
    - <a href="">문서흐름에 따라</a>배치 
  - relative
    - <a href="">원래 배치되어야 할 위치에서 지정한 값</a>대로 배치
    - 원래 배치되어야 할 위치 <a href="">공간은 잡아먹음</a>
  - absolute
    - <a href="">상위 요소를 기준으로 지정한 값</a> 만큼 배치
    - 원래 배치되어야 할 위치 <a href="">공간은 잡아먹지 않음</a>
  - fixed
    - <a href="">화면 전체를 기준</a>으로 배치
    - <a href="">스크롤을 하더라도 위치가 고정</a>

- `float가 어떻게 작동 🔥`
  - float
    - CSS 위치지정 속성 (float 속성을 부여한 요소의 다음 요소는 <a href="">float 속성을 부여한 요소가 차지하는 위치만 제외하고 나머지 공간을 채우게함</a>,
    - <a href="">페이지의 흐름의 일부가 되어</a> 주로 페이지의 <a href="">텍스트와 이미지를 묶는 레이아웃</a>을 만들 때 사용 (position: absolute는 페이지의 흐름에서 제거)
    - <a href="">left, right, none 값</a> 중 하나를 가질 수 있다 (center나 middle 값은 없고 그렇게 이용하고 싶으면 margin:0 auto 로 이용)
    - position 속성의 absolute 값과 같이 쓰일 수 없고, <a href="">겹치면 absolute가 우선순위</a>임
  - clear
    - <a href="">left, right, both, none 값</a>을 float요소 주변 태그에 줌으로써 <a href="">float 영향 받지않게</a>함
    - 보통 both를 쓰면됨

- `Flexbox와 Grid 🔥`
  - flex를 사용하는 이유
    - <a href="">1차원적</a> 배열 (<a href="">수평,수직</a>)
    - <a href="">효율적으로 정렬</a>할 수 있게 해준다
  - Grid를 사용하는 이유
    - <a href="">2차원적</a> 배열 (<a href="">표 처럼</a>)
    - 브라우저 창을 줄여도 자동으로 리스트의 <a href="">width가 퍼센트(%)를 준것 처럼</a> 브라우저 창에 반응

- `이미지 태그를 스타일로 대체하는 법 🔥`
  - <a href="">background-image</a>로 대체

- `반응형 웹의 3요소 🔥🔥`
  - <a href="">그리드</a>
  - <a href="">가변형 단위</a> (width, max width, heigt )
  - <a href="">미디어쿼리</a>

- `CSS selector(선택자) 원리🔥`
  -  태그(요소) (h1, div, ...)
  -  아이디 (#myId)
  -  클래스 (.my-class)
  -  자식 (ul > li, & > h1 ,...)
  -  가상 클래스 (a:hover)
  -  속성 (input[type="text"])
  -  전체 (*)

- `반응형웹(responsive)과 적응형웹(adaptive) 🔥`
  - 반응형 웹이란? 🔥
    -  한개의 페이지(템플릿)로 PC, 스마트폰, 태블릿 PC 등에서 접속하는 <a href="">디스플레이의 종류에 따라 화면의 크기가 자동으로</a> 변하도록 
  - 적응형 웹이란?
    - 여러개의 페이지(템플릿)를 디바이스에 맞게 <a href="">별도로 제작</a>되어 사용자의 기기 및 해상도 정보를 미리 받아서 <a href="">조건에 맞는 화면을 보여주는 것</a>
    - ex) www.naver.com = PC 화면 / m.naver.com = 모바일 및 태블릿 용 ----> 태블릿으로 www.naver.com 쳤을때 <a href="">redirect하여 m.naver.com으로 가게</a>하여 <a href="">pc화면보기 누를때만 접속</a> 가능하도록 함
  - 장단점
    - 반응형 : pc용, 모바일용 <a href="">모든 리소스를 다운</a>받아 랜딩되니 <a href="">로딩속도가 느림</a>, <a href="">하나의 웹사이트만</a> 관리
    - 적응형 : 감지된 <a href="">디바이스에 맞는 리소스만 다운</a>받아 랜딩되니 <a href="">로딩속도가 빠름</a>, <a href="">여러개의 웹사이트</a>를 관리

- `PX, EM 🔥🔥`
  - 절대단위 : px, pt 등
  - 상대단위 : %, vw, vh, em(부모 요소의 폰트 크기에 따라), rem(루트 즉 최상위 요소의 폰트 크기따라)

- `CSS 적용 우선순위(CSS cascading)🔥🔥`
  - 중요도 : 1) <a href="">태그내 style속성</a> 2) <a href="">style 태그</a> 3) style 태그 안 @import 4) link태그로 연결된 <a href="">css파일</a> 5) link태그로 연결된 css파일 안 @import
  - 명시도 :  1) <a href="">!important</a> 2) 태그내 style 3) <a href="">id</a>  4) <a href="">class</a> 5) <a href="">태그</a> 6) <a href="">전체 선택자(*)</a>
  - 코드순서 : <a href="">늦게 선언된</a> 스타일 우선 적용

- `CSS-in-JS 🔥`
  - <a href="">JavaScript 코드 안</a>에서 CSS를 작성하는 방법
  - <a href="">컴포넌트 단위로 스타일링</a>을 하기 때문에 코드 <a href="">유지보수가 용이</a>
  - 진정한 <a href="">분리 법칙</a>을 따른다 (CSS-in-JS의 경우 <a href="">부모 요소의 속성을 상속하지 않음</a>)
  - <a href="">네임스페이스 충돌이나 CSS 셀렉터 우선순위와 같은 문제 걱정없음</a>
  - <a href="">조건부 스타일링</a>이 쉽다
  - 코드가 길어지면 <a href="">가독성이 떨어질 수</a> 있다
  - 대표적인 라이브러리로 <a href="">styled-components</a>와 <a href="">Emotion</a>

- `CSS 전처리기(CSS preprocessors)🔥`
  - CSS 전처리기 장단점
    - 장점 : <a href="">조건문이나 반복문</a> 등을 할 수있어서 효율적인 코드 작성 가능, <a href="">mixin과 include를 사용하여 코드 재사용 가능</a>
    - 단점 : <a href="">브라우저에서 직접 실행되지 않아서</a> 브라우저 <a href="">호환성 문제가 발생할 수 있음</a>, 일반 CSS보다 <a href="">컴파일 시간이 더 걸릴 수 있음</a>

- `padding과 margin 🔥`
  - padding : 내부여백
  - margin : 외부여백

- CSS 가상요소에 대해
  - CSS 가상 요소는 HTML 요소에 존재하지 않는 가상의 요소를 생성하고, 이를 스타일링하기 위한 기술입니다
  - 가상 요소는 특히 디자인적인 요소에 활용되며, 예를 들어 콘텐츠의 앞이나 뒤에 아이콘, 라인, 따옴표, 특수문자 등을 추가할 수 있습니다.
  - ::before
    - 선택한 요소의 첫 번째 자식 요소 앞에 삽입되며, 내용의 앞쪽에 추가적인 콘텐츠를 만듭니다.
  - ::after
    -  선택한 요소의 마지막 자식 요소 뒤에 삽입되며, 내용의 뒤쪽에 추가적인 콘텐츠를 만듭니다.
  - ::first-letter
    - 선택한 요소의 첫 번째 글자를 선택하여 스타일링할 수 있습니다.
  - ::first-line
    - 선택한 요소의 첫 번째 줄을 선택하여 스타일링할 수 있습니다.
  - ::selection
    - 사용자가 선택한 텍스트에 대한 스타일을 지정할 수 있습니다.
