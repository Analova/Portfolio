var menueBtn = document.getElementsByClassName("menu-btn");
var mobileMenu = document.getElementsByClassName("mobile-menu");

var clickedBtn = function() {
  mobileMenu[0].classList.toggle("active");
};

menueBtn[0].addEventListener("click", clickedBtn);

console.log(mobileMenu[0]);
