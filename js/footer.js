/* 카카오톡 공유하기 및 링크주소 복사하기 */

/* 카카오톡 공유하기 */
Kakao.Share.createDefaultButton({
  container: '#kakaotalk-sharing-btn',
  objectType: 'feed',
  content: {
    title: '백현우 ♥ 홍해인 결혼합니다',
    description: '2024년 11월 24일 일요일 오후 1시 30분 \n그랜드워커힐 서울 애스톤하우스',
    imageUrl:
      'https://pbs.twimg.com/media/GJQAO5abIAApPwA?format=jpg&name=large',
    link: {
      // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
      mobileWebUrl: 'https://soyeon1221.github.io/wedding-invitation/',
      webUrl: 'https://soyeon1221.github.io/wedding-invitation/',
    },
  },
  buttons: [
    {
      title: '자세히 보기',
      link: {
        mobileWebUrl: 'https://soyeon1221.github.io/wedding-invitation/',
        webUrl: 'https://soyeon1221.github.io/wedding-invitation/',
      },
    },
  ],
  // 카카오톡 미설치 시 카카오톡 설치 경로이동
  installTalk: true,
});

/* 링크주소 복사하기 */
// 현재 url 변수로 가져오기
const nowUrl = window.location.href;

function copyUrl() {
  // nowUrl 변수에 담긴 주소를 클립보드에 쓰기
  navigator.clipboard.writeText(nowUrl).then(res => {
    alert("링크가 복사되었습니다. \n필요한 곳에 붙여넣기 하세요.")
  })
}