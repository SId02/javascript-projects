
const columns = document.querySelector(".columns");
const URL = "https://source.unsplash.com/random/";
const rows = 4;

for (let i = 0; i < rows * 5; i++) {
  const column = document.createElement("column");
  const img = document.createElement("img");
  columns.appendChild(column);
  column.className = "column is-3";
  img.src = `${URL}${getSize()}`;
  column.appendChild(img);
}

function getSize() {
  return `${randomNo()}x${randomNo()}`;
}

function randomNo() {
  return Math.floor(Math.random() * 10) + 300;
}
