document.querySelector("#convert").addEventListener("click", reverseString)
function reverseString() {
  let stringWord = document.querySelector(".string").value;
  let result = document.querySelector("#reverseString");
  if (stringWord.length < 8) {
    result.textContent = "String must contain at least 8 characters";
  } else {
    let revString = stringWord.split("").reverse().join("");
    result.textContent = "Your reversed string is " + '"' + revString + '"';
  }
}
