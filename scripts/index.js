const userAgent = navigator.userAgent;
let casePreviewAnimations = document.querySelectorAll("#cases article");
let lottiePlayer, lottiePlayers;

if (!/mobile/i.test(userAgent)) {
  lottiePlayers = document.querySelectorAll("dotlottie-player");

  for (const player of lottiePlayers) {
    player.removeAttribute("autoplay", "");
  }

  for (const animation of casePreviewAnimations) {
    animation.addEventListener("mouseover", function () {
      lottiePlayer = animation.querySelector("dotlottie-player");
      lottiePlayer.removeAttribute("autoplay", "");
      lottiePlayer.play();
    });

    animation.addEventListener("mouseleave", function () {
      lottiePlayer = animation.querySelector("dotlottie-player");
      lottiePlayer.pause();
    });
  }
}
