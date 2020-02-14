# Javascript Basics

## 기본 문법

### 변수 선언

- 자바스크립트는 `var` 키워드로 변수를 선언한다
- 변수에는 많은 값을 담을 수 있다. 심지어 함수, 객체까지.

```javascript

var variable;                 // 선언만 하고 나중에 할당하기도 가능
variable = false

var number = 1;

var string = "string";

var array = [1,2,3];

var plus = function(a,b) {   // 함수 plus의 선언
    return a + b
}

plus(1,2)                   // 함수 plus의 호출. 이때 함수가 실행된다.

var object = {              // object.key1 === value
    key1: value1;,
    key2: value2,
}

var Jake = {
    koreanName: "건태",
    age: 25,
}
```


### 조건문, 반복문

- 값의 비교가 특이하다.
- 파이썬에서의 `==`는 자바스크립트의 `===`라고 생각하면 편하다.
- 자세한 사항은 `javascript truthy, falsy` 와 같은 키워드로 검색해보자.
- 반복문은 파이썬과 비슷한 방법도, c와 비슷한 방법도 존재

```javascript

var my = {
    name: "건태",
    age: 25,
}

/* 조건문 */

if (my.name === "건태") {         // 자바스크립트의 특징. ==와 ===가 다르다. 파이썬의 ==는 자바스크립트의 ===
    console.log("It's me")
}
else if (my.age < 26){
    console.log("still young")
}
else {
    console.log("neither young nor me")
}

/* 반복문 */

var foods = ["chciken", "pizza", "burger"]

for (var i = 0; i < 10; i++){   // i = 0 부터 i < 10 까지 i를 1씩 증가시키며 반복
    console.log(i)              // 0, 1, 2, ...
}

for (food of foods){            // foods 배열의 원소 하나씩 순회하며 반복
    console.log(food)           // chicken, pizza, burger
}

```

### 입출력 & 시간 구하기 &반복작업

- 입출력은 간단하다.
- 반복작업은 사실 굉장히 복잡하고 심오한 내용을 담고 있지만 간단히 쓰는 방법만 알고 넘어가자
- `setInterval` 함수는 인자로 함수와 주기(ms, 1000ms == 1s)를 입력받고, 해당 작업의 id를 반환한다.
- 인자로 넘긴 함수를 주기마다 반복한다.
- 작업의 id를 잘 저장해 뒀다가, `clearInterval` 함수의 인자로 넘기면 해당 반복작업을 중단한다.

```javascript

/* 사용자 입출력 */

var userInput = prompt('입력하세요');   // prompt 함수를 실행하면 입력창이 뜨고, 입력값을 리턴
console.log(userInput)               // 개발자도구 console 창에 출력
alert(userInput)                     // 경고창이 뜨면서 출력


/* 시간 구하기 */

var now = new Date()                // 현재시각의 값을 갖고있는 Date 객체 생성

var hour = now.getHour()            // 현재시각의 시간을 반환한다.
var minute = now.getMinutes()       // 현재시각의 분을 반환한다.

/* 반복 작업 */

var someFunction = function() {
    console.log("interval task")
}
var intervalid = setInterval(someFunction, time);   // 특정 시간을 주기로 함수를 반복해서 호출하도록 등록한다. 동시에 해당 반복작업의 id를 반환한다
clearInterval(id);                                  //  반복작업의 id를 인자로 넘기면 해당 작업을 중단한다.
```

## DOM API

- HTML을 객체로 구조화한 DOM을 다루기 위한 인터페이스이다.
- html 엘리먼트를 id나 class로 찾아낼 수 있고,
- 해당 엘리먼트 내부의 값을 읽거나 변경할 수 도 있으며,
- 엘리먼트에 발생하는 이벤트( 클릭이나, 마우스 올리기 등 )마다, 특정 함수를 호출하도록 지정할 수 도 있다.

```javascript

var thisWindow = window         // DOM 최상위 객체
// Window {parent: Window, opener: null, ...}

var thisDocument = document	// window.document, html 문서
// #document   -> DOM

var firstDiv = document.getElementById("firstDiv")  // div 엘리먼트
// <div id="firstDiv" ...>...</div>

var bigBoxes = document.getElementsByClassName("bigBox")
//HTMLCollection[...]

var firstDivContent = firstDiv.innerHTML    // 엘리먼트 내부 내용
// ...

firstDiv.addEventListener('click', function(){  // 엘리먼트에 어떤 이벤트가 발생하면, 지정한 함수를 실행하도록 등록함.
  console.log('firstDiv is clicked')
}
```