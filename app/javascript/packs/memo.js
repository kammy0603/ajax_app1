function memo() {
 const submit = document.getElementById("submit");
 submit.addEventListener("click", (e) => {
   const formData = new FormData(document.getElementById("form"));
   const XHR = new XMLHttpRequest();
   XHR.open("POST", "/posts", true);
   XHR.responseType = "json";
   XHR.send(formData);
   XHR.onload = () => {
     if (XHR.status != 200) {  //200以外のHTTPステータスが返却された場合の処理
       alert(`Error ${XHR.status}: ${XHR.statusText}`);
       return null;
     }
     const item = XHR.response.post; //レスポンスとして返却されたメモのレコードデータを取得
     const list = document.getElementById("list"); //描画する親要素listを取得
     const formText = document.getElementById("content"); //メモの入力フォームをリセットするため、要素contentを取得
     const HTML = `
       <div class="post" data-id=${item.id}>
         <div class="post-date">
           投稿日時：${item.created_at}
         </div>
         <div class="post-content">
         ${item.content}
         </div>
       </div>`;
     list.insertAdjacentHTML("afterend", HTML); //listという要素に対してinsertAdjacentHTMLでHTMLを追加
     formText.value = ""; //メモの入力フォームに入力されたままの文字をリセットさせる
   };
   e.preventDefault();
 });
}
window.addEventListener("load", memo);