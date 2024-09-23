// logo 클릭시 home 화면으로 돌아가도록 하는 코드
var logo = document.getElementById("logo");

logo.addEventListener("click", () => {
  location.href = "index.html";
});

const heart = document.querySelector(".heart");

heart.addEventListener("click", () => {
  path = heart.getAttribute("src");
  if (path == "img/빈하트.png") {
    heart.setAttribute("src", "img/꽉찬하트.png");
  } else {
    heart.setAttribute("src", "img/빈하트.png");
  }
});
