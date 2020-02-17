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
