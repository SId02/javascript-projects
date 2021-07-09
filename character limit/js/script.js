
let commentText = document.querySelector(".commentText");
let length = commentText.getAttribute("maxlength");
var charLimit = document.querySelector(".characterLimit");
charLimit.innerHTML = length;
commentText.onkeyup = function () {
  document.querySelector(".characterLimit").innerHTML =
    length - this.value.length;
};
