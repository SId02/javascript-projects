
// let submit = document.querySelector("#submit");
// let password = document.querySelector("#displayPassword");

const generateOTP = () => {
  const digit = "0123456789";
  let otp = "";
  for (let i = 0; i < 4; i++) {
    otp += digit[Math.floor(Math.random() * 10)];
  }
  return `${<p class="control is-expanded">
    <input class="input displayPassword" id="displayPassword" type="text" placeholder="OTP (One Time Password)" />
  </p>

    }`;
};
generateOTP();

















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

