const inputText = document.querySelector(".content");
const words = document.querySelector("#word");
const characters = document.querySelector("#character");
const readingTime = document.querySelector("#readingTime");
const resetBtn = document.querySelector("#reset");


inputText.addEventListener("keyup", (e) => {
  let text = e.target.value;
  countWords(text);
});


function countWords(text){
    characters.innerText=text.length;
    text=text.split(' ');
    let wordCount = 0;

    for(let i=0;i<text.length;i++){
        if(text[i]!=' ' && isWord(text[i])){
            wordCount ++;
        }
    }
    words.innerText=wordCount;
    calculateReadingTime(wordCount);
}

function isWord(text){
    let scanWord = false;
    for(let j=0;j<text.length;j++){
         let charCode=text.charCodeAt(j);
            if (
              (charCode > 47 && charCode < 58) ||
              (charCode > 64 && charCode < 91) ||
              (charCode > 96 && charCode < 123)
            ) {
              scanWord = true;
              return scanWord;
            }
        }
        return scanWord;
}

function calculateReadingTime(wordCount){
    let Time = wordCount/100;
    readingTime.textContent=Time.toFixed(2);
}

resetBtn.addEventListener("click", () => {
  inputText.value = " ";
});