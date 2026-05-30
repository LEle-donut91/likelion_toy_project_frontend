const friendData = [
    {
        name: "지안",
        seed: "Jian",
        country: "🇰🇷 한국",
        match: "일치 85%",
        majorHobby: "경영학과 3학년 · 사진·커피",
        hashtags: ["#여행", "#음악", "#사진"]
    },
    {
        name: "도윤",
        seed: "doyoun",
        country: "🇰🇷 한국",
        match: "일치 72%",
        majorHobby: "컴퓨터공학과 2학년 · 운동·영화",
        hashtags: ["#축구", "#넷플릭스", "#피규어"]
    },
    {
        name: "나경",
        seed: "mingi", 
        country: "🇰🇷 한국",
        match: "일치 68%",
        majorHobby: "공예학과 3학년 · 그림·카페",
        hashtags: ["#도자기", "#빵투어", "#고양이"]
    }
];

function renderFriends() {
    const container = document.getElementById('friend-list-container');
    if (!container) return;
    
    container.innerHTML = ''; 

    friendData.forEach((friend) => {
        const hashtagHTML = friend.hashtags
            .map(tag => `<span class="hashtag">${tag}</span>`)
            .join('');

        const cardHTML = `
            <div class="friend-card">
                <div class="card-profile">
                    <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=${friend.seed}" alt="프로필" class="profile-img">
                    <div class="profile-info">
                        <div class="info-header">
                            <span class="name">${friend.name}</span>
                            <span class="tag-country">${friend.country}</span>
                            <span class="tag-match">${friend.match}</span>
                        </div>
                        <div class="major-hobby">${friend.majorHobby}</div>
                        <div class="hashtag-group">
                            ${hashtagHTML}
                        </div>
                    </div>
                </div>
                
                <div class="card-actions">
                    <button class="btn btn-next" onclick="onNextClick('${friend.name}')">
                        <img src="https://api.iconify.design/fa6-solid:xmark.svg?color=%23555555" alt=""> 다음
                    </button>
                    <button class="btn btn-like" onclick="onLikeClick('${friend.name}')">
                        <img src="https://api.iconify.design/fa6-regular:heart.svg?color=%23ffffff" alt=""> 관심
                    </button>
                </div>
            </div>
        `;
        
        container.innerHTML += cardHTML;
    });
}

function onNextClick(name) {
    console.log(`${name}님 패스 (다음 버튼 클릭)`);
}

function onLikeClick(name) {
    alert(`${name}님에게 관심을 표시했습니다!`);
}

window.onload = renderFriends;

function initNavigation() {
    const homeNav = document.querySelector(".homeNav");
    const friendNav = document.querySelector(".friendNav");
    const profileNav = document.querySelector(".profileNav");

    if (homeNav) {
        homeNav.addEventListener("click", (event) => {
            event.preventDefault();
            location.href = "/html/home.html"; 
        });
    }

    if (friendNav) {
        friendNav.addEventListener("click", (event) => {
            event.preventDefault();
            location.href = "/html/friend.html";
        });
    }

    if (profileNav) {
        profileNav.addEventListener("click", (event) => {
            event.preventDefault();
            location.href = "/html/profile.html";
        });
    }
}

window.onload = function() {
    renderFriends();   
    initNavigation();  
};