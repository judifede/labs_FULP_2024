const menuToggle = document.querySelector("#menu-toggle");
const menuNav = document.querySelector("#menu-nav");

const toggleMenu = () => {
  console.log("called toggleMenu")
  menuNav.classList.toggle("menu-toggle");
}

menuToggle.addEventListener("click", toggleMenu);
