# 모바일 청첩장 &#128140;



<br>


## &#127880; 모바일 청첩장 바로가기

[<img src="icon.png" width="40" height="40">](https://soyeon1221.github.io/wedding-invitation) 아이콘 클릭!

<br>


## &#127880; 프로젝트 소개

HTML, CSS, JavaScript를 사용하여 모바일 청첩장을 만들었습니다.

BGM, 디데이, 갤러리, 지도, 방명록, 카카오톡 공유하기 등 여러가지 이벤트를 사용하여 구현해보았습니다.

<br>


## &#127880; 기술 스택 및 라이브러리

- <img src="https://img.shields.io/badge/JavaScript-ECD53F?style=flat-square&logo=JavaScript&logoColor=white"/>
- <img src="https://img.shields.io/badge/HTML5-F46D01?style=flat-square&logo=HTML5&logoColor=white"/>
- <img src="https://img.shields.io/badge/CSS3-2490D7?style=flat-square&logo=CSS3&logoColor=white"/>

<br>


## &#127880; 개발 기간

- 24.02.20 - 24.03.08 (총 18일)

<br>


## &#127880; 주요 기능

### 1. BGM

- Header에 flex를 사용하여 상단 메뉴들의 너비를 똑같이 지정하였습니다.
- :hover를 이용해 숨어있던 하단 메뉴가 나타나도록 하였고, color와 font-weight를 변경하였습니다.
### 2. 상단

- 기존 SSG LANDERS 홈페이지에 없는 선수단 소개 부분을 추가하였습니다.
- 반복문을 사용하여 각 상자에 호버이벤트를 추가하고 호버된 상자의 너비를 넓히고 제외한 다른 상자의 너비를 작게 하여 움직이는 애니메이션을 적용했습니다.
### 3. 경기일정

- position과 ::before를 사용해서 배경이미지에만 opacity를 적용했습니다.
- 버튼을 클릭하면 각 상자의 translateX를 이동해서 슬라이드를 구현하였습니다.
- if else 문으로 함수를 작성해서 맨 마지막 상자에서 next 버튼을 눌렀을 때 다시 첫 번째 상자로 돌아가도록, 첫 번째 상자에서 prev 버튼을 눌렀을 때 맨 마지막 상자로 이동하도록 구현하였습니다.
### 4. 유튜브

- onclick 이벤트를 이용해서 해당 유튜브가 재생되도록 구현하였습니다.
### 5. 미디어

- 각 버튼을 클릭하면 해당 미디어로 이동합니다.