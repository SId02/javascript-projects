function age() {
  let d1 = document.querySelector("#date").value;
  let m1 = document.querySelector("#month").value;
  let y1 = document.querySelector("#year").value;
  let date = new Date();
  let d2 = date.getDate();
  let m2 = 1 + date.getMonth();
  let y2 = date.getFullYear();
  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (d1 > d2) {
      d2 = d2 + month[m2 - 1];
      m2 = m2 - 1;
  }
  if (m1 > m2) {
      m2 = m2 + 12;
      y2 = y2 - 1;
  }
  let d = d2 - d1;
  let m = m2 - m1;
  let y = y2 - y1;
  document.querySelector("#age").innerHTML = `Year is ${y} Years ${m} Months ${d} Days`;
}

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const box = document.querySelector('.box');
const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.button.is-link');

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  box.classList.toggle('dark-mode');
  inputs.forEach(input => input.classList.toggle('dark-mode'));
  button.classList.toggle('dark-mode');
});