/* D-day */
var dday = new Date('2024-11-23T12:28:59').getTime();
        
setInterval(function() {
  var today = new Date().getTime();
  var gap = dday - today;
  var day = Math.ceil(gap / (1000 * 60 * 60 * 24));
  var hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.ceil((gap % (1000 * 60)) / 1000);

  // document.getElementById("count").innerHTML =  day + "일 " + hour + "시간 " + min + "분 " + sec ;
  document.getElementById("count-days").innerHTML =  day ;
  document.getElementById("count-hour").innerHTML =  hour ;
  document.getElementById("count-min").innerHTML =  min ;
  document.getElementById("count-sec").innerHTML =  sec ;
}, 1000);

var today = new Date() // 현재
var dday2 = new Date(2024,10,24) // D-day
var gap2 = dday2.getTime() - today.getTime()
var result = Math.ceil(gap2 / (1000 * 60 * 60 * 24))

document.getElementById('Dday').innerHTML =  result + '일'