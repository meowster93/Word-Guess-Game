

const words = ["tacos", "enchiladas", "burritos", "carnitas", "queso", "salsa", "guac", "fajitas", "tamales"]
function getRandomWord() {
    const randomWordIndex = Math.floor(Math.random() * words.length);
    return words[randomWordIndex];
}

const containerElement = document.getElementById("characters-container")
let activeGame;
function startNewGame() {
    activeGame = {
        selectedCharacters: [],
        word: getRandomWord()

    };
}

function syncUI() {

    containerElement.innerHTML = ''; // delete everything in the container element
    const characters = activeGame.word.split(''); // declaring characters constant using individual characters from the word of active game.
    characters.forEach(function (character) { // do something using each character 

        const characterElement = document.createElement('div'); //creating a new constant characterElement and making it equal to a new empty div element
        containerElement.appendChild(characterElement); //adding characterElement to the end of containerElement

        let value = '_'; // creating a new variable 'value' which is equal to '_'
        if (activeGame.selectedCharacters.includes(character)) { // run what is between the curly braces the user has selected the current character
            value = character; // resets value variable to whatever character is
        }
        characterElement.innerHTML = value; //setting the innerHTML of characterElement to be equal to value

    });


    // UPDATE CHARACTERS SELECTED CONTAINER ElEMENT
    const characterSelectedElement = document.getElementById("characters-selected")
    characterSelectedElement.innerHTML = '';
    activeGame.selectedCharacters.forEach(function (character) {
        const characterElement = document.createElement('div'); 
        characterElement.innerHTML = character;
        characterSelectedElement.appendChild(characterElement);
        if (activeGame.word.includes(character)) {
            characterElement.classList.add("isCorrect")
        }

    });

    // IF THEY GOT EVERYTHING CORRECT I AM GOING TO  ALERT AND START A NEW GAME

}

startNewGame()
window.addEventListener("keyup", function (event) {

    const isNotInArray = !activeGame.selectedCharacters.includes(event.key);
    if (isNotInArray && event.key.length === 1) {
        activeGame.selectedCharacters.push(event.key);
        activeGame.selectedCharacters.sort()
    }
    syncUI();

    console.log(activeGame.selectedCharacters);

});

