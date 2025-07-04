const boot = document.getElementById("ps-boot");
// Element references
const boot = document.getElementById("ps-boot");
const glitch = document.getElementById("glitch-crash");
const terminal = document.getElementById("terminal");
const responseText = document.getElementById("response-text");
const glitchSound = document.getElementById("glitch-sound");
const redDoorDiv = document.getElementById("red-door");
const startBtn = document.getElementById("start-btn");
const clueMenu = document.getElementById("clue-menu");
const clueOptionsDiv = document.getElementById("clue-options");

// Clue list
const clueList = [
  "Try code 1223",
  "Maybe it's 0990",
  "5658 worked once",
  "6729 feels familiar",
  "1701 – heard that before",
  "Don't trust the system",
  "Red door is safe... or not?"
];

// Start button event
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  startGame();
});

// Game start sequence
function startGame() {
  boot.classList.remove("hidden");
  glitch.classList.add("hidden");
  terminal.classList.add("hidden");
  redDoorDiv.classList.add("hidden");
  clueMenu.classList.add("hidden");
  responseText.textContent = "";

  setTimeout(() => {
    boot.classList.add("hidden");
    glitch.classList.remove("hidden");
    glitchSound.currentTime = 0;
    glitchSound.play().catch(() => console.warn("Autoplay blocked."));

    setTimeout(() => {
      glitch.classList.add("hidden");
      terminal.classList.remove("hidden");
      document.querySelector(".choices").style.display = "block";
    }, 3000);
  }, 2000);
}

// Respond to player choices
function respond(choice) {
  document.querySelector(".choices").style.display = "none";

  if (choice === "D") {
    showClueMenu();
    return;
  }

  if (choice === "A") {
    const code = prompt("Enter access code:");
    if (["1701", "6729"].includes(code)) {
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

// Show the clue menu
function showClueMenu() {
  clueMenu.classList.remove("hidden");
  clueOptionsDiv.innerHTML = "";

  const randomClues = shuffleArray(clueList).slice(0, 3);
  randomClues.forEach((clue) => {
    const btn = document.createElement("button");
    btn.textContent = clue;
    btn.onclick = () => {
      responseText.textContent = `You chose: "${clue}"`;
      clueMenu.classList.add("hidden");
      setTimeout(() => {
        startGame();
      }, 3000);
    };
    clueOptionsDiv.appendChild(btn);
  });
}

// Close clue menu manually
function closeClueMenu() {
  clueMenu.classList.add("hidden");
  document.querySelector(".choices").style.display = "block";
}

// Utility: Shuffle array
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Red door scene
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
