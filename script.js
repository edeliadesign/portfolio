const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navmenu");
const navItemForm = document.querySelector(".nav-item a[href='#form']");
const navItemHome = document.querySelector(".nav-item a.home");
const navItemChi = document.querySelector(".nav-item a.chi-sono");

hamburger.addEventListener("click", () => {
       hamburger.classList.toggle ("active");
       navMenu.classList.toggle ("active");
})

navItemForm.addEventListener("click", () => {
       hamburger.classList.toggle ("active");
       navMenu.classList.toggle ("active");
       navItemForm.classList.add ("menu-active");
       navItemHome.classList.remove ("menu-active");
       navItemChi.classList.remove ("menu-active");
})

