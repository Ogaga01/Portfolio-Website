const openMenu = document.getElementById("menu-bar");
const closeMenu = document.querySelector(".close");
const popUp = document.getElementById("menu-list");
const menuList = document.querySelectorAll(".menu-li");

openMenu.addEventListener("click", () => {
  popUp.classList.add("show");
});
closeMenu.addEventListener("click", () => {
  popUp.classList.remove("show");
});
menuList.forEach((item) => {
  item.addEventListener("click", () => {
    popUp.classList.remove("show");
  });
});
