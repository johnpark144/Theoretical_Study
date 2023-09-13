- `프로세스와 스레드 🔥`
  - 프로세스와 스레드의 차이
    - 프로세스 : 프로그램이 동적상태가 될때 <a href="">작업의 단위</a>, 독자적으로 시스템 자원을 할당 받음
    - 스레드 :  프로세스안에 <a href="">실행 흐름의 단위</a>, 할당받은 <a href="">자원을 다른 스레드와 공유</a>

- `싱글 스레드와 멀티 스레드 🔥`
  - 싱글 스레드 장단점
    - 장점 : 스레드 간의 작업전환(Context Switching) X -> <a href="">단순 작업엔 유리</a>
    - 단점 : 여러 CPU를 활용 X -> <a href="">동시 작업 할 수 X</a>
  - 멀티 스레드 장단점
    - 장점 : 1) 새로운 프로세스보다 기존 프로세스에서 <a href="">스레드 생성이 더 빠름</a>, 2) 프로세스 작업전환보다 <a href="">스레드끼리 작업전환이 더 빠름</a>, 3) 프로세스의 <a href="">자원을 스레드끼리 공유</a>하여 효율적,
    - 단점 : 1) <a href="">단순작업엔 오히려 시간을 지연</a>, 2) 스레드 스케쥴링을 신경써야 한다.

- `HTTP 🔥`
  - HTTP란 (HyperText Transfer Protocol) ? <a href="">웹과 서버간의 데이터</a>를 주고 받기 위한 통신 프로토콜 (FTP는 파일전송용)
  - HTTP 프로토콜의 가장 큰 특징 : 현 데이터 요청과 다음 데이터 요청이 <a href="">서로 관련이 없음</a> (state가 없음)

  - URL (Uniform Resource Locators) 이란? 
    - 자원 요청을 위한 <a href="">영문 주소</a>
    - 숫자보다 <a href="">외우기 쉬움</a>
    - <a href="">DNS를 통해 실제 IP 주소로</a> 변환

  - DNS의 장점
    - <a href="">IP 주소가 바뀌어도</a> 똑같은 도메인 주소로 사용가능

  - HTTP/1.1 과 HTTP/2.0의 차이
    - HTTP/1.1 :  <a href="">커넥션당 하나의 요청/응답</a>, 응답 시간이 느림, 텍스트기반
    - HTTP/2.0 :  <a href="">커넥션당 다중 요청/응답</a>, 응답 시간이 빨라짐, 바이너리기반, https필수
    - HTTP/3.0 : UDP기반 QUIK프로토콜 사용, 동영상에서 속도가 빠름
  - HTTPS와 HTTP
    - HTTPS의 S는 secure을 의미
    - 내가 사이트에 보내는 정보를 <a href="">암호화시킴</a>
    - 이로인해 <a href="">믿을만한 사이트 확인</a> 가능

  - 대칭키와 비대칭키(공개키와 개인키)
    - 대칭키는 <a href="">똑같은키로 암호화 및 복호화</a>
    - 비대칭키는 짝된키로 공개키와 개인키이다, <a href="">공개키로 암호화 개인키로 복호화</a>
    - 공개키를 공유할 때는 주로 대칭키 방식을 사용 (비대칭키가 훨씬 안전하지만 <a href="">컴퓨터에 더 부담</a>을 줌)

- CSRF와 XSS 공격
   - CSRF(Cross-Site Request Forgery)
      - 인증된 사용자의 권한을 이용하여 악의적인 요청을 보내는 공격기법
      - 해결책 : <a href="">CSRF 토큰 사용</a>(서버는 요청을 받을 때 CSRF 토큰이 유효한지 검사), <a href="">SameSite 쿠키 속성 설정</a>(제3자 사이트에서는 쿠키를 사용할 수 없도록 제한)
   - XSS(Cross-Site Scripting)
      - 스크립트 코드를 삽입하여, 이를 실행시켜 정보를 탈취하는 기법
      - 해결책 : <a href="">입력 값 검증</a>, <a href="">XSS 필터링</a>, <a href="">Content Security Policy(CSP) 설정</a> (허용된 스크립트만 실행되도록 제한)

