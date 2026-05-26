const loginForm = document.querySelector(".loginForm"); // 로그인 입력 폼
const loginBtn = document.querySelector(".loginBtn"); // 로그인 버튼
const joinBtn = document.querySelector(".joinBtn"); // 회원가입 버튼
const passwordToggle = document.querySelector(".passwordToggle"); // 비밀번호 토글 (보기/숨기기)

const userEmail = document.querySelector(".userEmail"); // 사용자 이메일 입력란
const userPassword = document.querySelector(".userPassword"); // 사용자 비밀번호 입력란

// 비밀번호 토글 클릭 이벤트 (비밀번호 보여주기/숨기기)
passwordToggle.addEventListener("click", (event) => {
  event.preventDefault();
  userPassword.type = userPassword.type === "password" ? "text" : "password";
});

// 로그인 버튼 클릭 이벤트
loginBtn.addEventListener("click", (event) => {
  event.preventDefault();

  // 이메일 유효성 검사
  if (!userEmail || !checkEmail(userEmail.value)) {
    alert("이메일을 입력해주세요!");
    return;
  }

  //   비밀번호 유효성 검사
  if (!userPassword.value) {
    alert("비밀번호를 입력해주세요!");
    return;
  }
  if (!checkPassword(userPassword.value)) {
    alert("비밀번호는 영문·숫자 8자 이상으로 구성되어야 합니다.");
    return;
  }

  //   조건 모두 만족 시, 홈으로 이동
  location.href = "/html/home.html";
});

// 회원가입 버튼 클릭 이벤트
joinBtn.onclick = function () {
  // 회원가입 페이지로 이동
  location.href = "/html/join.html";
};

// 이메일 유효성 체크
function checkEmail(email) {
  // @를 포함하였는지
  return email.includes("@");
}

// 비밀번호 유효성 체크
function checkPassword(password) {
  // 1개 이상의 영문 숫자 && 영문·숫자 8자 이상
  const passRule = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}/;
  return passRule.test(password);
}
