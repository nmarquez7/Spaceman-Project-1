// Add a "Secret Word" to play game at global level
// An array for all the secret words in the game.
const secretArray = ["space", "stars", "planet", "comet"]
// Secret word is the current game's word to be guessed. null means we haven't started the game yet/no word has been picked.
let secretWord = null
// setSecret will pick a secret word from the secret array.
const setSecret = () => {
    secretWord = secretArray[Math.floor(Math.random() * secretArray.length )]
}
setSecret()
console.log(secretWord)

// Form input function: This lets us guess letters from our input field via form.
const myGuessForm = document.getElementById('myGuessForm')
// This function is called when a user submits a letter to be guessed.
const processGuess = (event) => {
    event.preventDefault()
    let guessLetter = myGuessForm.elements.guess.value
    console.log(guessLetter)

    
    console.log(secretWord.includes(guessLetter))

    

// This is where I will handle all of my game logic.
}
// We are attaching the processGuess function to the submit event of our guess form to drive game logic.
myGuessForm.addEventListener('submit',processGuess )
// I can now get my letter YAY!
// Run check return true || false
// Add HTML representation 
// Manipulate HTML to reflect guess







