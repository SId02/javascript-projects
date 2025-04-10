const reverseStringButton = document.getElementById("reverseStringButton");
const reverseIntegerButton = document.getElementById("reverseIntegerButton");
const reverseStringResult = document.getElementById("reverseStringResult");
const reverseIntegerResult = document.getElementById("reverseIntegerResult");
const darkModeToggle = document.getElementById("darkModeToggle");

reverseStringButton.addEventListener("click", () => {
    const stringWord = document.querySelector(".string").value;
    if (stringWord.length < 8) {
        reverseStringResult.textContent = "String must contain at least 8 characters";
    } else {
        const revString = stringWord.split("").reverse().join("");
        reverseStringResult.textContent = `Your reversed string is "${revString}"`;
    }
});

reverseIntegerButton.addEventListener("click", () => {
    const integerWord = document.querySelector(".integer").value;
    if (integerWord.toString().length < 3) {
        reverseIntegerResult.textContent = "Integer must contain at least 3 characters";
    } else {
        const revInteger = integerWord.toString().split("").reverse().join("");
        reverseIntegerResult.textContent = `Your reversed Integer is ${revInteger}`;
    }
});

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});