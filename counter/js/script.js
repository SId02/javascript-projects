let count = 0;
const value = document.querySelector(".count");
const btns = document.querySelectorAll(".button");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("increment")) {
      count++;
    } else if (styles.contains("decrement")) {
      count--;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "#008000";
    }
    if (count < 0) {
      value.style.color = "#ff0000";
    }
    if (count === 0) {
      value.style.color = "#000";
    }
    value.textContent = count;
  });
});


