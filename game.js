const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const glitchScene = document.getElementById("glitch-scene");
const glitchMessage = document.querySelector(".glitch-message");

startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  glitchScene.classList.remove("hidden");

  // Show glitch text after 3 seconds
  setTimeout(() => {
    glitchMessage.classList.remove("hidden");
  }, 3000);
});
