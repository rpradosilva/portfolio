const userAgent = navigator.userAgent;
let portfolioItems = document.querySelectorAll("#cases article");
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

function toggleMenu() {
  let menuList = document.querySelectorAll("nav .desktop-only");

  for (const menuItem of menuList) {
    if (menuItem.id == "") {
      menuItem.setAttribute("id", "appear");
    } else {
      menuItem.removeAttribute("id");
    }
  }
}
