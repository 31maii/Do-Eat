// logo 클릭시 home 화면으로 돌아가도록 하는 코드
var logo = document.getElementById("logo");

logo.addEventListener("click", () => {
  location.href = "index.html";
});