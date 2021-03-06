# 박상준 201740212

## **Movie_App_2020**

### React Js Fundamentals Course 2020

<br>

# **11월 20일**

**gh-pages 설치**

**gh-pages**는 나의 웹사이트를 github의 **github page 도메인**에 나타나게 해준다.

### **홈페이지 양식**

https://{your github username}.github.io/{the name of your project in github}

**(소문자 이어야하고, 띄어쓰기 x)**

**npm run build** : **build 폴더**를 얻는 방법

**npm run deploy** : 업데이트

**deploy** : build 폴더를 **upload** 한다.

+**css 완성**

<br>

# **11월 13일**

**slice(0, 값)** 을 이용해 배열 **자르기** (원하는 부분까지 출력 하기 위해)

ex)

```
summary.slice(0, 180)
```

**react-router-dom** : 네비게이션을 만들어주는 패키지

**라우터** : **url**을 가져다가 확인하고 **컴포넌트**를 가져온다.

ex)

```
//exact={ture} 를 해야 path의 경로와 정확히 일치하는 component만 보여준다. 하지않으면 전부 보여준다.
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
```

**router 밖에서 Link를 쓸 수 없다.**

**리액트 라우터 exact**

```
//exact={ture} 를 해야 path의 경로와 정확히 일치하는 component만 보여준다. 하지않으면 전부 보여준다.

<Route path="/" exact={true} component={Home} />
```

<br>

# **11월 6일**

**state**를 이용하기위해서 **class component**를 사용한다.

**object**를 풀어줄 때 **map함수**를 사용하고, 또, **jsx**에서는 **props**를 통해서 값을 전달합니다. **key**는 표현되지 않지만 **필수props**이다.

css 파일을 **import** 해 스타일 입히기(Movie.css, App.css)

<br>

# **10월 30일**

**PropTypes**은 React에서 **타입을 체크**하기 위해서 사용되는 **라이브러리**

**ComponentDidMount()함수** : render()함수가 화면에 다 그린 이후 호출되는 함수

<br>

# 10월 23일

**중간고사**

<br>

# 10월 16일

1. 버튼을 눌렀을 때 1증가,1감소하는 **숫자 증감** 기능 구현

2. 버튼을 눌렀을 때 작동하는 **onClick속성**

3. 영화 앱 만들기

4. **axios**는 node.js와 브라우저를 위한 http통신 **javascript 라이브러리**

<br>

# 10월 7일

1. 이때까지 학습했던 음식 앱 마무리

2. **state값을 변경할 때에는** **setState()함수**(상태 관리 함수)를 **반드시** 사용해야 한다.

<br>

# 09월 25일

1. **map함수** 활용

2. 이미지 **import** 하는법 학습

<br>

# 09월 18일

1. 컴포넌트가 무엇인지 알아보고 **JSX**를 학습

2. JSX는 단지 HTML과 자바스크립트를 조합한 문법

3. JSX를 이용해서 컴포넌트를 작성

4. 컴포넌트의 이름은 **대문자**로 시작

5. 컴포넌트에 데이터를 전달할 때는 **props**를 사용

6. 점 연산자를 대신해서 ES6의 구조 분해 할당을 사용가능

7. 리액트는 **다수**의 컴포넌트로 이루어지나, 최종적으로는 **하나**의 컴포넌트만 사용한다.

<br>

# 09월 11일

1. Dothome에 indexfile 수정하기

2. readme.md 수정 후 Github에 push하기
