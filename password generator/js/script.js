const empty = "";
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*=-_><;.";

let passLength = document.querySelector("#op-length");
let lowerCase = document.querySelector("#passLowercase");
let upperCase = document.querySelector("#passUppercase");
let passNumber = document.querySelector("#passNumber");
let passSymbols = document.querySelector("#passSymbols");
let submit = document.querySelector("#submit");
let password = document.querySelector("#displayPassword");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let initialPassword = empty;
  upperCase.checked ? (initialPassword += uCase) : "";
  lowerCase.checked ? (initialPassword += lCase) : "";
  passNumber.checked ? (initialPassword += number) : "";
  passSymbols.checked ? (initialPassword += symbols) : "";

  password.value = generatePassword(passLength.value, initialPassword);
});

function generatePassword(l, initialPassword) {
  let pass = "";
  for (let i = 0; i < l; i++) {
    pass += initialPassword.charAt(
      Math.floor(Math.random() * initialPassword.length)
    );
  }
  return pass;
}

// 
function notification() {
  let value = document.querySelector("#msgDisplay");
  value.className = "show";
  setTimeout(function () {
    value.className = value.class.replace("show", "");
  }, 3000);
}
// 
const copy = document.querySelector("#copyPassword");

copy.addEventListener("click", (e) => {
   e.preventDefault();
  if (password.value == "") {
  } else {
    password.select();
    document.execCommand("copy");
    notification();
  }
});

