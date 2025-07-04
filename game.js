const boot = document.getElementById("ps-boot");
const glitch = document.getElementById("glitch-crash");
const terminal = document.getElementById("terminal");
const responseText = document.getElementById("response-text");
const glitchSound = document.getElementById("glitch-sound");

// Initial Boot Sequence
setTimeout(() => {
  boot.classList.add("hidden");
  glitch.classList.remove("hidden");
  glitchSound.currentTime = 0;
  glitchSound.play();

  setTimeout(() => {
    glitch.classList.add("hidden");
    terminal.classList.remove("hidden");
  }, 3000);
}, 2000);

// Handle Choices
function respond(choice) {
  document.querySelector(".choices").style.display = "none";

  if (choice === "A") {
    responseText.textContent = "ACCESS DENIED. CODE UNRECOGNIZED.";
  } else if (choice === "B") {
    responseText.textContent = "SILENCE... JUST LIKE BEFORE.";
  } else if (choice === "C") {
    responseText.textContent = "I am what’s left of you.";
  }

  // Restart the boot sequence
  setTimeout(() => {
    terminal.classList.add("hidden");
    boot.classList.remove("hidden");

    setTimeout(() => {
      boot.classList.add("hidden");
      glitch.classList.remove("hidden");
      glitchSound.currentTime = 0;
      glitchSound.play();

      setTimeout(() => {
        glitch.classList.add("hidden");
        terminal.classList.remove("hidden");
        document.querySelector(".choices").style.display = "block";
        responseText.textContent = "";
      }, 3000);
    }, 2000);
  }, 3000);
}
