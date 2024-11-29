// トップページでの会員番号生成と登録日時の表示
window.onload = function () {
  // トップページに次のボタンがある場合
  if (document.getElementById("next-btn")) {
    // 偽造した会員番号をランダム生成
    let memberId = "ID" + Math.floor(Math.random() * 100000);
    document.getElementById("member-id").innerText = memberId;

    // 登録日時の表示
    let registerDate = new Date().toLocaleString();
    document.getElementById("register-date").innerText = registerDate;

    // 支払い期限カウントダウン（24時間後に設定）
    let countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 1); // 1日後

    //偽キャンセルボタン
    let fakeCancel = document.getElementById("cancel");

    //キャンセルボタンの表示
    function switchDisplay() {
      //showFirst.classList.add("d-none");
      fakeCancel.classList.remove("d-none");
    }
    //上記関数を10秒後に実行
    setTimeout(() => {
      switchDisplay();
    }, 10000);

    function updateCountdown() {
      let now = new Date();
      let distance = countdownDate - now;

      if (distance < 0) {
        document.getElementById("countdown").innerText = "期限切れ";
        return;
      }

      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("countdown").innerText =
        hours + "時間 " + minutes + "分 " + seconds + "秒";
    }

    setInterval(updateCountdown, 1000);

    // 次へボタンのクリックで次のページへ移動
    document.getElementById("next-btn").onclick = function () {
      window.location.href = "form.html";
    };
  }

  // form.htmlのsubmit-btn処理
  if (document.getElementById("submit-btn")) {
    document.getElementById("submit-btn").onclick = function () {
      let name = document.getElementById("name").value;
      let address = document.getElementById("address").value;
      let studentId = document.getElementById("student-id").value;

      // 何かしら入力されている場合は警告ページへ
      if (name || address || studentId) {
        window.location.href = "warning.html";
      } else {
        // 何も入力されていなければ成功ページへ
        window.location.href = "success.html";
      }
    };
  }
};
