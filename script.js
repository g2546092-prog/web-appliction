// 画面のHTML要素がすべて読み込まれてから処理を実行する
document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. お出かけプランのデータベース（データ構造）
    // ==========================================
    const plansData = [
        // 0円プランの例（plansData配列の中に追加してください）
        {
            id: "plan-free-00",
            title: "映画鑑賞",
            mood: ["chill"],
            budget: "free", // ★0円
            time: "long",
            area: "indoor",
            who: ["solo", "date"],
            cost: "0円",
            duration: "約 1—2時間",
            steps: [
            "見たい映画を1つ選ぶ",
            "家にあるお菓子と飲み物を用意する",
             ]
        },
        {
            id: "plan-free-01",
            title: "100個やりたいことリスト",
            mood: ["chill"],
            budget: "free", // ★0円
            time: "short",
            area: "indoor",
            who: ["solo", "date"],
            cost: "0円",
            duration: "約 30分",
            steps: [
            "紙に自分のやりたいことを書き留める",
            "優先順位をつける",
            "シールなどでデコる"
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
            title: "自然豊かな川辺や海岸沿いをサイクリング",
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
                "気に入ったアートや展示品の写真を撮る"
            ]
        },
        {
            id: "plan-free-07",
            title: "公園でお絵描き＆写真撮影",
            mood: ["chill", "photo", "active" ],
            budget: "free", // ★0円
            time: "short",
            area: "nature",
            who: [ "friends", "date"],
            cost: "0円",
            duration: "約30分",
            steps: [
                 "公園などに行って描く場所、絵を探す",
                 "花や風景、似顔絵など1つ決めて描き、交換する",
                 "絵と一緒にスマホで撮影",
            ]
        },
        {
            id: "plan-free-08",
            title: "お菓子作り",
            mood: ["delicious"],
            budget: "free", // ★0円
            time: "medium",
            area: "indoor",
            who: ["solo"],
            cost: "0円",
            duration: "約1時間",
            steps: [
                 "家にある材料で作れそうな簡単なレシピを検索する",
                 "レシピを見ながら実際に作ってみる",
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
            title: "映画鑑賞",
            mood: ["chill", "photo"],
            budget: "medium",
            time: "long",
            area: "indoor",
            who: ["solo", "date","friends"],
            cost: "約 2,000円〜3,000円",
            duration: "約 2-3時間",
            steps: [
                "映画観に行き一つ映画を選ぶ",
                "時間があれば、ポップコーンや飲み物を買う"
            ]
        },
        {
            id: "plan-4000-03",
            title: "大型ショッピングモールで食べ歩き＆買い出し",
            mood: ["active", "delicious"],
            budget: "medium",
            time: "short",
            area: "city",
            who: ["friends", "date"],
            cost: "約 3,000円〜4,000円",
            duration: "約 30分",
            steps: [
                "気になるお店を入る",
                "フードコートやカフェでスイーツを堪能",
                "雑貨屋さんでお部屋のインテリアを探す"
            ]
        },
        {
            id: "plan-4000-04",
            title: "水族館プラン",
            mood: ["active", "photo"],
            budget: "medium",
            time: "long",
            area: "city",
            who: ["friends", "date"],
            cost: "約 3,000円〜4,000円",
            duration: "約 1-2時間",
            steps: [
                "水族館へ向かい大水槽やクラゲコーナーで癒やされる",
                "迫力満点のイルカショーやペンギンの時間を鑑賞",
                "ミュージアムショップで可愛い海の生き物グッズをみる"
            ]
        },
        {
            id: "plan-high-01",
            title: "日帰り温泉・スパリゾートでリフレッシュ",
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
            id: "plan-high-02",
            title: "海辺のドライブ＆カフェめぐり",
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
    // 4. 診断ロジック（予算は絶対に固定）
    // ==========================================
    function runDiagnosis(event) {
        event.preventDefault();

        const formData = new FormData(quizForm);
        const userAnswers = {
            mood: formData.get("mood"),
            budget: formData.get("budget"), // ユーザーが選んだ予算 (free, low, medium, high)
            time: formData.get("time"),
            area: formData.get("area"),
            who: formData.get("who")
        };

        // STEP 1: 【絶対条件】まず「選択された予算」に一致するプランだけに絞り込む
        const budgetOnlyPlans = plansData.filter(plan => plan.budget === userAnswers.budget);

        // 万が一、選んだ予算のプランがデータ（plansData）に1つもない場合の安全対策
        if (budgetOnlyPlans.length === 0) {
            alert("該当する予算のプランが登録されていません。");
            return;
        }

        // STEP 2: 予算が一致するプランの中から「その他の条件（気分・時間・エリア・誰と）」が合うものを探す
        let matchedPlans = budgetOnlyPlans.filter(plan => {
            return plan.mood.includes(userAnswers.mood) &&
                   plan.who.includes(userAnswers.who) &&
                   plan.time === userAnswers.time &&
                   plan.area === userAnswers.area;
        });

        // STEP 3: 気分や時間が全て合うものが無かった場合は「予算だけが合うグループ（budgetOnlyPlans）」からランダム選出
        // （※これにより、他の条件が合わなくても「別の予算」のプランが選ばれる事故を100%防ぎます）
        if (matchedPlans.length === 0) {
            matchedPlans = budgetOnlyPlans;
        }

        // 候補の中からランダムに1つ選ぶ
        const randomIndex = Math.floor(Math.random() * matchedPlans.length);
        currentSelectedPlan = matchedPlans[randomIndex];

        renderResultCard(currentSelectedPlan);
        showScreen(resultScreen);
    }
    // ★★★ この関数を追加してください ★★★
    function renderResultCard(plan) {
        if (!plan) return;
        if (resultTitle) resultTitle.textContent = plan.title;
        if (resultBudget) resultBudget.textContent = plan.cost;
        if (resultTime) resultTime.textContent = plan.duration;

        const randomNum = Math.floor(100 + Math.random() * 900);
        if (ticketNumber) ticketNumber.textContent = `2026-${randomNum}`;

        if (resultSteps) {
            resultSteps.innerHTML = "";
            plan.steps.forEach(stepText => {
                const li = document.createElement("li");
                li.textContent = stepText;
                resultSteps.appendChild(li);
            });
        }
    }
    

    // ==========================================
    // 5. お気に入り機能
    // ==========================================
    // ==========================================
    // 5. お気に入り機能（もぎり・スタンプ対応）
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

        // 保存時に「もぎり状態(isUsed)」と「行った日(usedDate)」の初期値を追加
        const planToSave = {
            ...currentSelectedPlan,
            isUsed: false,
            usedDate: ""
        };

        favorites.push(planToSave);
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
                // もぎり済みの場合は「used」クラスをつける
                favCard.className = plan.isUsed ? "fav-card used" : "fav-card";

                // もぎり済みのときだけ表示する赤い丸印スタンプHTML
                const stampHTML = plan.isUsed
                    ? `<div class="used-stamp">
                           <span class="stamp-main">行った！</span>
                           <span class="stamp-sub">${plan.usedDate || "USED"}</span>
                       </div>`
                    : "";

                // ボタンの文字を状態に合わせて切り替え
                const btnText = plan.isUsed ? "↩ 未使用に戻す" : "✂ チケットをもぎる（行った！）";

                favCard.innerHTML = `
                    <div class="fav-title">🎟 ${plan.title}</div>
                    <div class="fav-meta">予算: ${plan.cost} / 移動: ${plan.duration}</div>
                    <button type="button" class="stamp-btn" data-index="${index}">${btnText}</button>
                    ${stampHTML}
                    <button type="button" class="delete-fav-btn" data-index="${index}">✕</button>
                `;
                favoritesList.appendChild(favCard);
            });

            // もぎりボタンのイベント登録
            const stampButtons = document.querySelectorAll(".stamp-btn");
            stampButtons.forEach(btn => {
                btn.addEventListener("click", toggleStampFavorite);
            });

            // 削除ボタンのイベント登録
            const deleteButtons = document.querySelectorAll(".delete-fav-btn");
            deleteButtons.forEach(btn => {
                btn.addEventListener("click", removeFavorite);
            });
        }

        showScreen(favoritesScreen);
    }

    // チケットのもぎり（スタンプ押印・解除）を切り替える関数
    function toggleStampFavorite(event) {
        const index = parseInt(event.target.getAttribute("data-index"), 10);
        let favorites = getStoredFavorites();
        if (!favorites[index]) return;

        // 状態を反転（未押印 ⇔ 押印済み）
        const nextUsedState = !favorites[index].isUsed;
        favorites[index].isUsed = nextUsedState;

        if (nextUsedState) {
            // 今日の日付を「11/13」の形式でスタンプに印字
            const today = new Date();
            const month = today.getMonth() + 1;
            const day = today.getDate();
            favorites[index].usedDate = `${month}/${day}`;
        } else {
            favorites[index].usedDate = "";
        }

        try {
            localStorage.setItem("odekake_favorites", JSON.stringify(favorites));
        } catch (e) {}

        renderFavoritesScreen();
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

// ==========================================
    // 7. チケット画像保存＆SNSシェア機能
    // ==========================================
    const saveImageBtn = document.getElementById("save-image-btn");
    const shareLineBtn = document.getElementById("share-line-btn");
    const shareXBtn = document.getElementById("share-x-btn");
    const captureTicket = document.getElementById("capture-ticket");

    // チケットをPNG画像として保存する処理
    if (saveImageBtn && captureTicket) {
        saveImageBtn.addEventListener("click", async () => {
            if (typeof html2canvas === "undefined") {
                alert("画像化ライブラリの読み込みに失敗しました。ネット接続を確認してください。");
                return;
            }

            const originalText = saveImageBtn.innerHTML;
            saveImageBtn.innerHTML = "⏳ チケットを発券中...";
            saveImageBtn.disabled = true;

            // おすすめの過ごし方（アコーディオン）が閉じていたら一時的に開く
            const wasClosed = ticketAccordion && !ticketAccordion.classList.contains("open");
            if (wasClosed) {
                ticketAccordion.classList.add("open");
            }

            try {
                // チケット要素をCanvasに変換（解像度2倍でくっきりさせる）
                const canvas = await html2canvas(captureTicket, {
                    scale: 2,
                    backgroundColor: null,
                    useCORS: true
                });

                // PNG画像としてダウンロードを実行
                const link = document.createElement("a");
                const planTitle = currentSelectedPlan ? currentSelectedPlan.title : "odekake";
                link.download = `お出かけチケット_${planTitle}.png`;
                link.href = canvas.toDataURL("image/png");
                link.click();
            } catch (error) {
                alert("画像の保存に失敗しました。スクリーンショットをお試しください🙇‍♀️");
            } finally {
                // アコーディオンとボタンの表示を元の状態に戻す
                if (wasClosed) {
                    ticketAccordion.classList.remove("open");
                }
                saveImageBtn.innerHTML = originalText;
                saveImageBtn.disabled = false;
            }
        });
    }

    // シェア用のテキストを作成する共通関数
    function createShareText() {
        if (!currentSelectedPlan) return "今日のお出かけ診断をやってみたよ！";
        const stepsText = currentSelectedPlan.steps.map(s => `・${s}`).join("\n");
        return `🎟 今日のお出かけはこれに決定！\n\n【${currentSelectedPlan.title}】\n💰 予算：${currentSelectedPlan.cost}\n🚃 移動：${currentSelectedPlan.duration}\n\n💡 おすすめの過ごし方\n${stepsText}\n\n#お出かけ診断`;
    }

    // LINEで送るボタン
    if (shareLineBtn) {
        shareLineBtn.addEventListener("click", () => {
            const text = encodeURIComponent(createShareText());
            const lineUrl = `https://line.me/R/share?text=${text}`;
            window.open(lineUrl, "_blank", "noopener,noreferrer");
        });
    }

    // X（旧Twitter）でシェアするボタン
    if (shareXBtn) {
        shareXBtn.addEventListener("click", () => {
            const text = encodeURIComponent(createShareText());
            const xUrl = `https://twitter.com/intent/tweet?text=${text}`;
            window.open(xUrl, "_blank", "noopener,noreferrer");
        });
    }