- `쿠키 세션 비교 🔥🔥`
  - 쿠키, 세션 쓰는 이유 🔥🔥
    - <a href="">HTTP는 비연결성</a>이라는 특징이 있지만 이들로 인해 전에 <a href="">기록이 있으면 재연결</a>되도록 함.

  - 쿠키란? 🔥🔥
    - 웹 사이트를 방문한 경우 저장되는 <a href="">기록 정보</a>이다.
    - <a href="">클라이언트</a>에 저장
    - <a href="">보안에 취약</a>하여 중요정보를 담지않음
    - 클라이언트에 있어서 <a href="">속도 빠름</a>
    - <a href="">만료기간</a>이나 <a href="">삭제전</a>까지 살아있음
    - 사용예시 : 아이디, 비번 자동입력, 팝업창 다시보지 않기 등
    - 동작 순서 : 클라이언트의 요청 -> 서버에서 쿠키와 함께 응답 -> 나중에 클라이언트가 요청시 쿠키와 함께 요청 -> 쿠키에 의한 서버의 응답

  - 세션이란? 🔥🔥
    - 서버가 <a href="">클라이언트를 식별할 수 있도록</a> 하는 방식이고, <a href="">쿠키를 이용</a>하여 <a href="">클라이언트에 세션 ID 값을 부여</a>
    - <a href="">서버</a>에 저장
    - <a href="">비교적 안전</a>
    - 서버에 있어서 비교적으로 <a href="">느리다</a>
    - 만료기간을 정할 순 있지만 <a href="">보통 브라우저가 종료되면</a> 만료기간 상관없이 삭제
    - 동작 순서 : 클라이언트의 요청 -> 세션 정보를 서버 세션에 저장 후 세션 ID를 쿠키를 통해 클라이언트에 부여 -> 나중에 세션ID를 가진 클라이언트가 요청 -> 세션ID에 맞는 정보 전달

- `CORS 🔥`
  - CORS란 
      - Cross Origin Resource Sharing의 약자로, <a href="">교차 출처 공유</a>라는 의미
      - 여기서 Origin은 scheme(프로토콜), host, port 로 이루어진 도메인을 의미
      - <a href="">SOP</a>(Same Origin Policy)인 <a href="">동일 출처 정책</a>에 의해 <a href="">같은 URL끼리만 데이터접근 가능</a>하게 하지만 <a href="">CORS를 허용하면 그것을 풀어주는 역할</a>을 함(화이트리스트).
      - 프론트 -> WithCredentials: true / 서버 -> Access-Control-Allow-Credentials: true , 허락할 도메인

  - CORS 문제 해결하기
      - 먼저 프론트에서 <a href="">응답 헤더에 제대로 된 정보</a>를 넣어는 지 확신 (예를들면 <a href="">Credentials 관련 설정</a>을 했는지)
      - 해당 오류를 캡쳐해서 <a href="">서버 개발자와 같이</a> 확인해보는 방법
      - 그래도 안되면 <a href="">프록시 서버 설정</a>

- `클라우딩 서비스 (off-premise 방식)`
  - <a href="">off-premise는 클라우드 방식</a>이고, on-premise는 IDC 즉 개인데이터센터인 자체시설에 직접 서버, 네트워크, 방화벽 등을 유지하여 관리하는 방식
  - IaaS : (빈방)
      -<a href=""> 빈 가상 환경</a>
      - 일일이 다 설치 해야해서 설치가 어려워 불편하지만, 자유롭다
      - 운영비가 많이듬
  - PaaS : (기본빌트인)
      - 앱 개발 위한 <a href="">도구 제공</a> (헤로쿠)
      - 특정 플랫폼에 종속 가능성이 있음
      - 어느정도 설치가 되워있어서 편하지만, 자유롭지 않음
      - 운영비 절감효과
  - SaaS 🔥 : (완성)
      - <a href="">서비스</a>로서의 소프트웨어(Software-as-a-Service, SaaS)는 <a href="">완성된 클라우드 컴퓨팅 형태</a>
      - SaaS의 예로는 <a href="">Google Docs, 인사 관리 소프트웨어, 고객 관계 관리 툴, IDE(통합 개발 환경)</a> 등

