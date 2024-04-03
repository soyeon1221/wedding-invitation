/* 방명록 */
// HTML 요소를 JavaScript로 참조
const guestForm = document.getElementById('guestForm');
const guestbookDiv = document.getElementById('guestbook');

// 로컬 스토리지에서 저장된 방명록 불러오기
/* (1) 페이지가 로드될 때 실행할 함수 */
window.onload = () => {
  // 페이지가 로드될 때 저장된 방명록을 불러와서 화면에 표시한다
  refreshGuestbook();
};

/* (2) 방명록을 전송하는 form 요소에 이벤트 등록 */
guestForm.addEventListener('submit', event => {
  event.preventDefault(); // 기본 동작인 페이지 새로고침을 방지한다
  const name = document.getElementById('name').value; // 이름 입력값을 가져온다
  const message = document.getElementById('message').value; // 메시지 입력값을 가져온다
  const password = document.getElementById('password').value; // 비밀번호 입력값을 가져온다
  // 방명록을 추가하는 함수를 호출한다
  addGuest({ name, message, password });
  // 폼을 초기화한다
  guestForm.reset();
});

/* (3) 방명록을 화면에 추가하는 함수 */
function addGuest(guest) {
  // 방명록 정보를 가져온다
  const { name, message, password } = guest;
  // 새로운 div 엘리먼트를 생성한다
  const newGuestEntry = document.createElement('div');
  // 방명록 내용을 설정한다
  newGuestEntry.classList.add('guest-entry');

  // 이름을 담을 div 요소를 생성한다
  const nameElement = document.createElement('div');
  nameElement.textContent = name;
  nameElement.classList.add('guest-entry-name');
  // 이름 div 요소를 방명록 항목에 추가한다
  newGuestEntry.appendChild(nameElement);

  // 삭제 버튼을 생성한다
  const deleteBtn = document.createElement('span');
  deleteBtn.textContent = '✖';
  deleteBtn.className = 'delete-btn';
  // 삭제 버튼을 클릭했을 때 deleteGuest 함수를 호출한다
  deleteBtn.onclick = () => deleteGuest(guest);
  // 삭제 버튼을 방명록 항목에 추가한다
  newGuestEntry.appendChild(deleteBtn);

  // 메시지를 담을 div 요소를 생성한다
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  messageElement.classList.add('guest-entry-message');
  // 메시지 div 요소를 방명록 항목에 추가한다
  newGuestEntry.appendChild(messageElement);

  // 현재 날짜를 가져온다
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString();
  // 날짜를 표시할 div 요소를 생성한다
  const dateDiv = document.createElement('div');
  dateDiv.textContent = dateString;
  dateDiv.classList.add('guest-entry-date');
  // 날씨 div 요소를 방명록 항목에 추가한다
  newGuestEntry.appendChild(dateDiv);

  // 생성한 방명록 항목을 화면에 추가한다
  guestbookDiv.prepend(newGuestEntry);
  // 방명록 항목과 날짜를 로컬 스토리지에 저장한다
  saveGuests({ name, message, password, date: dateString });
}

// 로컬 스토리지에 방명록 저장
/* (4) 방명록을 로컬 스토리지에 저장하는 함수 */
function saveGuests(guest) {
  // 기존의 저장된 방명록 배열을 불러온다 없으면 빈 배열로 초기화됩니다.
  const savedGuests = JSON.parse(localStorage.getItem('guests')) || [];
  // 새로운 방명록을 배열에 추가한다
  savedGuests.push(guest);
  // 업데이트된 배열을 다시 로컬 스토리지에 저장한다
  localStorage.setItem('guests', JSON.stringify(savedGuests));
}

/* (5) 방명록을 삭제하는 함수 */
function deleteGuest(guestToDelete) {
  // 삭제 대상인 방명록을 확인한다
  const savedGuests = JSON.parse(localStorage.getItem('guests')) || [];
  // 비밀번호를 입력받습니다.
  const password = prompt('비밀번호를 입력하세요:');
  // 입력된 비밀번호가 방명록의 비밀번호와 일치하는지 확인한다
  // 비밀번호가 일치하는 경우에만 방명록을 삭제한다
  if (password === guestToDelete.password) {
    // 삭제된 방명록을 제외한 새로운 배열을 생성한다
    const filteredGuests = savedGuests.filter(guest => guest.name !== guestToDelete.name || guest.message !== guestToDelete.message);
    // 업데이트된 배열을 다시 로컬 스토리지에 저장한다
    localStorage.setItem('guests', JSON.stringify(filteredGuests));
    // 화면을 갱신하여 삭제된 방명록을 반영한다
    refreshGuestbook();
  } else {
    alert('비밀번호가 일치하지 않습니다.');
  }
}

/* (6) 저장된 방명록을 화면에 갱신하는 함수 */
function refreshGuestbook() {
  // 기존의 방명록을 모두 지우고,
  guestbookDiv.innerHTML = '';
  // 로컬 스토리지에서 저장된 방명록을 불러온다
  const savedGuests = JSON.parse(localStorage.getItem('guests')) || [];
  // 각 방명록을 화면에 표시한다
  savedGuests.forEach(guest => {
    // 새로운 div 엘리먼트를 생성한다
    const newGuestEntry = document.createElement('div');
    // 방명록 내용을 설정한다
    newGuestEntry.classList.add('guest-entry');

    // 이름을 담을 div 요소를 생성한다
    const nameElement = document.createElement('div');
    nameElement.textContent = guest.name;
    nameElement.classList.add('guest-entry-name');
    // 이름 div 요소를 방명록 항목에 추가합니다
    newGuestEntry.appendChild(nameElement);

    // 삭제 버튼을 담을 div 요소를 생성한다
    // 삭제 버튼을 생성한다
    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = '✖';
    deleteBtn.className = 'delete-btn';
    // 삭제 버튼을 클릭했을 때 deleteGuest 함수를 호출한다
    deleteBtn.onclick = () => deleteGuest(guest);
    // 삭제 버튼을 방명록 항목에 추가한다
    newGuestEntry.appendChild(deleteBtn);
    
    // 메시지를 담을 div 요소를 생성한다
    const messageElement = document.createElement('div');
    messageElement.textContent = guest.message;
    messageElement.classList.add('guest-entry-message');
    // 메시지 div 요소를 방명록 항목에 추가한다
    newGuestEntry.appendChild(messageElement);
            
    // 날짜를 표시할 div 요소를 생성한다
    const dateDiv = document.createElement('div');
    // 저장된 방명록의 날짜 정보를 가져와서 표시한다
    dateDiv.textContent = guest.date; 
    dateDiv.classList.add('guest-entry-date');
    // 날짜 요소를 방명록 항목에 추가한다
    newGuestEntry.appendChild(dateDiv); 

    // 생성한 엘리먼트를 방명록에 추가한다
    guestbookDiv.prepend(newGuestEntry);
  });
}