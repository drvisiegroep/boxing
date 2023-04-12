const comboNumber = document.querySelector('.combo');

const timedMovesets = {
  '1':1500 ,
  '2':2000,
  '3':3000,
  '4':4000,
  '3 hooks':3000,
  '4 hooks':4000,
  '5 hooks':5000,
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
newMove();



