const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
  console.log("Hiciste click");
  desktopMenu.classList.toggle("inactive");
}

console.log("Js funcionando");
