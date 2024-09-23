// logo 클릭시 home 화면으로 돌아가도록 하는 코드
var logo = document.getElementById("logo1");

logo.addEventListener("click", () => {
  location.href = "index.html";
});

var clamPasta = document.getElementById("clam_pasta");

clamPasta.addEventListener("click", () => {
  location.href = "봉골레파스타.html";
});