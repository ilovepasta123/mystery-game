const boot = document.getElementById("ps-boot");
const glitch = document.getElementById("glitch-crash");
const terminal = document.getElementById("terminal");
const responseText = document.getElementById("response-text");
const glitchSound = document.getElementById("glitch-sound");
const redDoorDiv = document.getElementById("red-door");

function startGame() {
  // Reset everything
  boot.classList.remove("hidden");
  glitch.classList.add("hidden");
  terminal.classList.add("hidden");
  redDoorDiv.classList.add("hidden");
  responseText.textContent = "";

  // Intro boot sequence
  setTimeout(() => {
    boot.classList.add("hidden");
    glitch.classList.remove("hidden");
    glitchSound.currentTime = 0;
    glitchSound.play();

    setTimeout(() => {
      glitch.classList.add("hidden");
      terminal.classList.remove("hidden");
      document.querySelector(".choices").style.display = "block";
    }, 3000);
  }, 2000);
}

window.onload = startGame;

function respond(choice) {
  document.querySelector(".choices").style.display = "none";

  if (choice === "A") {
    const code = prompt("Enter access code:");
    if (code === "1701") {
      responseText.textContent = "CODE ACCEPTED.";
      setTimeout(() => {
        terminal.classList.add("hidden");
        redDoor();
      }, 2000);
      return;
    } else {
      responseText.textContent = "ACCESS DENIED. CODE UNRECOGNIZED.";
    }
  } else if (choice === "B") {
    responseText.textContent = "SILENCE... JUST LIKE BEFORE.";
  } else if (choice === "C") {
    responseText.textContent = "I am what’s left of you.";
  }

  // Restart game sequence after delay
  setTimeout(() => {
    startGame();
  }, 3000);
}

// Red Door scene logic
function redDoor() {
  glitch.classList.add("hidden");
  redDoorDiv.classList.remove("hidden");
  glitchSound.pause();
}

function openDoor() {
  redDoorDiv.innerHTML = "<p class='door-text'>...</p><p class='door-text'>You chose to remember.</p>";
  document.body.style.backgroundColor = "black";
  setTimeout(() => {
    alert("Chapter 2 coming soon...");
  }, 3000);
}
