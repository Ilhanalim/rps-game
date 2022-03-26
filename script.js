var compScore = 0;
var playerScore = 0;

function getComputerSelection() {
  let comp = Math.random();

  if (comp < 0.37) return 'rock';
  if (comp >= 0.37 && comp <= 0.67) return 'paper';
  if (comp > 0.67) return 'scissors';
}

function getResult(comp, player) {
  if (player == comp) return 'DRAW !';
  if (player == 'rock') return comp == 'scissors' ? 'YOU WIN !' : 'YOU LOSE !';
  if (player == 'paper') return comp == 'rock' ? 'YOU WIN !' : 'YOU LOSE !';
  if (player == 'scissors') return comp == 'paper' ? 'YOU WIN !' : 'YOU LOSE !';
}

function compTurn() {
  const imgComp = document.querySelector('.img-computer');
  const image = ['rock', 'paper', 'scissors'];
  const startTime = new Date().getTime();
  let i = 0;

  setInterval(function () {
    if (new Date().getTime() - startTime > 1000) {
      clearInterval;
      return;
    }
    imgComp.setAttribute('src', 'img/' + image[i++] + '.jpg');
    if (i == image.length) i = 0;
  }, 100);
}

const selection = document.querySelectorAll('li img');

selection.forEach(function (select) {
  select.addEventListener('click', function () {
    const compSelection = getComputerSelection();
    const playerInput = select.className;
    const result = getResult(compSelection, playerInput);

    compTurn();

    setTimeout(function () {
      const imgComp = document.querySelector('.img-computer');
      imgComp.setAttribute('src', 'img/' + compSelection + '.jpg');

      const info = document.querySelector('.info');
      info.innerHTML = result;

      if (result == 'YOU LOSE !') {
        compScoreHTML = document.querySelector('.computer-score');
        compScore++;
        compScoreHTML.innerHTML = compScore;
      }
      if (result == 'YOU WIN !') {
        playerScoreHTML = document.querySelector('.player-score');
        playerScore++;
        playerScoreHTML.innerHTML = playerScore;
      }
    }, 1000);

    // console.log(result);
    // console.log(compScore);
    // console.log(playerScore);
  });
});

// Kurang Efektif

// const playerRock = document.querySelector('.rock');
// playerRock.addEventListener('click', function(){
//     const compSelection = getComputerSelection();
//     const playerInput = playerRock.className;
//     const result = getResult(compSelection, playerInput);

//     const imgComp = document.querySelector('.img-computer');
//     imgComp.setAttribute('src', 'img/'+ compSelection +'.jpg');

//     const info = document.querySelector('.info');
//     info.innerHTML = result;
// });

// const playerPaper = document.querySelector('.paper');
// playerPaper.addEventListener('click', function(){
//     const compSelection = getComputerSelection();
//     const playerInput = playerPaper.className;
//     const result = getResult(compSelection, playerInput);

//     const imgComp = document.querySelector('.img-computer');
//     imgComp.setAttribute('src', 'img/'+ compSelection +'.jpg');

//     const info = document.querySelector('.info');
//     info.innerHTML = result;
// });

// const playerScissors = document.querySelector('.scissors');
// playerScissors.addEventListener('click', function(){
//     const compSelection = getComputerSelection();
//     const playerInput = playerScissors.className;
//     const result = getResult(compSelection, playerInput);

//     const imgComp = document.querySelector('.img-computer');
//     imgComp.setAttribute('src', 'img/'+ compSelection +'.jpg');

//     const info = document.querySelector('.info');
//     info.innerHTML = result;
// });
