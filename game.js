const boot = document.getElementById("ps-boot");
const glitch = document.getElementById("glitch-crash");
const terminal = document.getElementById("terminal");
const responseText = document.getElementById("response-text");

// Fake boot sequence
setTimeout(() => {
  boot.classList.add("hidden");
  glitch.classList.remove("hidden");

  setTimeout(() => {
    glitch.classList.add("hidden");
    terminal.classList.remove("hidden");
  }, 3000);
}, 2000);

// Choice handling
function respond(choice) {
  if (choice === "A") {
    responseText.textContent = "ACCESS DENIED. CODE UNRECOGNIZED.";
  } else if (choice === "B") {
    responseText.textContent = "SILENCE... JUST LIKE BEFORE.";
  } else if (choice === "C") {
    responseText.textContent = "I am what’s left of you.";
  }
}
