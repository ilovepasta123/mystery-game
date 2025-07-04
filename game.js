const boot = document.getElementById("ps-boot");
const glitch = document.getElementById("glitch-crash");
const terminal = document.getElementById("terminal");
const redDoorDiv = document.getElementById("red-door");
const responseText = document.getElementById("response-text");
const glitchSound = document.getElementById("glitch-sound");
const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");

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
    glitchSound.play();

    setTimeout(() => {
      glitch.classList.add("hidden");
      terminal.classList.remove("hidden");
    }, 3000);
  }, 2000);
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
      setTimeout(startGame, 3000);
    }
  } else if (choice === "B") {
    responseText.textContent = "SILENCE... JUST LIKE BEFORE.";
    setTimeout(startGame, 3000);
  } else if (choice === "C") {
    responseText.textContent = "I am what’s left of you.";
    setTimeout(startGame, 3000);
  }
}

function showClueOptions() {
  const choicesDiv = document.querySelector(".choices");
  choicesDiv.innerHTML = `
    <p>> Choose a clue:</p>
    <button onclick="useClue('6729')">🔐 Code: 6729</button>
    <button onclick="useClue('1212')">🔓 Code: 1212</button>
    <button onclick="useClue('0000')">🔍 Code: 0000</button>
    <button onclick="useClue('BACK')">🔙 Back</button>
  `;
}

function useClue(code) {
  const choicesDiv = document.querySelector(".choices");

  if (code === 'BACK') {
    choicesDiv.innerHTML = `
      <button onclick="respond('A')">[ A ] Enter the code</button>
      <button onclick="respond('B')">[ B ] Say nothing</button>
      <button onclick="respond('C')">[ C ] Ask “Who are you?”</button>
      <button onclick="showClueOptions()">[ D ] clues here maybe</button>
    `;
    return;
  }

  responseText.textContent = `You selected clue: ${code}. Interesting...`;

  setTimeout(() => {
    responseText.textContent = "";
  }, 3000);
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

