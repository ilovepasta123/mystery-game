const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const boot = document.getElementById("ps-boot");
const glitch = document.getElementById("glitch-crash");
const terminal = document.getElementById("terminal");
const responseText = document.getElementById("response-text");
const glitchSound = document.getElementById("glitch-sound");
const redDoorDiv = document.getElementById("red-door");

startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
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
  const choicesDiv = document.querySelector(".choices");
  responseText.textContent = "";
  choicesDiv.style.display = "none";

  if (choice === "A") {
    const code = prompt("Enter access code:");
    if (["1701", "6729", "0990", "1223"].includes(code)) {
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
  }

  else if (choice === "B") {
    responseText.textContent = "SILENCE... JUST LIKE BEFORE.";
    setTimeout(() => {
      startGame();
    }, 3000);
  }

  else if (choice === "C") {
    responseText.textContent = "I am what’s left of you.";
    setTimeout(() => {
      startGame();
    }, 3000);
  }

  else if (choice === "D") {
    // Show fake clues
    const clueOptions = `
      <p>Clue Codes:</p>
      <button onclick="enterClue('0990')">0990</button>
      <button onclick="enterClue('6729')">6729</button>
      <button onclick="enterClue('1223')">1223</button>
    `;
    responseText.innerHTML = clueOptions;
  }
}



function redDoor() {
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
function enterClue(code) {
  responseText.textContent = `Code ${code} logged. Try it using option A.`;
  setTimeout(() => {
    startGame();
  }, 3000);
}
