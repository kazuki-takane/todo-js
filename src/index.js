import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //li生成
  const li = document.createElement("li");
  li.className = "list";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //p生成
  const p = document.createElement("p");
  p.innerText = inputText;

  //button(完了)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  //button(完了)が押されたらliを削除
  completeButton.addEventListener("click", () => {
    document.getElementById("incomplete-list").removeChild(li);

    //li内のボタンを初期化
    completeButton.remove();
    deleteButton.remove();

    //button(戻す)生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    //button(戻す)が押されたらliを削除
    backButton.addEventListener("click", () => {
      document.getElementById("complete-list").removeChild(li);
      //liタグの子要素に各要素を設定(完了したTODOから戻すボタンを押したとき)
      div.removeChild(backButton);
      div.appendChild(completeButton);
      div.appendChild(deleteButton);
      //未完了のTODOに追加(完了したTODOから戻すボタンを押したとき)
      document.getElementById("incomplete-list").appendChild(li);
    });

    //liタグの子要素に各要素を設定(完了したTODO)
    div.appendChild(backButton);

    //完了したTODOに追加
    document.getElementById("complete-list").appendChild(li);
  });

  //button(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  //button(削除)が押されたらliを削除
  deleteButton.addEventListener("click", () => {
    document.getElementById("incomplete-list").removeChild(li);
  });

  //liタグの子要素に各要素を設定(未完了のTODO)
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のTODOに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
