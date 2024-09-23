// logo 클릭시 home 화면으로 돌아가도록 하는 코드
var logo = document.getElementById("logo");

logo.addEventListener("click", () => {
  location.href = "index.html";
});

// + 버튼 클릭시 recipe.html로 이동하는 코드
function view_more() {
  location.href = "recipe.html";
}

// 화면이 넘어가도록 하는 코드
let num = 0;

function intro(n) {
  if (n == 0) {
    if (num == 1) {
      num = 5;
    } else {
      num--;
    }
  } else {
    if (num == 5) {
      num = 1;
    } else {
      num++;
    }
  }

  const img = document.getElementById("intro_pic");
  img.setAttribute("src", "img/intro_img/intro" + num + ".jpg");
}

setInterval(intro, 4000);

// 메뉴 클릭시 해당 메뉴의 레시피 화면으로 이동하는 코드 
var clamPasta = document.getElementById("clam_pasta");

clamPasta.addEventListener("click", () => {
  location.href = "봉골레파스타.html";
});
