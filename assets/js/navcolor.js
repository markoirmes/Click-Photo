function manipulateNav() {
  const logo = document.getElementById("logo");
  const nav = document.getElementById("navigation");
  const navOffset = window.pageYOffset;
  if (navOffset === 0) {
    nav.classList.add("navbar-dark");
    nav.classList.remove("navbar-light");
    nav.classList.add("bg-dark");
    nav.classList.remove("bg-light");
    nav.classList.remove("white-nav");
    logo.src = "assets/img/logo-white.png";
  } else {
    nav.classList.remove("navbar-dark");
    nav.classList.remove("bg-dark");
    nav.classList.add("bg-light");
    nav.classList.add("navbar-light");
    nav.classList.add("white-nav");
    logo.src = "assets/img/logo.png";
  }
}
window.onload = manipulateNav();
window.onscroll = function() {
  manipulateNav();
};
