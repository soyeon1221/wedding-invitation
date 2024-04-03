# &#128140; 모바일 청첩장 &#128140;

결혼식 초대를 위한 모바일 청첩장 제작

<br>


## &#127872; 모바일 청첩장 바로가기

[<img src="icon.png" width="40" height="40">](https://soyeon1221.github.io/wedding-invitation) 아이콘 클릭!

<br>


## &#127872; 프로젝트 소개

HTML, CSS, JavaScript를 사용하여 모바일 청첩장을 만들었습니다.

BGM, 디데이, 갤러리, 지도, 방명록, 카카오톡 공유하기 기능을 여러가지 이벤트를 사용하여 구현해보았습니다.

<br>


## &#127872; 기술 스택 및 라이브러리

- <img src="https://img.shields.io/badge/JavaScript-ECD53F?style=flat-square&logo=JavaScript&logoColor=white"/>
- <img src="https://img.shields.io/badge/HTML5-F46D01?style=flat-square&logo=HTML5&logoColor=white"/>
- <img src="https://img.shields.io/badge/CSS3-2490D7?style=flat-square&logo=CSS3&logoColor=white"/>

<br>


## &#127872; 개발 기간

- 24.02.20 - 24.03.08 (총 18일)

<br>


## &#127872; 주요 기능

### 1. 상단

- 클릭이벤트를 사용해서 재생/음소거 버튼으로 오디오 재생을 컨트롤 할 수 있게 구현하였습니다.
- positon과 opacity를 사용하여 메인이미지 위에 꽃잎 효과를 넣었습니다.
<br>[참고]<br>
video 태그 모바일 이슈<br>
  모바일에서 비디오가 전체화면으로 나타나지 않게 3가지 요소를 추가해야한다.<br>
  1. autoplay<br>
  2. muted<br>
  3. playsinline<br>
  pc브라우저나 안드로이드는 1,2번만 추가해도 가능하지만 아이폰은 3번을 꼭 추가해야한다.
  <video src="" muted loop autoplay playsinline></video>

### 2. 연락하기

- 연락처가 담긴 상자의 display를 none으로 설정하고 연락하기 버튼을 클릭했을때 block으로 바뀌도록 구현하였습니다.
- target을 지정해서 연락하기 버튼이 아닌 다른 영역이 클릭된 경우에는 해당 상자를 숨기도록 구현하였습니다.
- a 태그의 href속성을 사용해서 전화걸기, 문자보내기 기능을 구현하였습니다.
<br>[참고]<br>
- 아이폰의 경우 a태그나 onclick 없이도 전화번호 형식의 문자는 자동으로 전화로 링크가 가능하다. 이를 방지하기 위해 메타태그가 걸려있을 수 있다. 아래 태그를 추가하면 자동링크는 되지 않는다.
  <meta name="format-detection" content="telephone=no">

### 3. D-day

- newDate()를 통해 현재 날짜와 시각을 받고, 이를 통해 디데이 계산을 하였습니다.
- setInterval()를 통해 해당 함수를 1초마다 반복적으로 함수를 호출시켜 화면을 업데이트하였습니다.


### 4. 갤러리

- 이미지가 여러개라서 반복문을 사용해서 각 이미지의 이벤트리스너를 연결했습니다.
- 클릭한 이미지의 src를 #modal에 전달해서 해당 이미지가 크게 보이도록 구현하였습니다.
- 이미지가 크게 보였을때 닫기버튼이 나타나고 버튼을 클릭하면 이미지가 사라지도록 구현하였습니다.


### 5. 지도

- kakao map을 삽입하여 해당 주소의 지도가 보여지도록 구현하였습니다.
- 각 버튼을 클릭하면 해당 미디어로 이동합니다.

### 6. Information

- input의 radio속성을 사용해서 버튼을 생성하고, css에서 checked 가상 클래스를 사용해서 선택된 체크박스의 display를 block으로 변경하였습니다.

### 7. 마음 전하실 곳

- 계좌번호 상자를 클릭하면 밑으로 리스트가 나타나도록 구현하였습니다.
- Clipboard API를 사용하여 복사버튼을 누르면 해당 계좌번호의 숫자가 복사되고, alret으로 안내창을 구현하였습니다.
<br>[아쉬운점]<br>
- 클릭했을때 arrow icon을 180도 회전하고 싶었으나 아직 성공하지 못했다.

### 8. 방명록

- 이름, 비밀번호, 메세지를 작성하고 저장하면 하단에 입력한 내용이 나타나도록 구현하였습니다.
- new Date()를 사용하여 작성한 날짜도 함께 기입되도록 구현하였습니다.
- 작성된 방명록에서 X버튼을 클릭하고 사용자가 입력한 비밀번호를 적으면 해당 방명록은 삭제되도록 구현하였습니다.
<br>[참고]<br>
- 모바일에서 이름을 입력하면 label이 움직이는 현상이 있어서 css에서 이름 입력란에 값이 입력되었을 때 레이블이 움직이지 않도록 설정했다.<br>
  .guest-name input:focus + label, <br>
  .guest-name input:not(:placeholder-shown) + label {<br>
    transform: translateY(-20px);<br>
  }
<br>[아쉬운점]<br>
- 방명록을 남기고 누구나 볼 수 있도록 하려면 일반적으로 데이터베이스와 백엔드 서버를 사용하여 사용자가 입력한 정보를 저장하고, 저장된 정보를 프론트엔드에서 불러와서 보여주는 방법을 사용한다. 그래서 다른 사람이 남긴 방명록은 볼수가없다.<br>
- 다음번에 리액트와 데이터베이스를 사용해서 시도해보고싶다.

### 9. 하단

- 카카오톡 공유하기
- 링크주소 복사하기


### 10. 반응형

- 


