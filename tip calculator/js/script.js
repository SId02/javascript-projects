document.querySelector(".calculate").addEventListener("click", calculate);

let amount = document.querySelector(".amount").value;
let guests = document.querySelector(".guests").value;
let quality = document.querySelector(".quality").value;

const tipAmount = document.querySelector(".tip-amount");

tipAmount.innerHTML = "";

 function calculate() {
    const tip = ((amount * quality) / guests).toFixed(2);

    if (tip === "NaN") {
      tipAmount.innerHTML += `<div class="notification is-info is-light">  
                                        <strong> Tip &#8377; 0 each </strong>
                                    </div>`;
      showTipAmount();
    } else {
      tipAmount.innerHTML += `<div class="notification is-info is-light">    
                                        <strong> Tip &#8377; ${tip} each </strong>
                                    </div>`;
      showTipAmount();
    }  

 
 }

showTipAmount = () => {
  let tipDisplay = document.querySelector(".tip-amount");
  tipDisplay.className = "show";
  setTimeout(function () {
    tipDisplay.className = tipDisplay.className.replace("show", "");
  }, 3000);
};
