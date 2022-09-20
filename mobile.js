const openMenu = document.getElementById("menu-bar");
const closeMenu = document.querySelector(".close");
const popUp = document.getElementById("menu-list");
const menuList = document.querySelectorAll(".menu-li");
const btnProject = document.querySelectorAll('.project-button')
const project = document.querySelector('.pop-up')
const closeProject = document.querySelector('.project-close')
console.log(btnProject)

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

const openPopUp = function () {
  project.classList.remove('hidden')
}

const closePopUp = function () {
  project.classList.add('hidden')
}

closeProject.addEventListener('click', closePopUp)

for (let i = 0; i < btnProject.length; i++){
  btnProject[i].addEventListener('click', openPopUp)
}
