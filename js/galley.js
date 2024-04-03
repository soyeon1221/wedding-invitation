/* 갤러리 */
var overlay = document.getElementById('overlay');
var modal = document.getElementById('modal');
var imgs = document.getElementsByClassName('img');
var closeBtn = document.getElementById('close-btn');

// thumbnails 순회
for (var i=0; i<imgs.length; i++) {
  // 각각의 img에 이벤트 리스너를 추가한다
  imgs[i].addEventListener('click', function (e) {
    console.log(e.target.src);

    overlay.classList.remove('hidden');
    modal.src = e.target.src; // e.target : 클릭한 img
  })
}

// 모달 닫기
overlay.addEventListener('click', function (e) {
  console.log(e.target);

  // 닫기 버튼을 클릭했을 때
  if (e.target === closeBtn) {
    overlay.classList.add('hidden');
  }
})