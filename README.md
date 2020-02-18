# React-router

1. Routing : 어떤 주소에 어떤 UI를 보여 줄지?
2. SPA란 : Single Page Application (페이지가 개인 어플리케이션)
    - 단점 : 앱의 규모가 커지면 JS규모가 커짐(해결책 : Code Splitting)
    - 단점 : 브라우저에서 자바스크립트가 구동되지 않으면 UI 못봄 (해결책 : Server Side Rendering)
3. 가장 많이 사용하는 라이브러리 ( react-router, next )

### 1.프로젝트 준비 및 기본적인 사용 법

1. 라우터 관련 라이브러리 설치 ( yarn add react-rounter-dom )
2. <BrowserRouter> 컴포넌트 적용
3. App.js 에 Route 특정 주소와 컴포넌트 연결하기
    - <Route path="주소규칙" component={보여주고싶은 컴포넌트}>
4. path="/" 초기 경로가 같아서 Home 과 소개가 겹치는 현상 exact라는 props를 true로 설정
5. HashRouter (해시태그 붙음), MemoryRouter(주소 안바뀜)

### 2. 파라미터와 쿼리

1. 페이지 주소를 정의할때 파라미터와 쿼리로 나눠진다.(주소를 통해서 동적인 값 가져올때)

    - URL 파라미터 : ex) /profiles/velopert -> 특정 id나 이름을 가지고 조회할 때 사용
    - 쿼리 : ex) /filter?type=book&solt_by=date -> 필요한 옵션을 추가해 조회할때 사용

2. Query
    - 라우트 컴포넌트에게 props location 객체에 있는 search 값에서 읽어옴 (파싱)
    - qs 라이브러리 사용

### 3. 서브라우트 만들기

-   라우트 안에 들어있는 또다른 라우트

### 4. 라우터 부가기능

1. history객체 : object 형태로 ( action, block, createHref, go, goBack, goForward, listen, location, push, replace)
    - push & replace : 현재 방문한 페이지의 기록을 남기느냐 안남기느냐
    - block : 페이지 이탈방지
2. withRouter : 라우터 컴포넌트가 아닌 곳에서 match, location, history 사용
    - JSON.stringify : JSON 파일로 이루어진 객체를 문자열로 변환
    - (null, 2) : 위의 과정(JSON.stringify)에서 들여쓰기
3. Switch : 여러 Route 들을 감싸서 그 중 규칙이 일치하는 라우트 단 하나만을 렌더링시켜줌.
4. NavLink :현재 주소와 일치한다면 스타일 바꾸기
5. Prompt : 이탈방지
6. Redirect: 페이지 리디렉트 하는 컴포넌트
