// Add a "Secret Word" to play game at global level
// An array for all the secret words in the game.
const secretArray = ["space", "stars", "planet", "comet"]
let printLetter = document.querySelector('.container')
// Secret word is the current game's word to be guessed. null means we haven't started the game yet/no word has been picked.
let secretWord = null
// setSecret will pick a secret word from the secret array.
const setSecret = () => {
    secretWord = secretArray[Math.floor(Math.random() * secretArray.length )]
        
    for(let i = 0; i < secretWord.length; i++){
        console.log(secretWord[i],'__')
    // Create a div, 
    // innerHTML to be '__'
    // div.setAttribute(data-string, secretWord[i])
        let blankEl = document.createElement('span')
        printLetter.appendChild(blankEl)
        blankEl.innerText = '__'
        blankEl.style.display = 'inline-block'
        blankEl.style.marginInline = '16px'
        blankEl.style.marginTop = '200px'

    }   
}
setSecret()
console.log(secretWord)
// onClick
//  event.target 

// Form input function: This lets us guess letters from our input field via form.
const myGuessForm = document.getElementById('myGuessForm')
let isCorrectLetter = (secretWord, userGuess) => {
    let isCorrect = false
    for(let i = 0;i < secretWord.length; i++){
      const secretLetter = secretWord[i]
      if(secretLetter === userGuess){
        isCorrect = true
      } 
      console.log('secretLetter',secretLetter,i)
    } 
    return isCorrect
}
// This function is called when a user submits a letter to be guessed.
const processGuess = (event) => {
    event.preventDefault()
    let guessLetter = myGuessForm.elements.guess.value
    let letterEl = document.createElement('span')
    document.body.appendChild(letterEl)
    console.log(isCorrectLetter(secretWord,guessLetter))
} 
    
 //track what user is guessing    
 let usedLetter = (secretWord, userGuess) => {
    let takenLetter = false
    for(let i = 0;i < secretWord.length; i++){
      const newGuess = secretWord[i]
    }if(newGuess === userGuess){
        console.log(secretLetter,i)
      }        
    return takenLetter[i]
}
 
// This functi 
    // console.log(secretWord.includes(guessLetter))
// If secret word.include = guessLetter 
//  querySelectorAll secret word container
//  for each element from querySelectorAll, element.getAttribute(data-string)
//  if element.getAttribute(data-string) === current index, take "secretWord div" and set it's innerText to value getAttribute(data-string)
    

// This is where I will handle all of my game logic.

// We are attaching the processGuess function to the submit event of our guess form to drive game logic.
myGuessForm.addEventListener('submit',processGuess )
// I can now get my letter YAY!
// Run check return true || false
// Add HTML representation 
// Manipulate HTML to reflect guess







