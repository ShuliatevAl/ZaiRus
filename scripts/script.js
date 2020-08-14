// Скрипт бургера

const burger = document.querySelector(".header__burger");
const navList = document.querySelector(".menu__list");
const links = document.querySelectorAll(".menu__item");
const page = document.querySelector(".body");

burger.addEventListener("click", () => {
    page.classList.toggle("lock");
    navList.classList.toggle("open");
    links.forEach(link => {
      link.classList.toggle("fade");
    });
  });