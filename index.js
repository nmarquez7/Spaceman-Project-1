// Form input function: This lets us guess letters from our input field via form.
const myGuess = document.getElementById('myGuessForm')
myGuess.addEventListener('submit', (event) => {
    event.preventDefault()
    let guessLetter = myGuess.elements.guess.value
    console.log(guessLetter)
    
// I can now get my letter YAY!
// Add a "Secret Word" to play game at global level
let secretWord = () => {
    key = ["space", "stars", "planet", "comet"]
    console.log(key)
    }
// Run check return true || false
// Add HTML representation 
// Manipulate HTML to reflect guess




    