- `개발 방법론 🔥`
  - 폭포수 방법론 (<a href="">순서중심</a>)
      - 순차적인 개발 방식 (분석 -> 설계 -> 구현 -> 시험 -> 통합 -> 유지보수)
      - 전 단계 끝나기전 다음으로 X
  - 애자일 방법론 (<a href="">CI/CD 중심</a>)
      - <a href="">변화에 대응</a>하며, <a href="">상호작용</a> 및 <a href="">만족도 개선</a>을 위해 <a href="">반복작업</a>하는 개발 방식

- `Cache 🔥`
  - 캐시란?
      - <a href="">자주 필요한 데이터</a>나 <a href="">반복적인 결과</a>를 <a href="">일시적으로 저장</a>하여 전체적인 처리 속도를 향상
      -<a href=""> CPU가 메모리를 기다라는 병목현상을 완화</a>하기 위해 속도 빠른 캐시 메모리를 둠
- `CI/CD 🔥`
  - CI/CD란?
      - 개발 단계부터 빌드까지 지속적으로 <a href="">작은단위로 빈번하게</a> 배포하는 방법
      - 작은단위로 빈번하게 하지않으면 merge시 충돌이 날 수밖에 없음
      - <a href="">지속적인 통합</a>, 지속적인 서비스 제공 및 <a href="">배포</a>
      - <a href="">개발 생산성 향상</a>, <a href="">문제점 빠르게 발견</a>, 새로운 코드 통합으로 인한 문제해결

- `CDN 🔥`
  - CDN(엣지/콘텐츠 전송 네트워크)이란?
      - <a href="">지리적으로 분산된 여러 개의 서버</a>
      - 사용자가 요청하면 <a href="">가까운 곳에서</a> 응답 (지연시간 줄임)
      - <a href="">하나가 오류 생겨도</a> 다른 CDN으로 연결되기 떄문에 안정적
      - 한 서버에 쏠리지 않기 때문에<a href="">과부화 방지</a>
      - 오히려 <a href="">대역폭 비용이 절감</a> (한 서버에 대역폭을 늘릴필요X)

- `테스트(TDD) 🔥`
  - 테스트란? 어플리케이션이 <a href="">요구사항에 맞게 동작하는지를 검증</a>하는 행위
  - 테스트의 예
     - <a href="">버그 수정</a> 및 <a href="">리팩토링 후</a> 영향받는 다른 모듈의 실행 결과 확인
     - <a href="">html/css를 작성후 렌더링</a>된 결과 확인
     - 테스트된 코드를 배포한 후 <a href="">배포 과정에서 발생한 문제</a>가 없는지 확인
  - 테스트의 장점
     - <a href="">유지보수</a>에 용이
     - <a href="">에러나 버그를 일찍</a>발견
  - 테스트의 단점
     - <a href="">코드량이 많아져서</a> 배보다 배꼽이 커지는 경우가 될 수있음
     - 테스트를 한다고 <a href="">다 실패하는 건 아님</a>
     - <a href="">생산성의 저하</a>될 수 있다

  - 유닛 테스트란?
     - <a href="">모듈(함수,클래스)</a> 테스트
     - 작성 비용이 적고, 실행속도가 빠름
     - 문제가 생긴 부분을 비교적 <a href="">쉽고 정확하게</a> 파악
  - 통합 테스트란?
     - 유닛 테스트보다 큰 범위
     - <a href="">개별 모듈(함수/클래스)들이 연결되어 제대로 상호작용</a> 하는지를 테스트
     - 단위 테스트에 비해 문제가 생긴 부분을 <a href="">비교적 파악하기가 어려움</a>
  - E2E(인수) 테스트란?
      - <a href="">실제 사용자</a>가 사용하는 것과 같은 전체 테스트
      - <a href="">실행속도가 느림</a>

