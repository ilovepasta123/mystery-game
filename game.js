const boot = document.getElementById("ps-boot");
const glitch = document.getElementById("glitch-crash");
const terminal = document.getElementById("terminal");
const responseText = document.getElementById("response-text");
const glitchSound = document.getElementById("glitch-sound");
const redDoorDiv = document.getElementById("red-door");
const nameInputScene = document.getElementById("name-input-scene");
const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", () => {
  document.getElementById("start-screen").classList.add("hidden");
  startGame();
});

function startGame() {
  boot.classList.remove("hidden");
  glitch.classList.add("hidden");
  terminal.classList.add("hidden");
  redDoorDiv.classList.add("hidden");
  nameInputScene.classList.add("hidden");
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

  if (choice === "A") {
    const code = prompt("Enter access code:");
    if (["1701", "6729"].includes(code)) {
      responseText.textContent = "CODE ACCEPTED.";
      setTimeout(() => {
        terminal.classList.add("hidden");
        redDoor();
      }, 2000);
    } else {
      responseText.textContent = "ACCESS DENIED. CODE UNRECOGNIZED.";
      setTimeout(() => startGame(), 3000);
    }
  } else if (choice === "B") {
    responseText.textContent = "SILENCE... JUST LIKE BEFORE.";
    setTimeout(() => startGame(), 3000);
  } else if (choice === "C") {
    responseText.textContent = "I am what’s left of you.";
    setTimeout(() => startGame(), 3000);
  } else if (choice === "D") {
    responseText.textContent = "Try one of these codes: 1223, 0990, 5658, 6729, 1701.";
    setTimeout(() => {
      document.querySelector(".choices").style.display = "block";
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
  redDoorDiv.classList.add("hidden");
  nameInputScene.classList.remove("hidden");
  document.body.style.backgroundColor = "black";
}

function submitName() {
  const name = document.getElementById("player-name").value.trim();
  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  nameInputScene.innerHTML = `<p class='door-text'>Welcome, ${name}. Your journey begins now...</p>`;
  setTimeout(() => {
    alert("Chapter 2 (Runner-style game) coming soon...");
  }, 3000);
}
