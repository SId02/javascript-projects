document.querySelector("#check").addEventListener("click", isLeapYear);
const darkModeToggle = document.getElementById("darkModeToggle");

function isLeapYear() {
    var year = document.querySelector("#year").value;
    if (year === "") {
        document.querySelector("#leapornotyear").innerHTML = "Please enter a year.";
    } else {
        var isLeap = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
        document.querySelector("#leapornotyear").innerHTML = isLeap ? year + " is a leap year." : year + " is not a leap year.";
    }
}
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});