/* 연락하기 클릭이벤트 */
document.addEventListener('click', function(event) {
var callMain = document.getElementById('call-main');
var callList = document.getElementById('call-list');

// 클릭된 요소가 call-main인 경우에만 이벤트 처리
if (event.target === callMain) {
  touchCall(callMain, callList);
} else {
  // call-main 이외의 요소가 클릭된 경우에는 call-list를 숨깁니다.
  callList.style.display = 'none';
}
});

function touchCall(call, callbox) {
  if (callbox.style.display === 'none') {
    call.className = 'opened';
    callbox.style.display = 'block';
  } else {
    call.className = 'closed';
    callbox.style.display = 'none';
  }
}