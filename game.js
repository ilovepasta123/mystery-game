const boot = document.getElementById("ps-boot");
const glitch = document.getElementById("glitch-crash");
const terminal = document.getElementById("terminal");
const responseText = document.getElementById("response-text");
const glitchSound = document.getElementById("glitch-sound");
const redDoorDiv = document.getElementById("red-door");
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  boot.classList.remove("hidden");
  startGame();
});

function startGame() {
  boot.classList.remove("hidden");
  glitch.classList.add("hidden");
  terminal.classList.add("hidden");
  redDoorDiv.classList.add("hidden");
  responseText.textContent = "";

  // Boot → Glitch → Terminal
  setTimeout(() => {
    boot.classList.add("hidden");
    glitch.classList.remove("hidden");
    glitchSound.currentTime = 0;
    glitchSound.play().catch(() => {
      console.warn("Autoplay blocked.");
    });

    setTimeout(() => {
      glitch.classList.add("hidden");
      terminal.classList.remove("hidden");
      document.querySelector(".choices").style.display = "block";
    }, 1500); // glitch duration
  }, 1000); // boot duration
}

function respond(choice) {
  document.querySelector(".choices").style.display = "none";

  if (choice === "A") {
    const code = prompt("Enter access code:");
    if (code === "1701" || code === "6729") {
      responseText.textContent = "CODE ACCEPTED.";
      setTimeout(() => {
        terminal.classList.add("hidden");
        redDoor();
      }, 2000);
    } else {
      responseText.textContent = "ACCESS DENIED. CODE UNRECOGNIZED.";
      setTimeout(() => {
        startGame();
      }, 3000);
    }
  } else if (choice === "D") {
    responseText.textContent = "Try one of these codes: 1223, 0990, 5658, 6729, 1707";
    setTimeout(() => {
      startGame();
    }, 4000);
  } else if (choice === "B") {
    responseText.textContent = "SILENCE... JUST LIKE BEFORE.";
    setTimeout(() => {
      startGame();
    }, 3000);
  } else if (choice === "C") {
    responseText.textContent = "I am what’s left of you.";
    setTimeout(() => {
      startGame();
    }, 3000);
  }
}

function redDoor() {
  glitch.classList.add("hidden");
  terminal.classList.add("hidden");
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