#####################################################################################

- `business logic 🔥`
  - business logic 이란?
      - 프로그램의 핵심 로직
      - <a href="">어떻게 데이터가 생성되고 저장되고 수정되는지</a> 등을 <a href="">논리적으로</a> 정의한 것
      - ex) 장바구니에 있는 결제예정 금액이 물품이 추가됨에 따라 수정되는 로직
- `Snippet 🔥`
  - snippet 이란?
      - <a href="">재사용 가능한 소스 코드</a>, 기계어, 텍스트의 작은 부분을 일컫는 프로그래밍 용어
      - <a href="">반복 타이핑을 회피</a>할 수 있도록하여 <a href="">시간과 노력을 절약</a>

- `웹팩 🔥`
  - 웹팩이란?
      - 최신 프런트엔드 프레임워크에서 <a href="">가장 많이 사용되는 모듈 번들러</a>
      - 웹 애플리케이션을 구성하는 HTML, CSS, JavaScript, 이미지 등의 <a href="">정적인 리소스를 모두 각각의 모듈로 보고 이를 조합</a>하여 병합된 <a href="">하나의 결과물</a>을 만드는 도구
  - 모듈이란?
      - <a href="">특정 기능</a>을 갖는 작은 코드 단위
      - 성격이 비슷한 기능들을 <a href="">하나의 파일로</a> 관리
      - <a href="">자바스크립트 모듈에만 국한되지 않고</a> 웹 애플리케이션을 구성하는 <a href="">모든 자원</a>을 의미 (HTML, CSS, Javascript, Images, Font, etc..)

  - 모듈 번들링(빌드)이란?
      - 웹 애플리케이션을 구성하는 수많은 자원들을 <a href="">하나의 파일로 병합 및 압축</a> 해주는 동작

  - bundle의 사이즈를 줄이려면
     - <a href="">Tree-shaking</a> : <a href="">필요한 부분만</a> 추출하여 번들링하는 방식 (전체를 Import 하지 않고 사용하는 기능만 <a href="">{}</a> 부분적으로 Import )
     - <a href="">Code Splitting</a>
     - <a href="">이미지 최적화</a>
     - <a href="">라이브러리 최적화</a> : 라이브러리의 버전을 <a href="">최신 버전으로</a> 업데이트하거나, 필요한 부분만 가져와서 사용
     - <a href="">Gzip 압축</a>

  - 웹팩이 등장한 이유 웹팩의 이점
      - <a href="">파일 단위의 모듈들을 관리</a> (파일 구조가 복잡해져도 코드의 <a href="">유지보수와 확장이 쉬워짐</a>)
      - <a href="">파일 변환</a> (<a href="">이미지, CSS 등과 같은 타입도</a> 웹팩을 통해 <a href="">모듈처럼</a> 불러와 사용가능)
      - <a href="">번들링과 압축</a> (하나의 번들 파일로 만들어져 <a href="">최적화된 파일 크기를 갖게 하여 성능 개선</a>에 도움)
      - <a href="">Tree Shaking</a> (사용하지 않는 코드를 제거하여 필요한 코드만 포함된 결과물을 생성)
      - 새로고침 없이 <a href="">실시간으로 수정된 내용</a>을 브라우저에 반영하는 <a href="">HMR(Hot Module Replacement) 기능</a>을 지원

  - 바벨이란?
      - JS의 <a href="">ES6 이상 최신 문법</a> 들을 브라우저 환경에서 <a href="">ES5 문법으로써 호환이 가능하도록 변환</a>해주는 <a href="">트랜스파일링 언어</a>
  - 트랜스 파일이란?
      - 한 언어로 작성된 코드를 <a href="">비슷한 수준의 추상화를 가진 다른언어로</a> 변환 ex) es6 -> es5 / c++ -> c 
  - Polyfill
     - Promise와 같은 <a href="">ES5에도 존재하지 않아 Babel로 변환할 수 없는 최신 자바스크립트 코드</a>도 브라우저가 <a href="">이해하도록 지원</a>하는 코드다 (누락된 새로운 기능을 <a href="">메꿔주는</a> 역할) 
  - 웹팩의 주요 속성 4가지
      - <a href="">entry</a> : <a href="">빌드를 할 대상 파일</a>의 위치
      - <a href="">output</a> : 엔트리에 들어온 파일을 번들링한 <a href="">결과물의 파일 경로</a>
      - <a href="">loader</a> : <a href="">빌드시 JS가 아닌 파일(css, 이미지, 폰트 등)을 결과에 포함</a>될 수 있도록함, <a href="">module이라는 이름사용</a>, 로더 설정 하지 않은 경우 빌드시 파일들을 인식 못하여 <a href="">에러발생</a>
      - <a href="">plugin</a> : 웹팩의 기본적인 동작에 <a href="">추가적인 기능을 제공</a>하는 속성
      - loader는 파일을 해석하고 변환하는 과정에 관여(없으면 빌드시 에러), plugin은 해당 결과물의 형태를 바꾸는 역할(없으면 빌드시 에러 안나지만 결과물에 작동이 안됨)

