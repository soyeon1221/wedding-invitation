/* 스크롤 이벤트 */
var els = document.getElementsByClassName('el');

window.addEventListener('scroll', (e) => {
  // 뷰포트의 높이
  var viewPortHeight = window.innerHeight;

  // 여러 개의 엘리먼트에 스타일을 적용한다
  for (var i=0; i<els.length; i++) {
    var y = els[i].getBoundingClientRect().y;

    if (y < viewPortHeight - 250) {
      els[i].classList.add('opacity-100');
    }
  }
})