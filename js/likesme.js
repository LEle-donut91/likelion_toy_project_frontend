const likedMeData = [
    {
        name: "지안",
        seed: "Jian",
        country: "🇰🇷 한국",
        match: "85%",
        matchLevel: "high", // match-high 클래스용
        majorHobby: "경영학과 3학년 · 사진·커피",
        hashtags: ["#여행", "#음악"],
        date: "026.02.14",
        status: "대기 중"
    },
    {
        name: "도윤",
        seed: "doyoun",
        country: "🇰🇷 한국",
        match: "72%",
        matchLevel: "mid",  // match-mid 클래스용
        majorHobby: "컴퓨터공학과 2학년 · 운동·영화",
        hashtags: ["#축구", "#넷플릭스"],
        date: "026.02.14",
        status: "대기 중"
    },
    {
        name: "수연",
        seed: "suyeon",
        country: "🇰🇷 한국",
        match: "68%",
        matchLevel: "mid",  // match-mid 클래스용
        majorHobby: "디자인학과 4학년 · 그림·카페",
        hashtags: ["#일러스트", "#카페투어"],
        date: "026.02.14",
        status: "대기 중"
    }
];

// 2. 화면에 관심 친구 리스트를 동적으로 그리는 함수
function renderLikedMeList() {
    const container = document.getElementById('card-list-container');
    if (!container) return;

    container.innerHTML = ''; // 기존 하드코딩 잔재 초기화

    likedMeData.forEach((friend) => {
        // 해시태그 span 배열 생성
        const hashtagHTML = friend.hashtags
            .map(tag => `<span class="hashtag">${tag}</span>`)
            .join('');

        // 카드 생성
        const cardHTML = `
            <div class="friend-card">
                <div class="card-top">
                    <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=${friend.seed}" alt="${friend.name}" class="profile-img">
                    <div class="profile-info">
                        <div class="info-row-1">
                            <span class="name">${friend.name}</span>
                            <span class="tag-country">${friend.country}</span>
                            <span class="tag-match match-${friend.matchLevel}">일치 ${friend.match}</span>
                        </div>
                        <div class="info-row-2">${friend.majorHobby}</div>
                        <div class="info-row-3">
                            ${hashtagHTML}
                        </div>
                    </div>
                </div>
                <div class="card-divider"></div>
                <div class="card-bottom">
                    <div class="date-info">
                        <span class="material-symbols-outlined icon-clock">schedule</span>
                        <span>${friend.date}</span>
                    </div>
                    <span class="status-badge">${friend.status}</span>
                    <div class="register">
                        <button onclick="addFriend('${friend.name}')">친구추가</button>
                    </div>
                </div>
            </div>
        `;

        container.innerHTML += cardHTML;
    });
}

// 3. 친구 추가 버튼 클릭 이벤트
function addFriend(name) {
    alert(`${name}님에게 친구 요청을 수락(또는 추가)했습니다!`);
}

// 4. 페이지 로드 시 렌더링 실행
window.onload = function() {
    renderLikedMeList();
};