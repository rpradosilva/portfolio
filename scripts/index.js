const userAgent = navigator.userAgent;
let portfolioItems = document.querySelectorAll("#cases article");
let menuIcon = document.querySelector('[aria-label="Menu"]');
let lottiePlayer, lottiePlayers;

if (!/mobile/i.test(userAgent)) {
  lottiePlayers = document.querySelectorAll("dotlottie-player");

  for (const player of lottiePlayers) {
    player.removeAttribute("autoplay", "");
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
    if (menuItem.id == "") {
      menuItem.setAttribute("id", "appear");
      menuItem.addEventListener("click", () => {
        menuIcon.click();
      });
    } else {
      menuItem.removeAttribute("id");
    }
  }
});
