
document.querySelector("#check").addEventListener("click", isLeapYear);

function isLeapYear() {
  var year= document.querySelector("#year").value;
    
  document.querySelector("#leapornotyear").innerHTML 
      = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}













