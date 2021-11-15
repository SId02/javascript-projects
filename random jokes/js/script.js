// document.querySelector("#generate").addEventListener("click", () => {
//   generate();
// });





const jokeElement = document.querySelector('#joke')
const jokeBtn = document.querySelector('#getJokes')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const response = await fetch('https://icanhazdadjoke.com', config)

  const data = await response.json()

  jokeElement.innerHTML = data.joke
}











