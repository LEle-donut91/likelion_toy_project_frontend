const recmdBtn = document.querySelector(".recmdBtn"); // [친구 추천 · 매칭] 버튼
const friendBtn = document.querySelector(".friendBtn"); // [채팅 · 번역 지원] 버튼
const homeNav = document.querySelector(".homeNav"); // 바텀 내비게이션 바 - [홈] 버튼
const friendNav = document.querySelector(".friendNav"); // 바텀 내비게이션 바 - [채팅] 버튼

twemoji.parse(document.body); // 트위터 이모지 적용 (6개 국가별 국기 이모지를 렌더링하기 위해 필요)

// [친구 추천 · 매칭] 버튼 클릭 시, recommend.html(친구 추천 페이지)로 이동
recmdBtn.addEventListener("click", (event) => {
    event.preventDefault();
    location.href="/html/recommend.html"
})

// [채팅 · 번역 지원] 버튼 클릭 시, friend.html(관심 친구 목록 페이지)로 이동
friendBtn.addEventListener("click", (event) => {
    event.preventDefault();
    location.href="/html/friend.html"
})

// 바텀 내비게이션 바 - [홈] 버튼 클릭 시, home.html(홈)로 이동
homeNav.addEventListener("click", (event) => {
    event.preventDefault();
    location.href="/html/home.html"
})

// 바텀 내비게이션 바 - [채팅] 버튼 클릭 시, friend.html(관심 친구 목록 페이지)로 이동
friendNav.addEventListener("click", (event) => {
    event.preventDefault();
    location.href="/html/friend.html"
})

