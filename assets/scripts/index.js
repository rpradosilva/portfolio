const nav = document.querySelector("nav");
let menuIcon = document.querySelector('[aria-label="Menu"]');

menuIcon.addEventListener("click", () => {
  let menuList = document.querySelectorAll("nav a.desktop-only");

  if (menuIcon.getAttribute("aria-expanded") === "false") {
    menuIcon.setAttribute("aria-expanded", "true");
  } else {
    menuIcon.setAttribute("aria-expanded", "false");
  }

  for (const menuItem of menuList) {
    menuItem.classList.toggle("menu-item--visible");
  }
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a.desktop-only.menu-item--visible")) {
    menuIcon.click();
  }
});

let year = new Date().getFullYear();
let siteYear = document.querySelector("footer p span");
siteYear.innerHTML = year;

let yearOfExperience = year - 2013;
let myExperience = document.querySelectorAll(
  "#about article div > p.highlight"
)[0];
myExperience.innerHTML = yearOfExperience;
