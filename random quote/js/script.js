
const quotes = [
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  {
    quote:"You can never cross the ocean until you have the courage to lose sight of the shore.",
    author: "Christopher Columbus",
  },
  {
    quote: "I didn’t fail the test. I just found 100 ways to do it wrong.",
    author: "Benjamin Franklin",
  },
  {
    quote: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein",
  },
  {
    quote: "The Way Get Started Is To Quit Talking And Begin Doing.",
    author: "Walt Disney",
  },
  {
    quote: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games.I’ve failed over and over and over again in my life. And that is why I succeed.",
    author: "Michael Jordan",
    },
    {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
    },
  {
    quote: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    quote: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford",
  }
 
];

document.querySelector(".getQuote").addEventListener('click', randomQuote);
function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  text.innerText = `“ ${random.quote}  ”`;
  author.innerText = ` -  ${random.author}`;
}


















