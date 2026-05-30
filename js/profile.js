const userProfile = {
  name: "김서준",
  country: "한국",
  school: "서울대학교",
  major: "컴퓨터공학과",
  grade: "3학년",

  interests: ["여행", "음악", "영화", "축구", "사진", "커피", "게임"],

  introduction:
    "안녕하세요! 저는 컴퓨터공학을 전공하고 있는 김서준입니다. 주말에는 카페에서 사진 찍는 걸 좋아하고, 새로운 음악을 발견하는 게 취미예요. 같은 관심사를 가진 친구들을 만나고 싶어요.",
};

document.querySelector(".userName").textContent = userProfile.name;

document.querySelector(".userCountry").textContent = userProfile.country;

document.querySelector(".userSchool").textContent = userProfile.school;

// 같은 클래스가 여러 개 있으므로 전부 변경
document
  .querySelectorAll(".userMajor")
  .forEach((el) => (el.textContent = userProfile.major));

document
  .querySelectorAll(".userGrade")
  .forEach((el) => (el.textContent = userProfile.grade));

document.querySelector(".introduce").textContent = userProfile.introduction;

const container = document.querySelector(".hobbyInterest");

userProfile.interests.forEach((interest) => {
  const tag = document.createElement("div");

  tag.classList.add("interestTag");
  tag.textContent = `#${interest}`;

  container.appendChild(tag);
});
