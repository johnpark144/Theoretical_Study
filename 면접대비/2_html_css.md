### **HTML**
- `DOCTYPE 🔥`
  - DOCTYPE에 대해
    - HTML 뒤에 오는 태그들이 HTML5의 문법에 따라 작성되었음을 브라우저에 알림 (문서형식을 정의)
  - meta 태그에 대해?
    - HTML 문서 설명, 키워드, 등 정보를 담고있어 검색 엔진이 파악 할 수 있도록 돕거나, 모바일 기기에서 웹 사이트를 보기 좋게 viewport 같은 것을 설정 할 수있는 head 안에 있는 태그
  - meta 태그의 요소
    ```
    // 예시
    <meta charset="utf-8" />
    <meta name="author" content="Chris Mills" />
    ```
    - charset : 문서에서 허용하는 문자 집합 (utf-8은 전세계적인 character 집합이므로 어떤 문자라도 취급)
    - http-equiv :  해당 문서를 어떻게 처리해야 하는지
    - name : 메타 요소가 어떤 정보의 형태를 갖고 있는지
    - content : 실제 메타 데이터의 컨텐츠
    
  - 검색 엔진 최적화기하기 (Search Engine Optimization 또는 SEO)
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

- `웹 표준 및 웹 접근성 🔥`
  - 웹 표준이란? 
    - 어떠한 브라우저에서 보더라도 동일하게 보여지도록 W3C(World Wide Web Consortium) 기구 표준에 맞추는 것 (최신 웹표준 : HTML5, CSS3)
    - 다양한 웹 환경 속에서도 대응 가능 하여 웹 접근성 향상
    - 장애인, 고령자들도 이용하기 쉽게 이용
  - HTML5에서 추가된 내용 
    - canvas로 그림그리거나 3d구현가능, 모든 디바이스 웹페이지 호환, 시멘틱 웹 기술 지원
  - 웹 접근성이란?
    - 모든 사람 (비장애인, 장애인, 노인 등 )이 불편함 없이 웹 사이트를 자유롭게 이용할 수 있게 하는 권리

  - 웹 접근성에 맞는 마크업(태그) 예시
    - 이미지에 텍스트로 된 설명 첨부, 이미지에 alt, IR기법을 사용하여 대체텍스트를 제공
    - 동영상은 대본이나 자막을 제공하고, 자동재생 금지
    - title을 사용해 a 태그에 대한 정보를 적절히 제공
    - input태그에는 적절한 label이 제공
    - table에는 caption, summary, thead, tbody, th 등을 사용
    - 컨텐츠는 위에서 아래로 읽을 수 있는 선형구조

  - 시멘틱 태그
    - HTML로 만든 문서에 추가적으로 의미를 부여, 서로 관계가 있는 정보를 파악하고 콘텐츠가 어떤 맥락 안에 있는지 알기 쉽게 함
    - SEO에 도움되기도 함
    - header, nav, aside, section, article, footer
  - 줄바꿈 일어나는 태그
    - `<pre>` 스페이스
    - `<blockquote>` 인용문임을 알림
  - 줄바꿈 일어나지 않는 태그
    - `<strong>` 글자를 굵게 표시 (중요)
    - `<b>` 글자를 굵게 표시 (중요한지 관계없이)
    - `<em>` 글자를 기울여 표시 (강조)
    - `<i>` 글자를 기울여 표시 (단순)

  - Button 태그의 Default type
    - 타입을 명시 하지않으면 디폴트가 submit이기 때문에 버튼태그는 꼭 타입 명시하자.
    - 타입 : reset은 폼안에 작성된 내용을 초기화시킴
  - Section 태그와 article 태그의 차이
    - Section : 태그는 문서나 애플리케이션의 구획을 구분하여 분리하는 역할
    - article : 문서, 게시글, 뉴스 기사 등의 독립적인 콘텐츠를 의미

- `그 외 🔥`
  - 이미지 크기가 클 경우 렌더링 속도가 느려질텐데 이를 개선하기 위한 방법
    - 이미지 포맷을 변경하여 용량을 줄임 ex) PNG -> JPEG
    - 이미지 용량 줄이는 사이트이용
    - 이미지 스프라이트를 활용
    - 벡터 이미지(SVG)를 활용
  - UI란?
     - 다양한 사용자가 사용할 수 있도록 보편성을 지녀야하며 전체적으로 사용에 있어 큰 불편함이 없어야 한다.
- `SVG란 ? 🔥`
  - SVG에 대해
    - SVG 이미지는 마크업으로 쓰이므로 작성된 이미지를 바로 수정 가능
    - 벡터를 기반으로 그려지므로 사이즈가 깨지지 않는다. (따라서 어떤 해상도에서 사용하든 동일)
    - 2011년 W3C 표준이 되었다.
    - XML 포맷으로 파일이 작성되므로 JS나 CSS로 조작이 가능하다.
    - 단점은 이미지가 복잡할수록 SVG만의 장점은 감소한다.
  - SVG 내부 도형에 대해?
    - rect, circle, polyline, path
<br />

### **CSS**
- `display 🔥`
  - block
  - inline
  - inline-block
  - none

- `position 🔥`
  - static
  - relative
  - fixed
  - absolute

- `float가 어떻게 작동 🔥`

- `Flexbox와 Grid 🔥`
  - flex 를 사용하는 이유
  - Grid를 사용하는 이유

- `이미지 태그를 스타일로 대체하는 법 🔥`
- `반응형 웹의 3요소 🔥🔥`
- `CSS selector 원리🔥`

- `반응형웹과 적응형웹 🔥`
  - 반응형 웹이란? 🔥
  - 적응형 웹이란?

- `PX, EM 🔥🔥`
  - 절대단위
  - 상대단위
  - px
  - em
  - ex
  - %
  - pt

- `CSS 적용 우선순위 🔥🔥`
- `CSS-in-JS 🔥`
- `CSS 전처리기(CSS preprocessors)🔥`
  - CSS 전처리기 장단점

- `padding과 margin 🔥`
  - padding
  - margin
