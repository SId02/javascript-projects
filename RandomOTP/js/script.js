const displayPassword = document.getElementById("displayPassword");
const copyPassword = document.getElementById("copyPassword");
const submit = document.getElementById("submit");
const msgDisplay = document.getElementById("msgDisplay");
const darkModeToggle = document.getElementById("darkModeToggle");

const generateOTP = () => {
    const digit = "0123456789";
    let otp = "";
    for (let i = 0; i < 4; i++) {
        otp += digit[Math.floor(Math.random() * 10)];
    }
    displayPassword.value = otp;
};

submit.addEventListener("click", (event) => {
    event.preventDefault();
    generateOTP();
});

copyPassword.addEventListener("click", () => {
    displayPassword.select();
    document.execCommand("copy");
    msgDisplay.classList.add("show");
    setTimeout(() => {
        msgDisplay.classList.remove("show");
    }, 3000);
});

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});