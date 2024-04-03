/* D-day */

/* 카운트다운 */
var dday = new Date('2024-11-24T12:28:59').getTime();
        
setInterval(function() {
  var today = new Date().getTime();
  var gap = dday - today;
  // 남은 일수 카운트
  var day = Math.ceil(gap / (1000 * 60 * 60 * 24)); 
  // 남은 시간 계산하기
  var hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.ceil((gap % (1000 * 60)) / 1000);

  // document.getElementById("count").innerHTML =  day + "일 " + hour + "시간 " + min + "분 " + sec ;
  document.getElementById("count-days").innerHTML =  day ;
  document.getElementById("count-hour").innerHTML =  hour ;
  document.getElementById("count-min").innerHTML =  min ;
  document.getElementById("count-sec").innerHTML =  sec ;
}, 1000);

/* 현우 ♥ 해인 결혼식이 _일 남았습니다*/
var today = new Date() // 현재
var dday2 = new Date(2024,10,24) // D-day
var gap2 = dday2.getTime() - today.getTime()
var result = Math.ceil(gap2 / (1000 * 60 * 60 * 24))

document.getElementById('Dday').innerHTML =  result + '일'