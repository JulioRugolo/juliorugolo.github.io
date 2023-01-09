const ball = document.getElementsByClassName('ball');
const r = () => Math.floor((Math.random() * 255));
const g = () => Math.floor((Math.random() * 255));
const b = () => Math.floor((Math.random() * 255));
const pickcolor = document.getElementById('rgb-color');
const ballSort = () => (Math.floor(Math.random() * ball.length));
const result = document.getElementById('answer');
const resetGame = document.getElementById('reset-game');
const scoreCounter = document.getElementById('score');
scoreCounter.innerHTML = 0;
let victoryCount = 0;
const scoreboard = document.getElementById('scoreboard');

function createBalls() {
  pickcolor.innerHTML = `rgb(${r()}, ${g()}, ${b()})`;
  for (let index = 0; index < ball.length; index += 1) {
    if (ball[index].style.backgroundColor !== pickcolor.innerHTML) {
      ball[index].style.backgroundColor = `rgb(${r()}, ${g()}, ${b()})`;
    }
  }
  ball[ballSort()].style.backgroundColor = pickcolor.innerHTML;
  result.innerText = 'Escolha uma cor';
  document.body.style.backgroundImage = 'url("./img/bgimage.jpeg")';
  document.body.style.backgroundPositionY = '0';
  document.getElementById('scoreboard').style.color = 'white';
}

createBalls();

function wrongTest() {
  if (event.target.style.backgroundColor !== pickcolor.innerHTML) {
    result.innerHTML = 'Errou! Tente novamente!';
  }
}

function rightTest() {
  if (event.target.style.backgroundColor === pickcolor.innerHTML) {
    result.innerHTML = 'Acertou!';
    victoryCount += 3;
    scoreCounter.innerText = victoryCount;
    document.getElementById('meme-win').style.backgroundImage = 'url("./img/congrats.gif")';
  }
}

const validate = () => {
  wrongTest();
  rightTest();
};

function clickValidate() {
  for (let index = 0; index < ball.length; index += 1) {
    ball[index].addEventListener('click', validate);
  }
}

clickValidate();

resetGame.addEventListener('click', createBalls);