- 브라우저마다 렌더링되는 결과(HTML 또는 CSS)가 조금씩 다른 이유
  - 브라우저 마다 <a href="">웹 표준 준수도 차이</a>가 있음
  - <a href="">브라우저 엔진의 차이</a>
  - <a href="">운영 체제와 장치의 차이</a>

- 크로스 브라우징에 대해
  - 가능한 <a href="">모든 브라우저에서</a> 깨지지 않고 <a href="">의도한 대로</a> 올바르게 나오게 하는 작업 (호환성)
  - 작업이 필요한 이유 : 브라우저 마다 <a href="">랜더링 엔진이 달라서 작동되지 않는 HTML5, CSS, Javascript 코드가 존재</a>함
  - 크로스 브라우징을 위해 고려할 수 있는 것
    - <a href="">웹 표준 준수</a>
    - <a href="">CSS Reset</a> : 각 브라우저에는 margin, padding, line-height 등 각각 기본 스타일이 설정되어 있는데 그들을 초기화하여 <a href="">공통화</a> 시킴
    - <a href="">프리픽스 사용</a> : CSS 프리픽스를 사용하면 브라우저별로 각기 다른 CSS 속성값을 적용 (크롬,사파리:-webkit- / 파이어폭스:-moz- / 오페라:-o-)
    - 자바스크립트 <a href="">라이브러리 사용</a>
    - <a href="">폴리필 사용</a>
    - <a href="">테스트 및 디버깅</a>
    - <a href="">점유율이 높은 브라우저</a>부터 맞추는 것
    - <a href="">caniuse.com</a>로 기능 지원여부

- 웹소켓에 대해
  - <a href="">양방향 통신을 지원</a>하는 네트워크 프로토콜
  - <a href="">실시간 통신이 가능</a>
  - <a href="">웹소켓이 나오기전</a>엔 단방향 통신만 지원하는 HTTP 프로토콜로 <a href="">일정시간마다 request하고 response받는 Polling의 방식을 사용</a>하였다.
  - <a href="">게임, 채팅, 실시간 주식거래</a> 등에 유용

