/* 계좌번호 복사 및 클릭 이벤트 */

/* 계좌번호 복사 */
const myText = document.getElementById("mytext")
const myText2 = document.getElementById("mytext2")
const myText3 = document.getElementById("mytext3")
const myText4 = document.getElementById("mytext4")

document.getElementById("mybtn").onclick = () => {
  window.navigator.clipboard.writeText(myText.textContent).then(() => {
    alert('계좌번호(110123456789)가 복사되었습니다. \n필요한 곳에 붙여넣기 하세요.')
  })
}
document.getElementById("mybtn2").onclick = () => {
  window.navigator.clipboard.writeText(myText.textContent).then(() => {
    alert('계좌번호(110123456789)가 복사되었습니다. \n필요한 곳에 붙여넣기 하세요.')
  })
}
document.getElementById("mybtn3").onclick = () => {
  window.navigator.clipboard.writeText(myText.textContent).then(() => {
    alert('계좌번호(110123456789)가 복사되었습니다. \n필요한 곳에 붙여넣기 하세요.')
  })
}
document.getElementById("mybtn4").onclick = () => {
  window.navigator.clipboard.writeText(myText.textContent).then(() => {
    alert('계좌번호(110123456789)가 복사되었습니다. \n필요한 곳에 붙여넣기 하세요.')
  })
}

/* 계좌번호 클릭이벤트 */
var elements = document.querySelectorAll("[id^='acitem-title'], [id^='acitem-title2']");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function() {
    var textElementId = this.getAttribute("id").replace("title", "text");
    var textElement = document.getElementById(textElementId);
    if (textElement) {
      textElement.style.display = textElement.style.display === "none" ? "block" : "none";
    }
  });
}