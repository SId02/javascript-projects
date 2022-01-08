document.querySelector("#convert").addEventListener("click", reverseInteger)
function reverseInteger() {
  let integerWord = document.querySelector(".integer").value;
  let result = document.querySelector("#reverseInteger");

  if (integerWord.length < 3) {
    result.textContent = "Integer must contain at least 3 characters";
  } else {
    let revInteger = integerWord.toString().split('').reverse().join('');
 //   result.textContent = "Your reversed Integer is " + '"' + revInteger + '"';
 result.textContent = `Your reversed Integer is ${revInteger}`;
  }

}

