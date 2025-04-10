function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function winner(winnernum) {
  let winnerNum = getRandomInt(1, 50);
  document.querySelector(`.winner-${winnernum}`).innerHTML = winnerNum;
  document.querySelector(`.winner-${winnernum}-img`).src = "./img/cup.png";
}
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});