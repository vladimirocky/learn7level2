'use strict';

let posX = 0;
let posY = 0;
let posCX = 500;
let posCY = 0;
let moveLeft = false;
let moveUp = false;
let moveLeftC = false;
let moveUpC = false;

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const box = document.querySelector('.box');
const circle = document.querySelector('.circle');
let timeoutID;
let timeoutID2;

function move() {
  //alert('start move!');
  switch (posX) {
    case 475:
      moveLeft = true;
      break;
    case 0:
      moveLeft = false;
      break;
  }
  switch (posY) {
    case 275:
      moveUp = true;
      break;
    case 0:
      moveUp = false;
      break;

  }

  moveLeft ? posX -= 1 : posX += 1;
  moveUp ? posY -= 1 : posY += 1;

  box.style.left = posX + 'px';
  box.style.top = posY + 'px';


}

function moveCircle() {
  switch (posCX) {
    case 475:
      moveLeftC = false;
      break;
    case 0:
      moveLeftC = true;
      break;
  }
  switch (posCY) {
    case 275:
      moveUpC = false;
      break;
    case 0:
      moveUpC = true;
      break;
    case -1:
      moveUpC = false;
      break;

  }
  moveLeftC ? posCX += 1 : posCX -= 1;
  moveUpC ? posCY += 1 : posCY -= 1;
  circle.style.left = posCX + 'px';
  circle.style.top = posCY + 'px';
}
startBtn.addEventListener('click', () => {
  timeoutID = setInterval(move, 2);
  timeoutID2 = setInterval(moveCircle, 15);
  console.log('start');
});

stopBtn.addEventListener('click', () => {
  clearTimeout(timeoutID);
  clearTimeout(timeoutID2);
  console.log('stop');
});