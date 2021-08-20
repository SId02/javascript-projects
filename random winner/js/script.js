function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function winner(winnernum) {
  let winnerNum = getRandomInt(1, 50);
  if (winnernum == 1) {
    document.querySelector(".winner-one").innerHTML = winnerNum;
    document.querySelector(".winner-one-img").src = "img/cup.png";
  } else if (winnernum == 2) {
    document.querySelector(".winner-two").innerHTML = winnerNum;
    document.querySelector(".winner-two-img").src = "img/cup.png";
  } else if (winnernum == 3) {
    document.querySelector(".winner-three").innerHTML = winnerNum;
    document.querySelector(".winner-three-img").src = "img/cup.png";
  }
}
