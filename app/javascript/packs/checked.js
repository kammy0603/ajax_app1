function check() {
  const posts = document.querySelectorAll(".post");
  posts.forEach(function (post) {
    post.addEventListener("click", () => { 
    // ここにクリックした時に行う「何らかの処理」を記述していく
    });
  });
}
window.addEventListener("load", check);