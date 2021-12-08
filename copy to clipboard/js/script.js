// document.querySelector("#generate").addEventListener("click", () => {
//   generate();
// });

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("button");
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}



function myFunction() {
  /* Get the text field */
  let copyText = document.getElementById("color-code");
  console.log("copytext" + copyText);
  copyText.select();
 // copyText.setSelectionRange(0, 99999); 
  navigator.clipboard.write(copyText.value);
  alert("Copied the text: " + copyText.value);
}






