const currencyEl_one = document.querySelector("#currency-one");
const amountEl_one = document.querySelector("#amount-one");
const currencyEl_two = document.querySelector("#currency-two");
const amountEl_two = document.querySelector("#amount-two");

const rateEl = document.querySelector("#rate");
const swap_currency = document.querySelector("#swap");


function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency_two];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}


currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);

swap_currency.addEventListener("click", () => {
  [currencyEl_one.value, currencyEl_two.value] = [
    currencyEl_two.value,
    currencyEl_one.value,
  ];
  calculate();
});


