const comboNumber = document.querySelector('.combo');
const startcomboBtn = document.querySelector('.startcombo-btn');

const timedMovesets = {
  '1':1500,
  '2':2000,
  '3':3000,
  '4':4000,
  '3 hooks':3000,
  '4 hooks':4000,
  'right straight': 1500,
  //'5 hooks':5000,
  'burpee': 4500,
  'left hook, right straight': 2000,
  'right straight, left hook': 2000,
  'right uppercut':1500,
  'left uppercut':1500,
  'left hook': 1500,
  'right hook': 1500,
  'body shot':1500,
  'liver shot':1500,
}

function getRandomMove(input) {
  // https://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
    const moveSetArray  = Object.keys(input);
    const inputIndex  = Math.floor(Math.random() * moveSetArray.length);
    const randomKey    = moveSetArray[inputIndex];
    const randomValue  = input[randomKey];
    return [randomKey,randomValue]
}

function newMove() {
  // Willekeurige move met timer afhankelijk van welke move er gedaan moet worden. 
  const move = getRandomMove(timedMovesets)
  comboNumber.innerText = move[0];
  comboNumber.classList.toggle('background-alt')
  setTimeout(newMove, move[1]);
}

//Start
startcomboBtn.addEventListener('click', () => {
  newMove()
  startcomboBtn.innerText = 'STOP';
  startcomboBtn.classList.toggle('stop')
})

// Get references to the DOM elements
const dynamicInput = document.getElementById('dynamicInput');
const addInputBtn = document.getElementById('addInput');
const removeInputBtn = document.getElementById('removeInput');

// Set up a counter to keep track of the number of input fields
let counter = 1;

// Function to add a new input field
function addInput() {
  // Create a new input element
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.name = `myInputs[${counter}]`;

  // Add the new input element to the DOM
  dynamicInput.appendChild(newInput);


  const inputs = document.querySelectorAll('[name^="myInputs["]');
  if (inputs.length === 10) {
    return;
  }


  // Increment the counter
  counter++;

}

// Function to remove the last input field
function removeInput() {
  // Get all the input elements
  const inputs = document.querySelectorAll('[name^="myInputs["]');

  // If there is only one input field, don't remove it
  if (inputs.length === 1) {
    return;
  }

  // Get the last input element and remove it from the DOM
  const lastInput = inputs[inputs.length - 1];
  dynamicInput.removeChild(lastInput);

  // Decrement the counter
  counter--;
}

// Add event listeners to the buttons
addInputBtn.addEventListener('click', addInput);
removeInputBtn.addEventListener('click', removeInput);


