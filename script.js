// 画面のHTML要素がすべて読み込まれてから処理を実行する
document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. お出かけプランのデータベース（データ構造）
    // ==========================================
    const plansData = [
        // 0円プランの例（plansData配列の中に追加してください）
        {
        id: "plan-free-01",
        title: "のんびりお散歩や公園＆写真撮影",
        mood: ["chill", "photo", "active"],
        budget: "free", // ★0円
        time: "short",
        area: "nature",
        who: ["solo", "friends", "date"],
        cost: "0円",
        duration: "約 1~2時間",
        steps: [
            "行ったことのない場所や公園をのんびり歩く",
            "季節の花や風景をスマホで撮影",
            "ベンチに座って音楽を聴く"
        ]
        },
        {
        id: "plan-free-02",
        title: "図書館で本を読む",
        mood: ["chill"],
        budget: "free", // ★0円
        time: "short",
        area: "indoor",
        who: ["solo"],
        cost: "0円",
        duration: "約 30分（近場）",
        steps: [
            "近くの市立図書館や大学図書館へ行く",
            "普段読まないジャンルの本や雑誌を何冊か手にとる",
            "静かな閲覧スペースでゆったり読書タイム"
          ]
        },
        {
            id: "plan-free-03",
            title: "話題のエリアでウインドウショッピング＆街ブラ",
            mood: ["active", "photo", "delicious"],
            budget: "free",
            time: "medium",
            area: "city",
            who: ["friends", "date", "solo"],
            cost: "0円",
            duration: "約 1時間",
            steps: [
                "気になるおしゃれな雑貨屋や服屋さんが集まるエリアへ",
                "買わずに見るだけでワクワクする店内を巡る",
                "可愛いディスプレイや街並みをバックに記念撮影"
            ]
        },
        {
            id: "plan-free-04",
            title: "展望台・高層ビルからの無料絶景めぐり",
            mood: ["chill", "photo"],
            budget: "free",
            time: "medium",
            area: "city",
            who: ["solo", "date", "friends"],
            cost: "0円",
            duration: "約 1時間",
            steps: [
                "無料公開されている市役所や高層ビルの展望フロアを検索",
                "エレベーターで上階へ移動し街を一望する",
                "夕方や夜なら綺麗な夜景をのんびり鑑賞"
            ]
        },
        {
            id: "plan-free-05",
            title: "自然豊かな川辺や海岸沿いをサイクリング＆お散歩",
            mood: ["active", "chill"],
            budget: "free",
            time: "long",
            area: "nature",
            who: ["solo", "friends", "date"],
            cost: "0円",
            duration: "約 1時間30分",
            steps: [
                "お気に入りのプレイリストを聴きながら散歩や自転車で移動",
                "川辺や海沿いの広々とした場所でリフレッシュ",
                "芝生や堤防に座って空を眺めながらゆったり雑談"
            ]
        },
        {
            id: "plan-free-06",
            title: "入場無料の美術館・ギャラリー・博物館巡り",
            mood: ["chill", "photo"],
            budget: "free",
            time: "medium",
            area: "indoor",
            who: ["solo", "date"],
            cost: "0円",
            duration: "約 1時間",
            steps: [
                "入場無料のギャラリーや企業のPR館、文化施設をリサーチ",
                "静かな館内でアートや歴史の展示を鑑賞",
                "パンフレットを持ち帰って旅行ノートに貼る"
            ]
        },
        {
            id: "plan-free-07",
            title: "お絵描き＆写真撮影",
            mood: ["chill", "photo", ],
            budget: "free", // ★0円
            time: "long",
            area: "nature",
            who: [ "friends", "date"],
            cost: "0円",
            duration: "約 1~2時間",
            steps: [
                 "公園などに行って描く場所、絵を探す",
                 "花や風景、似顔絵など1つ決めて描き、交換する",
                 "絵と一緒にスマホで撮影",
            ]
        }    
        ,{
            
            id: "plan-2000-01",
            title: "レトロカフェでドリンク＆スイーツ",
            mood: ["chill", "photo", "delicious"],
            budget: "low",
            time: "short",
            area: "indoor",
            who: ["solo", "friends", "date"],
            cost: "約 1,000円〜2,000円",
            duration: "約 30分（近場）",
            steps: [
                "落ち着いたレトロ喫茶を検索して向かう",
                "季節のケーキと温かいドリンクを注文",
                "お気に入りの本やスマホでゆったり過ごす"
            ]
        },
        {
            id: "plan-2000-02",
            title: "大きな公園でおしゃれピクニック",
            mood: ["chill", "active", "photo"],
            budget: "low",
            time: "medium",
            area: "nature",
            who: ["friends", "date", "solo"],
            cost: "約 1,500円",
            duration: "約 45分",
            steps: [
                "近くのパン屋さんで好きなパンを購入",
                "レジャーシートを持って大きな公園へ",
                "芝生の上で写真を撮りながらのんびりランチ"
            ]
        },
        {
            id: "plan-4000-01",
            title: "美術館＆アートギャラリー巡り",
            mood: ["chill", "photo"],
            budget: "medium",
            time: "medium",
            area: "indoor",
            who: ["solo", "date"],
            cost: "約 2,000円〜3,500円",
            duration: "約 1時間",
            steps: [
                "話題の企画展やギャラリーをチェック",
                "静かな空間で作品をじっくり鑑賞",
                "ミュージアムショップで可愛いポストカードをゲット"
            ]
        },
        {
            id: "plan-4000-02",
            title: "大型ショッピングモールで食べ歩き＆買い出し",
            mood: ["active", "delicious"],
            budget: "medium",
            time: "short",
            area: "city",
            who: ["friends", "date", "solo"],
            cost: "約 3,000円〜4,000円",
            duration: "約 30分",
            steps: [
                "気になるショップをウィンドウショッピング",
                "フードコートやカフェで限定スイーツを堪能",
                "雑貨屋さんでお部屋のインテリアを探す"
            ]
        },
        {
            id: "plan-4000-01",
            title: "日帰り温泉・スパリゾートで極上リフレッシュ",
            mood: ["chill", "delicious"],
            budget: "high",
            time: "long",
            area: "indoor",
            who: ["solo", "friends", "date"],
            cost: "約 6,000円〜9,000円",
            duration: "約 1時間30分",
            steps: [
                "温泉施設や岩盤浴があるスパへ移動",
                "お風呂とサウナで日頃の疲労をスッキリ解消",
                "館内着のまま美味しい和食ランチを堪能"
            ]
        },
        {
            id: "plan-4000-02",
            title: "海辺のドライブ＆絶景カフェめぐり",
            mood: ["active", "photo", "chill"],
            budget: "high",
            time: "long",
            area: "nature",
            who: ["friends", "date"],
            cost: "約 5,000円〜8,000円",
            duration: "約 1時間30分〜2時間",
            steps: [
                "好きなプレイリストをかけて出発",
                "海が見えるテラス席のあるカフェへ移動",
                "波の音を聞きながら夕日を眺める"
            ]
        }
    ];

    let currentSelectedPlan = null;

    // ==========================================
    // 2. DOM要素の取得
    // ==========================================
    const homeScreen = document.getElementById("home-screen");
    const quizScreen = document.getElementById("quiz-screen");
    const resultScreen = document.getElementById("result-screen");
    const favoritesScreen = document.getElementById("favorites-screen");

    const startBtn = document.getElementById("start-btn");
    const viewFavoritesBtn = document.getElementById("view-favorites-btn");
    const quizForm = document.getElementById("quiz-form");
    const backToHomeFromQuiz = document.getElementById("back-to-home-from-quiz");
    const addFavoriteBtn = document.getElementById("add-favorite-btn");
    const retryBtn = document.getElementById("retry-btn");
    const homeFromResultBtn = document.getElementById("home-from-result-btn");
    const backToHomeFromFav = document.getElementById("back-to-home-from-fav");

    const resultTitle = document.getElementById("result-title");
    const resultBudget = document.getElementById("result-budget");
    const resultTime = document.getElementById("result-time");
    const resultSteps = document.getElementById("result-steps");
    const ticketNumber = document.getElementById("ticket-number");

    const favoritesList = document.getElementById("favorites-list");
    const emptyFavoritesMsg = document.getElementById("empty-favorites-msg");

    // ==========================================
    // 3. 画面切り替え用の共通関数
    // ==========================================
    function showScreen(targetScreen) {
        if (!targetScreen) return;
        const screens = [homeScreen, quizScreen, resultScreen, favoritesScreen];
        screens.forEach(screen => {
            if (screen) screen.classList.remove("active");
        });
        targetScreen.classList.add("active");
    }

    // ==========================================
    // 4. 診断ロジック
    // ==========================================
    function runDiagnosis(event) {
        event.preventDefault();

        const formData = new FormData(quizForm);
        const userAnswers = {
            mood: formData.get("mood"),
            budget: formData.get("budget"),
            time: formData.get("time"),
            area: formData.get("area"),
            who: formData.get("who")
        };

        let matchedPlans = plansData.filter(plan => {
            return plan.mood.includes(userAnswers.mood) &&
                   plan.who.includes(userAnswers.who) &&
                   plan.budget === userAnswers.budget &&
                   plan.time === userAnswers.time &&
                   plan.area === userAnswers.area;
        });

        if (matchedPlans.length === 0) {
            matchedPlans = plansData;
        }

        const randomIndex = Math.floor(Math.random() * matchedPlans.length);
        currentSelectedPlan = matchedPlans[randomIndex];

        renderResultCard(currentSelectedPlan);
        showScreen(resultScreen);
    }

    function renderResultCard(plan) {
        if (!plan) return;
        resultTitle.textContent = plan.title;
        resultBudget.textContent = plan.cost;
        resultTime.textContent = plan.duration;

        const randomNum = Math.floor(100 + Math.random() * 900);
        ticketNumber.textContent = `2026-${randomNum}`;

        resultSteps.innerHTML = "";
        plan.steps.forEach(stepText => {
            const li = document.createElement("li");
            li.textContent = stepText;
            resultSteps.appendChild(li);
        });
    }

    // ==========================================
    // 5. お気に入り機能
    // ==========================================
    function getStoredFavorites() {
        try {
            const data = localStorage.getItem("odekake_favorites");
            return data ? JSON.parse(data) : [];
        } catch (e) {
            return [];
        }
    }

    function saveToFavorites() {
        if (!currentSelectedPlan) return;

        let favorites = getStoredFavorites();
        const isAlreadySaved = favorites.some(item => item.id === currentSelectedPlan.id);

        if (isAlreadySaved) {
            alert("このお出かけプランはすでにお気に入りに登録されています✨");
            return;
        }

        favorites.push(currentSelectedPlan);
        try {
            localStorage.setItem("odekake_favorites", JSON.stringify(favorites));
            alert("お気に入りに追加しました！💖");
        } catch (e) {
            alert("保存に失敗しました（プライベートモードなどの可能性があります）");
        }
    }

    function renderFavoritesScreen() {
        const favorites = getStoredFavorites();
        favoritesList.innerHTML = "";

        if (favorites.length === 0) {
            emptyFavoritesMsg.style.display = "block";
        } else {
            emptyFavoritesMsg.style.display = "none";

            favorites.forEach((plan, index) => {
                const favCard = document.createElement("div");
                favCard.className = "fav-card";
                favCard.innerHTML = `
                    <div class="fav-title">🎟 ${plan.title}</div>
                    <div class="fav-meta">予算: ${plan.cost} / 移動: ${plan.duration}</div>
                    <button class="delete-fav-btn" data-index="${index}">✕</button>
                `;
                favoritesList.appendChild(favCard);
            });

            const deleteButtons = document.querySelectorAll(".delete-fav-btn");
            deleteButtons.forEach(btn => {
                btn.addEventListener("click", removeFavorite);
            });
        }

        showScreen(favoritesScreen);
    }

    function removeFavorite(event) {
        const indexToRemove = parseInt(event.target.getAttribute("data-index"), 10);
        let favorites = getStoredFavorites();
        favorites.splice(indexToRemove, 1);
        try {
            localStorage.setItem("odekake_favorites", JSON.stringify(favorites));
        } catch (e) {}
        renderFavoritesScreen();
    }

    // ==========================================
    // 6. イベントリスナーの設定
    // ==========================================
    if (startBtn) startBtn.addEventListener("click", () => showScreen(quizScreen));
    if (viewFavoritesBtn) viewFavoritesBtn.addEventListener("click", renderFavoritesScreen);
    if (quizForm) quizForm.addEventListener("submit", runDiagnosis);

    if (backToHomeFromQuiz) backToHomeFromQuiz.addEventListener("click", () => showScreen(homeScreen));
    if (homeFromResultBtn) homeFromResultBtn.addEventListener("click", () => showScreen(homeScreen));
    if (backToHomeFromFav) backToHomeFromFav.addEventListener("click", () => showScreen(homeScreen));

    if (retryBtn) retryBtn.addEventListener("click", () => showScreen(quizScreen));
    if (addFavoriteBtn) addFavoriteBtn.addEventListener("click", saveToFavorites);

});