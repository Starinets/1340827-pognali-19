const nav = document.querySelector(".page-nav");
const navToggler = document.querySelector(".page-nav__toggler");

console.log("-- start --");

nav.classList.remove("page-nav--no-js");
nav.classList.add("page-nav--closed");

// IE11 Заявляет, что поддерживает ECMA2016, но выдает ошибку на определение стрелочной функции...
navToggler.onclick = () => {
  nav.classList.toggle("page-nav--opened");
  nav.classList.toggle("page-nav--closed");
};

window.onscroll = () => {
  if (pageYOffset > 0) {
    nav.classList.add("page-nav--scrolled");
  } else {
    nav.classList.remove("page-nav--scrolled");
  }
};
