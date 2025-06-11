const nav = document.querySelector("nav");
let portfolioItems = document.querySelectorAll("#cases article");
let menuIcon = document.querySelector('[aria-label="Menu"]');
let lottiePlayer, lottiePlayers;

if (window.matchMedia("(hover: hover)").matches) {
  lottiePlayers = document.querySelectorAll("dotlottie-player");

  for (const player of lottiePlayers) {
    player.removeAttribute("autoplay");
  }

  for (const item of portfolioItems) {
    item.addEventListener("mouseover", function () {
      lottiePlayer = item.querySelector("dotlottie-player");
      lottiePlayer.removeAttribute("autoplay", "");
      lottiePlayer.play();
    });

    item.addEventListener("mouseleave", function () {
      lottiePlayer = item.querySelector("dotlottie-player");
      lottiePlayer.stop();
    });
  }
}

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
