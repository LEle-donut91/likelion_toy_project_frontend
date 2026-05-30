const joinForm = document.querySelector(".joinForm");
const arrowBtn = document.querySelector(".arrowBtnBg");
const joinBtn = document.querySelector(".joinBtnBg");
const loginBtn = document.querySelector(".loginBtn");

const userEmail = document.querySelector(".emailInput");
const userPassword = document.querySelector(".passwordInput");
const userCountry = document.querySelector(".selectCountry");
const userMajor = document.querySelector(".majorInput");
const userGrade = document.querySelector(".grade select");

const userIntroduce = document.querySelector(".introduceInput");

arrowBtn.addEventListener("click", (event) => {
  event.preventDefault();
  location.href = "/html/login.html";
});

joinBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const topics = [];

  document.querySelectorAll(".chipInput:checked").forEach((chip) => {
    topics.push(chip.nextElementSibling.textContent.trim());
  });

  // 이메일 유효성 검사
  if (!userEmail || !checkEmail(userEmail.value)) {
    alert("이메일을 입력해주세요!");
    return;
  }

  // 비밀번호 유효성 검사
  if (!userPassword.value) {
    alert("비밀번호를 입력해주세요!");
    return;
  }
  if (!checkPassword(userPassword.value)) {
    alert("비밀번호는 영문·숫자 8자 이상으로 구성되어야 합니다.");
    return;
  }

  if (!userMajor.value) {
    alert("전공을 입력해주세요!");
    return;
  }

  if (topics.length === 0) {
    alert("관심 주제를 선택해주세요!");
    return;
  }

  if (!userIntroduce.value) {
    alert("자기소개를 입력해주세요!");
    return;
  }

  const userData = {
    email: userEmail.value,
    password: userPassword.value,
    country: userCountry.value,
    major: userMajor.value,
    grade: userGrade.value,
    topics: topics,
    introduce: userIntroduce.value,
  };

  location.href = "/html/home.html";
});

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();
  location.href = "/html/login.html";
});

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
