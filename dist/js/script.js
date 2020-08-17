function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });;

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