
document.querySelector('form').addEventListener('submit', getBMI);

function display(bmi){
    let bmiColor = document.querySelector('.output');
    if(bmi < 18.5){
        document.querySelector('p').innerText = ` Your BMI is ${bmi} , your Lean ,Put some More Weight`;
        bmiColor.classList.add('lean');
    } else if(bmi > 18.5 && bmi < 23){
        document.querySelector('p').innerText = ` Your BMI is ${bmi} , your Normal , Just  Maintain Your Fitness`;
        bmiColor.classList.add('normal');
    }  else if(bmi > 23){
        document.querySelector('p').innerText = ` Your BMI is ${bmi} , your Obese , Go To Gym and Start Training`;
        bmiColor.classList.add('obese');
    }

}
function getBMI(e){
    e.preventDefault();
    let weight = document.querySelector('#weight').value;
    let height = document.querySelector('#height').value;
    let heightinM = height/100;
    let bmi = (weight/heightinM**2).toFixed(2);
    display(bmi);
}