document.querySelector(".calculate").addEventListener("click", calculate);
const tipAmount = document.querySelector(".tip-amount");
const body = document.body;
const toggleModeBtn = document.querySelector('#toggleMode');

tipAmount.innerHTML = "";

function calculate() {
    let amount = parseFloat(document.querySelector(".amount").value);
    let guests = parseInt(document.querySelector(".guests").value);
    let quality = parseFloat(document.querySelector(".quality").value);

    if (isNaN(amount) || isNaN(guests) || isNaN(quality) || guests === 0) {
        tipAmount.innerHTML = `<div class="notification is-info is-light"><strong> Tip &#8377; 0 each </strong></div>`;
    } else {
        const tip = ((amount * quality) / guests).toFixed(2);
        tipAmount.innerHTML = `<div class="notification is-info is-light"><strong> Tip &#8377; ${tip} each </strong></div>`;
    }
    showTipAmount();
}

function showTipAmount() {
    let tipDisplay = document.querySelector(".tip-amount");
    tipDisplay.classList.add("show");
    setTimeout(function () {
        tipDisplay.classList.remove("show");
    }, 3000);
}

toggleModeBtn.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
});