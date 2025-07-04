
    const boot = document.getElementById("ps-boot");
const glitch = document.getElementById("glitch-crash");
const terminal = document.getElementById("terminal");
const responseText = document.getElementById("response-text");
const glitchSound = document.getElementById("glitch-sound");
const redDoorDiv = document.getElementById("red-door");
const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  startGame();
});

function startGame() {
  boot.classList.remove("hidden");
  glitch.classList.add("hidden");
  terminal.classList.add("hidden");
  redDoorDiv.classList.add("hidden");
  responseText.textContent = "";

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
    }, 3000);
  }, 2000);
}

function respond(choice) {
  document.querySelector(".choices").style.display = "none";

  if (choice === "A" || choice === "D"){
    const code = prompt("Enter access code:");
    (code === "1701" || code === "6729") {
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

  setTimeout(() => {
    startGame();
  }, 3000);
}

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
