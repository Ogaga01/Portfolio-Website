const openMenu = document.getElementById("menu-bar");
const closeMenu = document.querySelector(".close");
const popUp = document.getElementById("menu-list");
const menuList = document.querySelectorAll(".menu-li");
const btnProject = document.querySelectorAll('.project-button')
const project = document.querySelector('.pop-up')
const closeProject = document.querySelector('.project-close')
const navBar = document.getElementById('navbar-list')
const navBarList = document.querySelectorAll('.navbar-li')
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

navBar.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(e.target)
  if (e.target.classList.contains('list-link')) {
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  }
})