- `타입과 인터페이스 🔥🔥🔥`
  - 동적 타이핑 : 변수의<a href=""> 타입을 미리 지정하지 않고</a>, 런타임에 <a href="">할당된 값에 따라 자동으로</a> 타입이 결정 (자바스크립트)
  - 정적 타이핑 : 변수의 <a href="">타입이 미리 지정</a>되어 있어, 런타임 때 타입이 변경될 수 없음
  - 타입스크립트 이용하는 이유
      - <a href="">정적 타이핑을 지원</a>하여 런타임 에러를 줄임
      - <a href="">프로토타입 메서드를 자동완성</a> 하게하여 개발 효율을 높일 수있음
      - 코드의 <a href="">유지 보수성을 높임</a>
  - 타입과 인터페이스의 차이
      - 확장 방법 : <a href="">인터페이스는 extends 키워드</a>를 사용하여 확장이 가능하고, <a href="">타입은 & 연산자</a>를 통해 확장이 가능하다
      - 선언적 확장 : 이미 존재하는 인터페이스와 같은 <a href="">인터페이스 명으로 다시 만들면 자동확장</a>, <a href="">타입은 Duplicate 에러</a> 뜸
      - <a href="">인터페이스는 객체 타입용</a>
  - 어떤 상황에서 타입을 쓰고 인터페이스를 쓰는지?
      - 일반적으로, <a href="">변수, 함수, 매개변수, 반환값</a> 등을 정의할 때 <a href="">타입을 사용</a>하고, <a href="">객체 형태</a>를 정의할 때 <a href="">인터페이스를 사용</a>하는 것이 일반적
  - 제네릭이란?
      - <a href="">클래스, 함수, 인터페이스 등을 다양한 타입으로 재 사용가능</a>하게 해주는 문법
         ```      
         // 제네릭 X
         function getSize(arr: number[] | string[] | boolean[]): number {  
           return arr.length;
         }

         const arr = [1, 2, 3];
         getSize(arr); 

         const arr2 = ["a", "b", "c"];
         getSize(arr2);
         ```  

         ``` 
         // 제네릭 O
         function getSize<T>(arr: T[]): number {   
           return arr.length;
         }

         const arr = [1, 2, 3];
         getSize<number>(arr);

         const arr2 = ["a", "b", "c"];
         getSize<string>(arr2);
         ```

- ESLint, prettier에 대해
  - ESLint : 코드의 <a href="">문법 오류</a>를 발견하는 것을 중점, 가독성 및 코드 퀄리티를 높인다
  - prettier : 코드의 <a href="">일관성 유지</a>하는 것을 중점, 가독성을 높임

- 좋은 코드(클린 코드) -> (중일가테)
  - 최대한 <a href="">중복이 없는</a> 코드
  - <a href="">일관성</a>있는 코드
  - <a href="">가독성</a>이 좋은 코드
  - <a href="">테스트하기 좋은</a> 코드

- 클린 코드를 위해 할 수있는일
  - <a href="">함수는 동작 하나만</a>
  - <a href="">함수명은 동사</a>로, <a href="">변수명과 클래스명은 명사</a>로 짓기
  - <a href="">통상적으로 사용되는 변수명/규칙</a>을 사용 (obj, arr, idx, info 등)
  - 함수의 <a href="">인수는 3개이하</a> 적당. 많을 경우에는 Object로 정리
  - 함수의 인수로 <a href="">불린값을 넣지말자</a> (불린이 함수안에 들어간다는건 동작이 때에따라 달라지는 것을 의미하므로 차라리 두개의 함수를 따로 만드는게 클린함)
  - <a href="">중복된 코드를 확인</a>하고 코드를 줄이기 위해 로직을 생각
  - 기타 등등

- 시스템 고도화를 위해 할 수 있는것
  - <a href="">아키텍처 개선</a>
  - 인프라 업그레이드: <a href="">하드웨어나 소프트웨어 업그레이드</a> 및 <a href="">좋은 제품</a>으로 변경
  - 코드 <a href="">리팩토링</a>(중복이 별로없고 더 보기 좋은 코드 --> 비슷한 결과물)
  - <a href="">성능 최적화</a>(비슷한 양의 코드 --> 더 좋은 결과물)
  - <a href="">보안 강화</a>
  - <a href="">모니터링 개선</a>